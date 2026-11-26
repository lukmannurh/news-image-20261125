// news-image-20261125 entry (Node 22, standard library only).
//
// The entry image is the front page in entry.png, composed for this
// competition from a generated illustration of the burning tankers in the
// Strait of Hormuz plus typeset headlines for the day's five lead stories.
// This program writes that exact image to the output directory, unchanged,
// so both grader runs produce identical bytes.
//
// Run locally: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, "entry.png"));
