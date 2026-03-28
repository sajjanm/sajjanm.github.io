import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeService } from '../../services/resume';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="education" class="container">
      <div class="row">
        <div class="header-section col">
          <h2 class="title font-display">Academic <span class="gradient-text">Background</span></h2>
          <p class="subtitle mt-3">Formal education and foundational knowledge.</p>
        </div>
        
        <div class="edu-list mt-5">
          <div class="edu-card glass animate-reveal" *ngFor="let edu of education">
            <div class="icon-box">🎓</div>
            <div class="content">
              <h3 class="degree font-display">{{ edu.degree }}</h3>
              <p class="institution">{{ edu.institution }}</p>
              <span class="period">{{ edu.period }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .text-center { text-align: center; }
    .mt-3 { margin-top: 1rem; }
    .mt-5 { margin-top: 4rem; }
    .title { font-size: 3rem; font-weight: 800; }
    .subtitle { color: var(--text-muted); font-size: 1.15rem; }

    .edu-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2.5rem;
      max-width: 1000px;
      margin: auto;
    }
    
    .edu-card {
      display: flex;
      gap: 1.5rem;
      padding: 2.5rem;
      border-radius: 1.5rem;
      transition: all 0.3s ease;
      align-items: center;
    }
    .edu-card:hover { transform: scale(1.02); background: rgba(30, 41, 59, 0.9); border-color: var(--secondary); }
    
    .icon-box { font-size: 2.5rem; background: rgba(236, 72, 153, 0.1); padding: 1rem; border-radius: 1.2rem; min-width: 80px; text-align: center; }
    
    .content .degree { font-size: 1.3rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.5rem; }
    .content .institution { font-size: 1rem; color: var(--text-muted); margin-bottom: 0.8rem; }
    .content .period { font-size: 0.82rem; font-weight: 700; background: rgba(255, 255, 255, 0.05); padding: 0.35rem 0.8rem; border-radius: 0.5rem; color: white; }

    @media (max-width: 768px) {
      .edu-card { flex-direction: column; text-align: center; padding: 2rem; }
      .title { font-size: 2.5rem; }
    }
  `]
})
export class EducationComponent {
  resumeService = inject(ResumeService);
  education = this.resumeService.education;
}

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
