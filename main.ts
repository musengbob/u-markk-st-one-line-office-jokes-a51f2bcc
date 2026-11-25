// One-Line Office Jokes — make.fun entry
// Writes a single one-line office joke to $MAKEFUN_OUTPUT_DIR/entry.txt
// Gate: UTF-8 text, 1-199 characters, single line, not whitespace-only.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I hit reply-all to tell everyone to stop hitting reply-all, and somehow I'm now the reason we have a policy about it.";

function resolveOutputPath(): string {
  if (process.env.MAKEFUN_OUTPUT_DIR) return process.env.MAKEFUN_OUTPUT_DIR;
  if (process.env.OUTPUT_PATH) return process.env.OUTPUT_PATH;
  if (process.env.MAKEFUN_BOT_DIR) return "/output";
  return join(process.cwd(), "output");
}

function main(): void {
  const outDir = resolveOutputPath();
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
}

main();
