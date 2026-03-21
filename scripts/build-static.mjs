import { cp, mkdir, readdir, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIST_DIR = path.join(ROOT_DIR, "dist");

const ROOT_EXCLUDES = new Set([
  ".git",
  ".gitignore",
  "dist",
  "ecosystem.config.cjs",
  "node_modules",
  "package-lock.json",
  "package.json",
  "README.md",
  "scripts",
  "server.mjs",
  "vite.config.js",
]);

function shouldCopy(sourcePath) {
  const relativePath = path.relative(ROOT_DIR, sourcePath);
  if (!relativePath) {
    return true;
  }

  const segments = relativePath.split(path.sep);
  const topLevelName = segments[0];
  const baseName = segments.at(-1);

  if (ROOT_EXCLUDES.has(topLevelName)) {
    return false;
  }

  return baseName !== ".DS_Store";
}

async function main() {
  await rm(DIST_DIR, { force: true, recursive: true });
  await mkdir(DIST_DIR, { recursive: true });

  const entries = await readdir(ROOT_DIR, { withFileTypes: true });

  for (const entry of entries) {
    if (ROOT_EXCLUDES.has(entry.name)) {
      continue;
    }

    const sourcePath = path.join(ROOT_DIR, entry.name);
    const targetPath = path.join(DIST_DIR, entry.name);

    await cp(sourcePath, targetPath, {
      filter: (source) => shouldCopy(source),
      recursive: true,
    });
  }

  console.log(`static build complete: ${DIST_DIR}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
