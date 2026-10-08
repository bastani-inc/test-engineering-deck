# Media sources

Every mark in this folder is the owner's own file, fetched on 7 Oct 2026. Logos are shown at small size next to the tool name, in grayscale, to identify the tool. They do not imply endorsement.

## Tool logos (`logos/`, slide 24 `atomic-tools`)

| File | Tool | Source | Change made here |
|---|---|---|---|
| `agent-browser.png` | agent-browser | Site icon of https://agent-browser.dev (`/favicon.ico`, 256 px frame). It is the Vercel mark, because agent-browser is a Vercel Labs project (github.com/vercel-labs/agent-browser). The repo has no separate logo file. | Resized to 128 px |
| `cua.svg` | Cua Driver | https://github.com/trycua/cua/blob/1144976704a25ba505443b394f01d759deb3c889/img/logo_white.svg (Cua project logo, MIT repo). Cua Driver ships from this repo. | None |
| `herdr.svg` | Herdr | https://github.com/herdrdev/herdr/blob/fb94fff98dbcd88d9332a182dea4040c5de84fff/assets/logo.svg (Apache-2.0 repo) | Removed the light square background, set the mark's fill to white for a dark slide, and cropped the viewBox to the mark |
| `qlty.svg` | qlty | https://qlty.sh/site-assets/qlty-logo.svg (the logo in the qlty.sh site header) | Kept only the bracket mark (the first subpaths of the logo path, before the "lty" letters) and set its fill to white for a dark slide |
| `biome.svg` | Biome | https://github.com/biomejs/resources/blob/551f36498dfe34b24bc7755fcdd0fa501b757cf4/svg/icon-dark-mono-transparent.svg (Biome's official brand resources, mono icon for dark backgrounds) | None |
| `vitest.svg` | Vitest | https://github.com/vitest-dev/vitest/blob/0ed7e82f5e0c02032955a6ca034d1562c2ec920e/docs/public/logo-without-border.svg (MIT repo) | None |

## Social icons (`icons/`, slide 52 `closing-qa`)

| File | Source | Change made here |
|---|---|---|
| `linkedin.png` | LinkedIn brand downloads, https://brand.linkedin.com/downloads, `in-logo.zip`, `InBug-White.png` | Resized to 128 px wide |
| `x.png` | X brand toolkit, https://about.x.com/content/dam/about-twitter/x/brand-toolkit/logo-white.png.twimg.1920.png | Resized to 128 px wide |
| `github.svg` | GitHub Primer Octicons `mark-github-24`, https://github.com/primer/octicons/blob/ea8e6bb79894cc7e85564ee9b53d86b418738d04/icons/mark-github-24.svg (MIT) | Fill set to white |

## Prompt composer icons (`icons/`, every prompt slide)

| File | Source | Change made here |
|---|---|---|
| `plus.svg`, `mic.svg` | Lucide icons `plus` and `mic`, https://github.com/lucide-icons/lucide/tree/92aeac569ffd270941b55b05ec6b1e3c0d1ba063/icons (ISC license) | Stroke set to the deck's muted gray |
| `send.svg` | Lucide `arrow-up` path from the same commit, placed on a round off-white button | Drawn here from the Lucide path |

## Status icons (`icons/`, slides 05, 18 and 21)

| File | Source | Change made here |
|---|---|---|
| `check.svg` | Lucide `check`, https://github.com/lucide-icons/lucide/tree/92aeac569ffd270941b55b05ec6b1e3c0d1ba063/icons (ISC license) | Stroke set to the deck's mint (#74d6a4), stroke width 2.5 |
| `cross.svg` | Lucide `x` from the same commit (ISC license) | Stroke set to the deck's coral (#f08078), stroke width 2.5 |

## Generated visual (`visuals/`, slide 31 `real-services`)

| File | Source | Change made here |
|---|---|---|
| `real-services.png` | Generated on 7 Oct 2026 with GPT Image 2.5 (`gpt-image-2.5-flare`, medium quality, 1536×1024, opaque) for this deck. It shows a laptop running tests, wired to a database in a container, a message broker and a server. It has no text, no logos and no game art. The call is logged in the run's image ledger. | Resized to 1200×800 |

## OpenAI Decisions guide (`openai/`, slide 46 `decisions-api`)

All three files come from OpenAI's Decisions guide, https://developers.openai.com/api/docs/guides/decisions?lang=python, captured on 7 Oct 2026 in a 1440×900 browser window at 2x with agent-browser. The slide credits them as "Credits: OpenAI".

| File | Source | Change made here |
|---|---|---|
| `decisions-guide-page.webp` | Screenshot of the guide's "Check an image for visible damage" section, with its Dent, Cancellation, Answer relevance and Pause animation controls. The guide's own predicate demo was paused at one frame for the capture. | Cropped to the section, converted to grayscale so the slide keeps one accent, resized to 1584×900. The A to D marks are drawn over it in HTML on the slide, not in the image. |
| `decisions-choice-demo.mp4` | OpenAI's animated choice demo on the same page ("Which lane should the car choose?", Driving tab). The page draws it with CSS animations, not a video file, so there was no GIF or video to download. It was recorded frame by frame: each of the page's animations was paused and stepped from 6.0 s to 12.0 s of its 36 s timeline at 30 fps. In that window barriers appear in lanes 2 and 3, the lane 1 probability rises to 0.90, and the car moves to lane 1. | 180 frames encoded as H.264, 1160×534, 6 s, no audio. Plays once per slide entry, never loops. |
| `decisions-choice-demo-end.webp` | The last frame of the same recording (lane 1 at 0.94, car in lane 1) | Used as the poster, so reduced motion and print show the end state |

## Game screenshot (`game/`, slide 46 `decisions-api`)

| File | Source | Change made here |
|---|---|---|
| `after-left-lane.webp` | Screenshot of the finished Subway Runner game built in the talk's live demo, taken on 7 Oct 2026 at 1600×900 with agent-browser right after an ArrowLeft key press, developer panels hidden. Sent to OpenAI's Decisions API (`gpt-6-luna`) as an inline image: the predicate "Is the runner in the left lane?" returned 0.98 and the choice "Which screen is showing?" returned running (confidence 1.0). The same predicate on a middle-lane frame returned 0.0. | Converted from PNG to WebP |
