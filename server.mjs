import { createReadStream } from "node:fs";
import { promises as fs } from "node:fs";
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT_DIR = path.dirname(fileURLToPath(import.meta.url));
const HOST = process.env.HOST || "0.0.0.0";
const PORT = Number(process.env.PORT || 4173);
const ASSET_VERSION = (process.env.ASSET_VERSION || "").trim();

const MIME_TYPES = {
  ".css": "text/css; charset=utf-8",
  ".eot": "application/vnd.ms-fontobject",
  ".gif": "image/gif",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".map": "application/json; charset=utf-8",
  ".mp4": "video/mp4",
  ".png": "image/png",
  ".spline": "application/octet-stream",
  ".svg": "image/svg+xml",
  ".ttf": "font/ttf",
  ".txt": "text/plain; charset=utf-8",
  ".webm": "video/webm",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".xml": "application/xml; charset=utf-8",
};

const VERSIONED_EXTENSIONS = new Set([
  ".avif",
  ".css",
  ".eot",
  ".gif",
  ".ico",
  ".jpeg",
  ".jpg",
  ".js",
  ".json",
  ".map",
  ".mp4",
  ".png",
  ".spline",
  ".svg",
  ".ttf",
  ".webm",
  ".webmanifest",
  ".webp",
  ".woff",
  ".woff2",
]);

const ASSET_URL_PATTERN =
  /(?<prefix>["'(=:\s])(?<url>(?:\/|\.\.?\/)[^"'()<> \t\r\n]+?\.(?:avif|css|eot|gif|ico|jpe?g|js|json|map|mp4|png|spline|svg|ttf|webm|webmanifest|webp|woff2?)(?:\?[^"'()<> \t\r\n]*)?(?:#[^"'()<> \t\r\n]*)?)/gi;

function sendJson(res, statusCode, payload) {
  const body = JSON.stringify(payload);
  res.writeHead(statusCode, {
    "Content-Length": Buffer.byteLength(body),
    "Content-Type": "application/json; charset=utf-8",
  });
  res.end(body);
}

function sendText(res, statusCode, text) {
  res.writeHead(statusCode, {
    "Content-Length": Buffer.byteLength(text),
    "Content-Type": "text/plain; charset=utf-8",
  });
  res.end(text);
}

function appendAssetVersion(rawUrl) {
  if (!ASSET_VERSION || !rawUrl) {
    return rawUrl;
  }

  if (
    rawUrl.startsWith("data:") ||
    rawUrl.startsWith("mailto:") ||
    rawUrl.startsWith("tel:") ||
    rawUrl.startsWith("#")
  ) {
    return rawUrl;
  }

  const [pathWithQuery, hash = ""] = rawUrl.split("#");
  const [pathname, query = ""] = pathWithQuery.split("?");
  const extension = path.extname(pathname).toLowerCase();

  if (!VERSIONED_EXTENSIONS.has(extension)) {
    return rawUrl;
  }

  const params = new URLSearchParams(query);
  params.set("v", ASSET_VERSION);

  return `${pathname}?${params.toString()}${hash ? `#${hash}` : ""}`;
}

function rewriteAssetUrls(text) {
  if (!ASSET_VERSION) {
    return text;
  }

  return text.replace(ASSET_URL_PATTERN, (match, _prefix, _url, _offset, _source, groups) => {
    const prefix = groups?.prefix || "";
    const url = groups?.url || "";
    return `${prefix}${appendAssetVersion(url)}`;
  });
}

function isPathInsideRoot(targetPath) {
  const relativePath = path.relative(ROOT_DIR, targetPath);
  return relativePath && !relativePath.startsWith("..") && !path.isAbsolute(relativePath);
}

async function resolveFilePath(urlPathname) {
  const safePathname = decodeURIComponent(urlPathname);
  const joinedPath = path.join(ROOT_DIR, safePathname);

  if (safePathname !== "/" && !isPathInsideRoot(joinedPath)) {
    return null;
  }

  const candidates = [];
  if (safePathname === "/") {
    candidates.push(path.join(ROOT_DIR, "index.html"));
  } else {
    candidates.push(joinedPath);
    if (!path.extname(joinedPath)) {
      candidates.push(`${joinedPath}.html`);
    }
    candidates.push(path.join(joinedPath, "index.html"));
  }

  for (const candidate of candidates) {
    try {
      const stats = await fs.stat(candidate);
      if (stats.isFile()) {
        return { filePath: candidate, stats };
      }
    } catch {
      // Keep trying other candidates.
    }
  }

  return null;
}

async function handleAdminAjax(req, res) {
  let body = "";

  req.on("data", (chunk) => {
    body += chunk.toString();
  });

  req.on("end", () => {
    sendJson(res, 200, {
      result: true,
      action: body.includes("submit_contact_form") ? "submit_contact_form" : null,
    });
  });
}

async function handleStaticRequest(req, res, pathname) {
  const resolved = await resolveFilePath(pathname);
  if (!resolved) {
    sendText(res, 404, "Not Found");
    return;
  }

  const extension = path.extname(resolved.filePath).toLowerCase();
  const contentType = MIME_TYPES[extension] || "application/octet-stream";
  const headers = {
    "Cache-Control": extension === ".html" ? "no-cache" : "public, max-age=31536000, immutable",
    "Content-Type": contentType,
  };

  if (ASSET_VERSION) {
    headers["X-Asset-Version"] = ASSET_VERSION;
  }

  if (extension === ".html" || extension === ".css") {
    const rawText = await fs.readFile(resolved.filePath, "utf8");
    const body = rewriteAssetUrls(rawText);

    headers["Content-Length"] = Buffer.byteLength(body);
    res.writeHead(200, headers);

    if (req.method === "HEAD") {
      res.end();
      return;
    }

    res.end(body);
    return;
  }

  headers["Content-Length"] = resolved.stats.size;
  res.writeHead(200, headers);

  if (req.method === "HEAD") {
    res.end();
    return;
  }

  createReadStream(resolved.filePath).pipe(res);
}

const server = http.createServer(async (req, res) => {
  try {
    const requestUrl = new URL(req.url || "/", `http://${req.headers.host || "localhost"}`);
    const pathname = requestUrl.pathname;

    if (pathname === "/wp-admin/admin-ajax.php" && req.method === "POST") {
      await handleAdminAjax(req, res);
      return;
    }

    if (req.method !== "GET" && req.method !== "HEAD") {
      sendText(res, 405, "Method Not Allowed");
      return;
    }

    await handleStaticRequest(req, res, pathname);
  } catch (error) {
    sendText(res, 500, `Server Error\n${error instanceof Error ? error.message : "Unknown error"}`);
  }
});

server.listen(PORT, HOST, () => {
  console.log(
    `yojo-portfolio server listening on http://${HOST}:${PORT} (root: ${ROOT_DIR}, assetVersion: ${ASSET_VERSION || "none"})`,
  );
});
