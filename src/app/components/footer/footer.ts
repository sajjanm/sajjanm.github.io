import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer border-top container">
      <div class="footer-content">
        <div class="left">
          <p class="font-display logo gradient-text">SM</p>
          <p class="copyright">&copy; {{ year }} Sajjan Mishra. Built with Modern Angular & Love.</p>
        </div>
        <div class="right">
          <a href="https://linkedin.com/in/sajjanmishra" target="_blank" class="social-link">LinkedIn</a>
          <a href="mailto:sajjanm01@gmail.com" class="social-link">Email</a>
          <a href="#hero" class="social-link">Back to Top ↑</a>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer { padding: 4rem 1rem; border-top: 1px solid var(--glass-border); margin-top: 8rem; }
    .footer-content { display: flex; justify-content: space-between; align-items: center; }
    .logo { font-size: 1.5rem; font-weight: 800; margin-bottom: 0.5rem; }
    .copyright { font-size: 0.85rem; color: var(--text-muted); }
    .right { display: flex; gap: 2rem; }
    .social-link { font-size: 0.9rem; color: var(--text-muted); font-weight: 600; }
    .social-link:hover { color: var(--primary); }

    @media (max-width: 768px) {
      .footer-content { flex-direction: column; text-align: center; gap: 2rem; }
    }
  `]
})
export class FooterComponent {
  year = new Date().getFullYear();
}
