import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <nav class="navbar glass">
      <div class="container nav-content">
        <a href="#hero" class="logo font-display gradient-text">SM</a>
        <div class="nav-links">
          <a href="#experience">Experiences</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Work</a>
          <a href="#education">Education</a>
          <a href="mailto:sajjanm01@gmail.com" class="cta-button">Say Hello</a>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      position: fixed;
      top: 1rem;
      left: 50%;
      transform: translateX(-50%);
      width: 90%;
      max-width: 1200px;
      height: 70px;
      z-index: 1000;
      display: flex;
      align-items: center;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    .nav-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
    .logo {
      font-size: 1.8rem;
      font-weight: 800;
      letter-spacing: -1px;
    }
    .nav-links {
      display: flex;
      gap: 2rem;
      align-items: center;
    }
    .nav-links a {
      font-size: 0.9rem;
      font-weight: 500;
      opacity: 0.8;
    }
    .nav-links a:hover {
      opacity: 1;
      color: var(--primary);
    }
    .cta-button {
      background: var(--primary);
      color: white !important;
      padding: 0.6rem 1.2rem;
      border-radius: 0.5rem;
      font-weight: 600 !important;
      font-size: 0.85rem !important;
      box-shadow: 0 4px 14px 0 rgba(99, 102, 241, 0.39);
      opacity: 1 !important;
    }
    .cta-button:hover {
      background: var(--primary-hover);
      transform: translateY(-2px);
    }
    @media (max-width: 768px) {
      .nav-links { gap: 1rem; }
      .nav-links a:not(.cta-button) { display: none; }
    }
  `]
})
export class NavbarComponent {}
