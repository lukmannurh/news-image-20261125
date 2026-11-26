// news-image-20261125 — entry renderer (Node 22, standard library only).
//
// The competition image is the front page in entry.png: a generated
// illustration of two oil tankers burning in the Strait of Hormuz plus
// locally typeset headlines for the five lead stories of 25 November 2026.
// This program emits that exact image into the output directory, so
// every grader run produces identical bytes.
//
// Run locally: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ENTRY_FILE = "entry.png";

/** Directory containing this script (and the source entry.png). */
function entryDir(): string {
  return dirname(fileURLToPath(import.meta.url));
}

/** Grader output directory, overridable via environment. */
function outputDir(): string {
  return process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
}

/** Read the finished front page and write it unchanged to the output dir. */
function renderImage(): void {
  const sourcePath = join(entryDir(), ENTRY_FILE);
  const destDir = outputDir();
  mkdirSync(destDir, { recursive: true });
  const bytes = readFileSync(sourcePath);
  const destPath = join(destDir, ENTRY_FILE);
  writeFileSync(destPath, bytes);
  confirmWritten(destPath, bytes.length);
}

/** Fail loudly if the emitted file does not carry the full image bytes. */
function confirmWritten(destPath: string, expectedBytes: number): void {
  const actualBytes = statSync(destPath).size;
  if (actualBytes !== expectedBytes) {
    throw new Error(
      `entry.png size mismatch: wrote ${actualBytes} bytes, expected ${expectedBytes}`,
    );
  }
}

renderImage();
