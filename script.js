// Smooth scroll progress + moving runner with rAF for performance

const progressBar = document.getElementById('progress-bar');
const runner = document.getElementById('runner-icon');
const container = document.getElementById('progress-container');

let maxMove = 0;

function recalcMax() {
  // how many pixels the runner can move inside the container (container width - runner width)
  const containerWidth = container.offsetWidth;
  const runnerWidth = runner.offsetWidth;
  maxMove = Math.max(0, containerWidth - runnerWidth - 6); // small padding
}
recalcMax();
window.addEventListener('resize', recalcMax);

// update position + bar
function updateProgress() {
  const scrollTop = window.scrollY || window.pageYOffset;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight <= 0 ? 0 : (scrollTop / docHeight);
  const percent = Math.min(100, Math.max(0, pct * 100));

  progressBar.style.width = percent + "%";

  // move runner using transform (better for performance)
  const x = Math.round((percent / 100) * maxMove);
  runner.style.transform = `translateX(${x}px)`;
}

// throttle updates using requestAnimationFrame
let ticking = false;
function onScrollOrResize() {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      updateProgress();
      ticking = false;
    });
    ticking = true;
  }
}

window.addEventListener('scroll', onScrollOrResize, { passive: true });
window.addEventListener('resize', onScrollOrResize);

// initial paint
window.addEventListener('load', () => {
  recalcMax();
  updateProgress();
});
