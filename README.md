# Verification Engineering for Agent-Written Code

A 52-slide deck by Alex Lavaee (Microsoft Research), made for The Neuron livestream on October 8, 2026.

The talk asks one question: who decides that agent-written code is done? Its answer is that the agent that writes the code shouldn't. The deck covers:

- why a passing test suite doesn't mean the code is correct, and why agent-written tests often check what the code does instead of what it should do
- writing acceptance criteria and reviewing the test contract before the agent starts
- deterministic tools and checks before model judgment
- test-driven development with vertical slices, and testing real services instead of mocks
- oracles that are harder to game: property-based, metamorphic, differential, mutation, approved snapshots, invariants, and deterministic replay
- review by an agent that didn't write the code
- verifying in dev, dogfood, and canary environments, with agents running the real user journey
- requiring saved evidence before work counts as done

Most sections end with a prompt you can copy into your own coding agent.

## Built with Atomic

The live build in this talk runs on [Atomic](https://github.com/bastani-inc/atomic), the open-source verifiable coding agent runtime. Atomic lets you define your coding agent's process as workflows with stages, checks, and approval gates instead of hoping the agent follows your instructions. The ideas in this deck work in any harness. Atomic ships them as runtime primitives.

- Repository: [github.com/bastani-inc/atomic](https://github.com/bastani-inc/atomic)
- Website: [bastani.ai](https://bastani.ai/)

## View the deck

You need [Node.js](https://nodejs.org/) 20.19 or later.

```sh
git clone https://github.com/bastani-inc/test-engineering-deck.git
cd test-engineering-deck
npm install
npm run dev
```

Open the URL Vite prints, usually http://localhost:5173/. The deck is designed for 1920×1080 and scales to fit any window.

To build a static copy and serve it:

```sh
npm run build     # writes the static site to dist/
npm run preview   # serves dist/ at http://localhost:4173/
```

`dist/` uses relative paths, so you can host it on any static host, such as GitHub Pages, or open it from a local web server.

### Controls

| Key | Action |
|---|---|
| Right arrow, Space, or N | Next slide |
| Left arrow or P | Previous slide |
| Esc or O | Overview of all slides |
| F | Fullscreen |
| Ctrl+Shift+F | Search the slides |

The URL updates with each slide (for example `/#/33`), so you can link to a single slide.

### Export to PDF

Open the deck with `?print-pdf` added to the URL, for example http://localhost:5173/?print-pdf, then use your browser's Print dialog and choose Save as PDF. In Chrome, set margins to None and turn on background graphics.

## Project layout

| Path | Contents |
|---|---|
| `index.html` | All 52 slides |
| `deck/styles.css` | Deck styles |
| `deck/motion.js` | Slide animations; respects reduced-motion settings |
| `deck/media/` | Images, logos, and video used on the slides; sources in `deck/media/SOURCES.md` |
| `src/` | Reveal.js setup and shared styles |
| `assets/` | Atomic brand marks and the symbol font |

## License

- **Code** (HTML structure, CSS, JavaScript, and build configuration) is under the [MIT License](LICENSE).
- **Slide content** (text and original visuals) is under [Creative Commons Attribution 4.0 International](LICENSE-CONTENT). You may reuse and adapt it with credit to Alex Lavaee and a link to this repository.
- **Third-party logos, icons, and screenshots** belong to their owners and are used only to identify their tools. They are not covered by either license above. Each one's source is listed in [`deck/media/SOURCES.md`](deck/media/SOURCES.md).
- **Fonts**: Manrope and JetBrains Mono ship through Fontsource under the SIL Open Font License. The bundled symbol font's license is in [`assets/fonts/`](assets/fonts/).

Studies and articles cited on the slides are credited in each slide's footer.
