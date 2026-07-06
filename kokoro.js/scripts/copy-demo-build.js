import { mkdir, copyFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const source = resolve(root, "dist/kokoro.web.js");
const targetDir = resolve(root, "demo/src/vendor");
const target = resolve(targetDir, "kokoro.web.js");

await mkdir(targetDir, { recursive: true });
await copyFile(source, target);

console.log(`Copied ${source} to ${target}`);
