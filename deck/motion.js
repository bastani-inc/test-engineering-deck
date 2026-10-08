const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const isPrint = () => document.documentElement.classList.contains('print-pdf') || /print-pdf/.test(window.location.search);
const DEMO_START_MS = 600;

const playDemos = (section) => {
  if (reducedMotion.matches || isPrint()) return;
  section.querySelectorAll('video.oai-video').forEach((video) => {
    video.pause();
    video.currentTime = 0;
    window.setTimeout(() => {
      if (section.classList.contains('present')) video.play().catch(() => {});
    }, DEMO_START_MS);
  });
};

const replayEntryMotion = (section) => {
  section.classList.add('ve-restart');
  void section.offsetWidth;
  section.classList.remove('ve-restart');
  playDemos(section);
};

document.querySelectorAll('section.verification-deck[data-replay]').forEach((section) => {
  section.addEventListener('click', (event) => {
    if (reducedMotion.matches || !section.classList.contains('present') || event.target.closest('a, button, pre')) return;
    replayEntryMotion(section);
  });
});

document.querySelectorAll('section.verification-deck').forEach((section) => {
  if (!section.querySelector('video.oai-video')) return;
  let wasPresent = section.classList.contains('present');
  if (wasPresent) playDemos(section);
  new MutationObserver(() => {
    const isPresent = section.classList.contains('present');
    if (isPresent && !wasPresent) playDemos(section);
    wasPresent = isPresent;
  }).observe(section, { attributes: true, attributeFilter: ['class'] });
});
