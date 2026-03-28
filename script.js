// Theme management
function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Set initial theme: saved preference > system preference > light
  const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', initialTheme);
  
  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
    }
  });
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
}

// Initialize theme on page load
initTheme();

// Add theme toggle event listener
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
});

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
  const scrollTop = window.scrollY;
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
