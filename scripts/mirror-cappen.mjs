import fs from "node:fs/promises";
import path from "node:path";
import { Buffer } from "node:buffer";
import * as cheerio from "cheerio";

const ORIGIN = "https://cappen.com";
const ROOT = process.cwd();
const PAGE_QUEUE = [
  "/",
  "/about/",
  "/works/",
  "/start-a-project/",
  "/shop/",
  "/work/amanda-braga/",
  "/work/credit-genie/",
  "/work/jcpm-malls/",
  "/work/leadedu/",
  "/work/ministry-of-supply/",
  "/work/neondoor/",
];

const EXTRA_ASSETS = [
  `${ORIGIN}/wp-content/themes/cappen/css/main.css?ver=1763050062177`,
  `${ORIGIN}/wp-content/themes/cappen/js/vendors-main.js?ver=1763050062177`,
  `${ORIGIN}/wp-content/themes/cappen/js/main.js?ver=1763050062177`,
  `${ORIGIN}/wp-content/themes/cappen/model/scene.3591b.spline`,
];

const TEXT_EXTENSIONS = new Set([
  ".css",
  ".js",
  ".json",
  ".svg",
  ".xml",
  ".txt",
  ".map",
  ".html",
  ".htm",
  ".php",
  ".webmanifest",
]);

const processedPages = new Set();
const processedAssets = new Set();
const pageQueue = [...PAGE_QUEUE];

function normalizeUrl(raw, base = ORIGIN) {
  if (!raw) return null;

  const value = raw.trim();
  if (
    !value ||
    value.startsWith("#") ||
    value.startsWith("data:") ||
    value.startsWith("mailto:") ||
    value.startsWith("tel:")
  ) {
    return null;
  }

  const source = value.startsWith("//") ? `https:${value}` : value;

  try {
    return new URL(source, base);
  } catch {
    return null;
  }
}

function isSameOrigin(url) {
  return url.origin === ORIGIN;
}

function isAssetUrl(url) {
  const basename = path.posix.basename(url.pathname);
  return /\.[a-z0-9]{2,8}$/i.test(basename);
}

function shouldMirrorAsset(url) {
  if (!isAssetUrl(url)) return false;

  const blocked = [
    "/wp-admin/",
    "/xmlrpc.php",
  ];

  return !blocked.some((item) => url.pathname.startsWith(item) || url.pathname === item);
}

function routeToFile(routePath) {
  const clean = routePath.replace(/^\/+|\/+$/g, "");
  return clean ? path.join(ROOT, clean, "index.html") : path.join(ROOT, "index.html");
}

function assetToFile(url) {
  const clean = decodeURIComponent(url.pathname.replace(/^\/+/, ""));
  return path.join(ROOT, clean);
}

async function writeFile(target, value) {
  await fs.mkdir(path.dirname(target), { recursive: true });
  await fs.writeFile(target, value);
}

function toLocalRoute(url) {
  let pathname = url.pathname || "/";
  if (!pathname.endsWith("/")) pathname += "/";
  return `${pathname}${url.hash || ""}`;
}

function toLocalAsset(url) {
  return `${url.pathname}${url.hash || ""}`;
}

function rewriteInlineConfig(html) {
  return html
    .replace(
      /window\.baseURL="https:\/\/cappen\.com"/g,
      'window.baseURL=window.location.origin',
    )
    .replace(
      /window\.themeURL="https:\/\/cappen\.com\/wp-content\/themes\/cappen"/g,
      'window.themeURL=window.location.origin+"/wp-content/themes/cappen"',
    )
    .replace(/https:\/\/cappen\.com(?=\/wp-content\/themes\/cappen\/)/g, "");
}

function cleanupMirroredHtml(html, route) {
  const localRoute = route === "/" ? "/" : route;

  return html
    .replace(
      /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
      '<script type="application/ld+json">{"@context":"https://schema.org","@type":"Organization","name":"Cappen","url":"/","logo":"/wp-content/uploads/2025/09/Open-Graph-01.png","description":"Cappen"}</script>',
    )
    .replace(
      /var pagelayer_ajaxurl = "https:\/\/cappen\.com\/wp-admin\/admin-ajax\.php\?";/g,
      'var pagelayer_ajaxurl = window.location.origin + "/wp-admin/admin-ajax.php?";',
    )
    .replace(
      /<!-- Google tag \(gtag\.js\) -->\s*<script async="" src="https:\/\/www\.googletagmanager\.com\/gtag\/js\?id=G-EDYJWHFV67"><\/script>\s*<script>[\s\S]*?<\/script>/g,
      "",
    )
    .replace(/<link rel="EditURI"[^>]+>/g, "")
    .replace(
      /(<meta property="og:url" content=")[^"]*(")/g,
      `$1${localRoute}$2`,
    )
    .replace(
      /(<meta name="twitter:url" content=")[^"]*(")/g,
      `$1${localRoute}$2`,
    )
    .replace(
      /(<meta property="og:image" content=")[^"]*(")/g,
      '$1/wp-content/uploads/2025/09/Open-Graph-01.png$2',
    )
    .replace(
      /(<meta property="og:secure_url" content=")[^"]*(")/g,
      '$1/wp-content/uploads/2025/09/Open-Graph-01.png$2',
    )
    .replace(
      /(<meta name="twitter:image" content=")[^"]*(")/g,
      '$1/wp-content/uploads/2025/09/Open-Graph-01.png$2',
    )
    .replace(
      /(<meta name="msapplication-TileImage" content=")[^"]*(")/g,
      '$1/wp-content/uploads/2025/07/favicon-300x300.png$2',
    );
}

function collectTextAssetRefs(content, baseUrl) {
  const refs = new Set();

  const urlRegex = /url\(([^)]+)\)/g;
  for (const match of content.matchAll(urlRegex)) {
    const raw = match[1].trim().replace(/^['"]|['"]$/g, "");
    const url = normalizeUrl(raw, baseUrl);
    if (url && isSameOrigin(url) && shouldMirrorAsset(url)) {
      refs.add(url.toString());
    }
  }

  const quotedRegex =
    /["'`](https:\/\/cappen\.com\/[^"'` )]+|\/wp-content\/[^"'` )]+|\.\.?\/[^"'` )]+\.(?:css|js|svg|png|jpe?g|webp|gif|woff2?|woff|mp4|webm|spline|json|xml)(?:\?[^"'` )]*)?)["'`]/g;
  for (const match of content.matchAll(quotedRegex)) {
    const url = normalizeUrl(match[1], baseUrl);
    if (url && isSameOrigin(url) && shouldMirrorAsset(url)) {
      refs.add(url.toString());
    }
  }

  return [...refs];
}

async function queueAsset(rawUrl) {
  const url = normalizeUrl(rawUrl);
  if (!url || !isSameOrigin(url) || !shouldMirrorAsset(url)) return;

  const key = url.pathname;
  if (processedAssets.has(key)) return;
  processedAssets.add(key);

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to download asset: ${url} (${response.status})`);
  }

  const contentType = response.headers.get("content-type") || "";
  const ext = path.posix.extname(url.pathname).toLowerCase();
  const isText =
    TEXT_EXTENSIONS.has(ext) ||
    contentType.startsWith("text/") ||
    /(?:javascript|json|xml|svg)/i.test(contentType);

  const buffer = Buffer.from(await response.arrayBuffer());
  let output = buffer;

  if (isText) {
    let text = buffer.toString("utf8");
    text = text.replace(/https:\/\/cappen\.com(?=\/wp-content\/themes\/cappen\/)/g, "");
    text = text
      .replace(/\/\*# sourceMappingURL=.*?\*\//g, "")
      .replace(/\/\/# sourceMappingURL=.*$/gm, "");

    for (const ref of collectTextAssetRefs(text, url)) {
      await queueAsset(ref);
    }

    output = Buffer.from(text);
  }

  await writeFile(assetToFile(url), output);
  console.log(`asset  ${url.pathname}`);
}

function rewriteSrcset(value, baseUrl) {
  return value
    .split(",")
    .map((part) => {
      const [rawUrl, ...rest] = part.trim().split(/\s+/);
      const url = normalizeUrl(rawUrl, baseUrl);
      if (!url || !isSameOrigin(url)) return part.trim();
      return [isAssetUrl(url) ? toLocalAsset(url) : toLocalRoute(url), ...rest]
        .filter(Boolean)
        .join(" ");
    })
    .join(", ");
}

function collectSrcsetAssets(value, baseUrl) {
  const assets = [];

  for (const part of value.split(",")) {
    const [rawUrl] = part.trim().split(/\s+/);
    const url = normalizeUrl(rawUrl, baseUrl);
    if (url && isSameOrigin(url) && shouldMirrorAsset(url)) {
      assets.push(url.toString());
    }
  }

  return assets;
}

async function processPage(route) {
  if (processedPages.has(route)) return;
  processedPages.add(route);

  const pageUrl = new URL(route, ORIGIN);
  const response = await fetch(pageUrl);
  if (!response.ok) {
    throw new Error(`Failed to download page: ${pageUrl} (${response.status})`);
  }

  const html = await response.text();
  const $ = cheerio.load(html, { decodeEntities: false });

  $("script").each((_, element) => {
    const script = $(element);
    if (!script.attr("src")) {
      script.html(rewriteInlineConfig(script.html() || ""));
    }
  });

  const attrNames = ["href", "src", "poster", "action", "data-link"];
  const assetDownloads = [];

  $("*").each((_, element) => {
    const node = $(element);

    for (const attr of attrNames) {
      const value = node.attr(attr);
      const url = normalizeUrl(value, pageUrl);
      if (!url || !isSameOrigin(url)) continue;

      if (shouldMirrorAsset(url)) {
        node.attr(attr, toLocalAsset(url));
        assetDownloads.push(queueAsset(url.toString()));
        continue;
      }

      if (isAssetUrl(url) && !shouldMirrorAsset(url)) {
        continue;
      }

      const routePath = toLocalRoute(url).replace(/#.*$/, "");
      if (!processedPages.has(routePath) && !pageQueue.includes(routePath)) {
        pageQueue.push(routePath);
      }
      node.attr(attr, toLocalRoute(url));
    }

    const srcset = node.attr("srcset");
    if (srcset) {
      node.attr("srcset", rewriteSrcset(srcset, pageUrl));
      for (const asset of collectSrcsetAssets(srcset, pageUrl)) {
        assetDownloads.push(queueAsset(asset));
      }
    }
  });

  const serialized = cleanupMirroredHtml(rewriteInlineConfig($.html()), route);
  await writeFile(routeToFile(route), serialized);
  await Promise.all(assetDownloads);
  console.log(`page   ${route}`);
}

async function main() {
  while (pageQueue.length) {
    const route = pageQueue.shift();
    await processPage(route);
  }

  for (const asset of EXTRA_ASSETS) {
    await queueAsset(asset);
  }

  console.log("mirror complete");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
