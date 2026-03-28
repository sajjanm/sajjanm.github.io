import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeService } from '../../services/resume';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="experience" class="container">
      <div class="header-section">
        <span class="badge">Career Journey</span>
        <h2 class="title font-display">Work <span class="gradient-text">Experience</span></h2>
      </div>
      
      <div class="timeline mt-4">
        <div class="timeline-item" *ngFor="let exp of experience; let i = index">
          <div class="timeline-marker"></div>
          <div class="timeline-content glass animate-reveal">
            <div class="exp-header">
              <div>
                <h3 class="role font-display">{{ exp.role }}</h3>
                <h4 class="company">{{ exp.company }} <span class="separator">/</span> {{ exp.location }}</h4>
              </div>
              <span class="period">{{ exp.period }}</span>
            </div>
            <ul class="exp-desc">
              <li *ngFor="let item of exp.description">{{ item }}</li>
            </ul>
            <div class="tech-tags">
              <span class="tag" *ngFor="let t of exp.tech">{{ t }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .header-section { margin-bottom: 3.5rem; text-align: center; }
    .title { font-size: 3rem; font-weight: 800; letter-spacing: -1px; }
    .mt-4 { margin-top: 2rem; }
    .badge {
      font-size: 0.75rem;
      font-weight: 700;
      color: var(--secondary);
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-bottom: 0.8rem;
      display: inline-block;
    }

    .timeline {
      position: relative;
      max-width: 900px;
      margin-left: auto;
      margin-right: auto;
      padding-left: 1.5rem;
      border-left: 2px solid var(--glass-border);
    }
    .timeline-item {
      position: relative;
      padding-bottom: 4.5rem;
    }
    .timeline-item:last-child { padding-bottom: 0; }
    .timeline-marker {
      position: absolute;
      left: calc(-1.5rem - 6px);
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: var(--primary);
      box-shadow: 0 0 10px var(--primary);
      top: 1.2rem;
    }
    .timeline-content {
      margin-left: 2rem;
      padding: 2rem;
      transition: all 0.3s ease;
    }
    .timeline-content:hover {
      border: 1px solid var(--primary);
      background: rgba(30, 41, 59, 1);
    }
    .exp-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-top;
      margin-bottom: 1.5rem;
    }
    .role { font-size: 1.4rem; font-weight: 700; }
    .company { color: var(--text-muted); font-size: 1rem; margin-top: 0.3rem }
    .separator { color: var(--primary); margin: 0 0.5rem; opacity: 0.5; }
    .period {
      font-size: 0.85rem;
      font-weight: 600;
      color: white;
      background: rgba(255, 255, 255, 0.1);
      padding: 0.4rem 0.8rem;
      border-radius: 0.5rem;
      height: fit-content;
    }
    .exp-desc { margin: 1.2rem 0; padding-left: 1.2rem; color: var(--text-muted); font-size: 0.95rem; }
    .exp-desc li { margin-bottom: 0.8rem; line-height: 1.6; }
    .tech-tags { display: flex; flex-wrap: wrap; gap: 0.6rem; margin-top: 1.5rem; }
    .tag {
      background: rgba(99, 102, 241, 0.1);
      color: var(--primary);
      padding: 0.3rem 0.7rem;
      border-radius: 0.4rem;
      font-size: 0.75rem;
      font-weight: 600;
      border: 1px solid rgba(99, 102, 241, 0.1);
    }

    @media (max-width: 768px) {
      .exp-header { flex-direction: column; gap: 0.8rem; }
      .period { width: fit-content; }
      .timeline-content { margin-left: 1rem; padding: 1.5rem; }
      .title { font-size: 2.2rem; }
    }
  `]
})
export class ExperienceComponent {
  resumeService = inject(ResumeService);
  experience = this.resumeService.experience;
}
