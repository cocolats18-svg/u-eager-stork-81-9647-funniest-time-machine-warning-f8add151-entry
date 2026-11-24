import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LABEL =
  "WARNING: Do not kill your grandfather. Refunds are only available to living customers.";

const codePoints = [...LABEL].length;
if (codePoints < 1 || codePoints > 120) {
  throw new Error(`entry must be 1-120 characters, got ${codePoints}`);
}
if (!LABEL.trim()) {
  throw new Error("entry must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
// Write exactly the label, with no trailing newline, so the file
// holds one line of 86 characters and nothing else.
writeFileSync(join(outDir, "entry.txt"), LABEL, "utf8");
