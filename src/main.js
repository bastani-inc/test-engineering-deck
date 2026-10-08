import '@fontsource-variable/manrope';
import '@fontsource-variable/jetbrains-mono';
import '@fontsource/manrope/600.css';
import '@fontsource/manrope/700.css';
import '@fontsource/jetbrains-mono/500.css';
import '@fontsource/jetbrains-mono/700.css';
import Reveal from 'reveal.js';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.esm.js';
import RevealSearch from 'reveal.js/plugin/search/search.esm.js';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/plugin/highlight/monokai.css';
import './styles.css';

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const repoSignatureTemplate = document.querySelector('#repo-signature-template');
document.querySelectorAll('.slide-meta').forEach((meta) => {
  meta.append(repoSignatureTemplate.content.cloneNode(true));
});

// Chromium can paint transformed SVG <text> at stale coordinates after web-font
// loading even when its DOM bounds are correct. HTML inside foreignObject follows
// the measured SVG bounds reliably in deep links, overview, and PDF output.
function stabilizeSvgTextPaint() {
  document.querySelectorAll('svg text').forEach((text) => {
    const bounds = text.getBBox();
    const computed = getComputedStyle(text);
    const foreignObject = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
    const label = document.createElement('div');

    const originalClasses = text.getAttribute('class') ?? '';
    foreignObject.setAttribute('x', bounds.x - 3);
    foreignObject.setAttribute('y', bounds.y - 3);
    foreignObject.setAttribute('width', bounds.width + 6);
    foreignObject.setAttribute('height', bounds.height + 6);
    foreignObject.setAttribute('class', `svg-text-proxy ${originalClasses}`.trim());
    for (const name of text.getAttributeNames()) {
      if (name === 'id' || name === 'transform' || name.startsWith('data-') || name.startsWith('aria-')) {
        foreignObject.setAttribute(name, text.getAttribute(name));
      }
    }

    label.textContent = text.textContent;
    Object.assign(label.style, {
      alignItems: 'center',
      color: computed.fill,
      display: 'flex',
      fontFamily: computed.fontFamily,
      fontSize: computed.fontSize,
      fontWeight: computed.fontWeight,
      height: '100%',
      justifyContent: 'center',
      letterSpacing: computed.letterSpacing,
      lineHeight: '1',
      textDecorationColor: computed.textDecorationColor,
      textDecorationLine: computed.textDecorationLine,
      textDecorationStyle: computed.textDecorationStyle,
      textDecorationThickness: computed.textDecorationThickness,
      whiteSpace: 'nowrap',
      width: '100%'
    });

    foreignObject.append(label);
    text.replaceWith(foreignObject);
  });
}

const deck = new Reveal({
  width: 1920,
  height: 1080,
  margin: 0,
  minScale: 0.2,
  maxScale: 2,
  controls: true,
  controlsTutorial: false,
  progress: true,
  hash: true,
  history: true,
  keyboard: true,
  touch: true,
  overview: true,
  center: false,
  transition: prefersReducedMotion ? 'none' : 'fade',
  transitionSpeed: prefersReducedMotion ? 'fast' : 'default',
  autoAnimateDuration: prefersReducedMotion ? 0 : 0.7,
  autoAnimateEasing: 'ease-out',
  pdfSeparateFragments: false,
  pdfMaxPagesPerSlide: 1,
  plugins: [RevealHighlight, RevealSearch]
});

await document.fonts.ready;
stabilizeSvgTextPaint();
await deck.initialize();
