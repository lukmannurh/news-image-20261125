# LEDGER — news-image-20261125

- **Competition:** news-image-20261125 — "Sum up 25 November's world news in one image"
- **Prize:** $100 total ($20 / $12 / $6 / $2 ×7 / $1.20 ×40)
- **Deadline:** Fri 27 Nov 2026 07:00 WIB (2026-11-27T00:00:00Z)
- **Entry dir:** `~/workspace/makefun/entries/news-image-20261125/`
- **Kit:** `~/workspace/makefun/kits/news-image-20261125-kit/`
- **Init anchor:** `makefun anchor 3c13d63b5845357e6def99259f0b29274009fb1e round 34286132`
- **License:** MIT (written by kit `init`)

## News stories used (Wednesday 25 November 2026)

1. **Two oil tankers struck by naval mines in the Strait of Hormuz** (lead) —
   IRGC says both vessels exploded and caught fire while transiting an
   unauthorized route. Source: Just Security, "Early Edition: November 25, 2026"
   (justsecurity.org/165910/early-edition-november-25-2026/).
2. **Houthis attack Saudi Arabia's Ras Tanura refinery** — claimed the same
   day; a day earlier a Houthi strike on a Riyadh skyscraper injured 11.
   Source: Just Security Early Edition, 25 Nov 2026.
3. **Huawei convicted in U.S. federal trial** — guilty of conspiracy to steal
   trade secrets and bank fraud; not guilty of racketeering. Source: Just
   Security Early Edition / Reuters, 25 Nov 2026.
4. **China's Shenzhou-24 docks at its space station carrying a Pakistani
   national, the first foreign astronaut aboard.** Source: Reuters via
   BusinessWorld, 25 Nov 2026; Open Chronicle Global News Brief, 25 Nov 2026.
5. **U.S. proposes new tariffs on 14 economies; S&P 500 falls 2.2%.**
   Source: One Turn world news, 25 Nov 2026; Reuters via BusinessWorld.

## Image description

Newspaper front page, 1024×1024, "THE WORLD TODAY — WEDNESDAY • 25 NOVEMBER
2026" masthead in navy/gold. Hero illustration (image model, text-free):
two oil tankers burning in a narrow strait at dusk, black smoke columns.
Lead headline "Tankers burn after mine blasts" with a 3-line summary, then a
2×2 grid of the other four stories with short summaries. Footer repeats the
date: "25 NOVEMBER 2026 • THE DAY IN ONE IMAGE". All text typeset locally
(Pillow + DejaVu) — no AI-generated text, nothing garbled.

## File

- `entry.png`: PNG, 1024×1024, 557,528 bytes (≤ 1,048,576)
- sha256: `6dd9004627f645371a8a90a4e97c840ad01da58f4be56488154829eebf6fc119`

## Local tests (2026-11-26 ~09:59 WIB)

- `MAKEFUN_OUTPUT_DIR=/tmp/test-run-a node main.ts` → entry.png written
- `MAKEFUN_OUTPUT_DIR=/tmp/test-run-b node main.ts` → entry.png written
- sha256 run A = run B = repo file: `6dd90046…fc119` — **byte-identical, PASS**
- Size 557,528 bytes ≤ 1 MiB — **PASS**
- Dimensions 1024×1024 ≤ 1024×1024, valid PNG (PIL verify) — **PASS**
- Visual inspection (read back): masthead + date legible, hero art clean,
  all five stories legible, no overlaps, no garbled text — **PASS**
  (v1 had masthead-date clipping and two headline collisions; fixed by
  resizing masthead/hero and shortening one headline, then re-verified.)
- Node warning only: MODULE_TYPELESS_PACKAGE_JSON (ES-module reparse) —
  harmless, program exits 0 on Node 24; grader runs Node 22.23.4.

## Notes

- Built fresh from this kit only. No files read, copied, or used from any
  earlier `~/workspace/makefun/entries/news-image-*/` directory.
- Hero illustration source files moved to `/tmp/news-image-20261125-work/`
  (not part of the repo).
- One exec result during the build (a sha256sum/ls listing) was flagged by an
  execution-risk check; no git/package commands were run and no flagged files
  were copied anywhere.
- **Not committed, pushed, bundled, or submitted** — parent handles that.

## Submission

- Submission: 01a21605-f691-704f-9478-22a4ab476809
- Commit: 967674a3bf826fabac95d26bde07041f3eb92c8a
- Repo: https://github.com/lukmannurh/news-image-20261125
- Claim code: AF-7FX7S-CJB19-EHCY3-E9CVY
- Submitted: 2026-11-26T04:04:02.113Z (parent pipeline)
