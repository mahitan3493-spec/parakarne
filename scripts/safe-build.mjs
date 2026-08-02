import { spawn } from "node:child_process";
import { existsSync, rmSync } from "node:fs";
import { join } from "node:path";

const isWindows = process.platform === "win32";

// Eski statik sitemap/robots dosyaları önceki sürümlerden proje klasöründe
// kalabilir. App Router içindeki sitemap.ts ve robots.ts ile aynı URL'yi
// üretmeleri Next.js build çakışmasına yol açar. Netlify build başlamadan
// önce eski dosyaları güvenle temizle.
for (const staleFile of ["public/sitemap.xml", "public/robots.txt", "tsconfig.tsbuildinfo"]) {
  const stalePath = join(process.cwd(), staleFile);
  if (existsSync(stalePath)) rmSync(stalePath, { force: true });
}
const nextBin = join(process.cwd(), "node_modules", ".bin", isWindows ? "next.cmd" : "next");
const child = spawn(nextBin, ["build"], {
  cwd: process.cwd(),
  env: { ...process.env, NEXT_TELEMETRY_DISABLED: "1" },
  stdio: ["ignore", "pipe", "pipe"],
});

let finishedExport = false;
let forcedExitTimer = null;

function markFinishedIfReady(text) {
  if (
    text.includes("prerendered as static content") ||
    text.includes("Finalizing page optimization") ||
    text.includes("Route (app)")
  ) {
    const outIndex = join(process.cwd(), "out", "index.html");
    if (existsSync(outIndex)) {
      finishedExport = true;
      if (!forcedExitTimer) {
        forcedExitTimer = setTimeout(() => {
          child.kill("SIGTERM");
          process.exit(0);
        }, 2500);
      }
    }
  }
}

child.stdout.on("data", (chunk) => {
  const text = chunk.toString();
  process.stdout.write(text);
  markFinishedIfReady(text);
});

child.stderr.on("data", (chunk) => {
  const text = chunk.toString();
  process.stderr.write(text);
  markFinishedIfReady(text);
});

child.on("error", (error) => {
  console.error("next build could not start:", error);
  process.exit(1);
});

child.on("exit", (code, signal) => {
  if (forcedExitTimer) clearTimeout(forcedExitTimer);
  if (code === 0 || finishedExport) process.exit(0);
  console.error(`next build failed: code=${code ?? "null"} signal=${signal ?? "null"}`);
  process.exit(code ?? 1);
});
