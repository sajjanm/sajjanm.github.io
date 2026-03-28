import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeService } from '../../services/resume';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="hero" class="hero-section container animate-fade-in">
      <div class="hero-content">
        <span class="badge gradient-text">Available for Projects</span>
        <h1 class="hero-title font-display">{{ info.name }}</h1>
        <h2 class="hero-subtitle font-display">{{ info.title }}</h2>
        <p class="hero-desc">{{ info.summary }}</p>
        <div class="hero-actions">
          <a href="#experience" class="primary-btn">View My Experience</a>
          <a href="/resume.pdf" target="_blank" class="secondary-btn">Download Resume</a>
        </div>
      </div>
      <div class="hero-visual">
        <div class="sphere-container">
          <div class="sphere sphere-1"></div>
          <div class="sphere sphere-2"></div>
          <div class="sphere-main glass">
            <span class="icon">☁️</span>
            <span class="label">AWS Expert</span>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero-section {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: var(--nav-height);
    }
    .badge {
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 2px;
      text-transform: uppercase;
      padding: 0.5rem 1rem;
      border: 1px solid var(--glass-border);
      background: rgba(255, 255, 255, 0.05);
      border-radius: 2rem;
      display: inline-block;
      margin-bottom: 1.5rem;
    }
    .hero-title {
      font-size: 5rem;
      font-weight: 800;
      line-height: 1.1;
      margin-bottom: 0.5rem;
      letter-spacing: -2px;
    }
    .hero-subtitle {
      font-size: 1.8rem;
      color: var(--text-muted);
      font-weight: 400;
      margin-bottom: 2rem;
    }
    .hero-desc {
      font-size: 1.15rem;
      max-width: 600px;
      color: var(--text-muted);
      margin-bottom: 3rem;
      line-height: 1.8;
    }
    .hero-actions {
      display: flex;
      gap: 1.5rem;
    }
    .primary-btn {
      background: var(--primary);
      color: white;
      padding: 1rem 2rem;
      border-radius: 0.8rem;
      font-weight: 600;
      box-shadow: 0 10px 20px -5px rgba(99, 102, 241, 0.4);
    }
    .primary-btn:hover {
      background: var(--primary-hover);
      transform: translateY(-3px);
    }
    .secondary-btn {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid var(--glass-border);
      color: white;
      padding: 1rem 2rem;
      border-radius: 0.8rem;
      font-weight: 600;
      backdrop-filter: blur(5px);
    }
    .secondary-btn:hover {
      background: rgba(255, 255, 255, 0.1);
      transform: translateY(-3px);
    }
    .hero-visual {
      position: relative;
      flex: 1;
      height: 400px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .sphere-container {
      position: relative;
      width: 300px;
      height: 300px;
    }
    .sphere {
      position: absolute;
      border-radius: 50%;
      filter: blur(60px);
    }
    .sphere-1 {
      width: 250px;
      height: 250px;
      background: var(--primary);
      top: -30px;
      left: -30px;
      z-index: -1;
      opacity: 0.4;
      animation: float 6s ease-in-out infinite;
    }
    .sphere-2 {
      width: 200px;
      height: 200px;
      background: var(--secondary);
      bottom: -20px;
      right: -20px;
      z-index: -1;
      opacity: 0.3;
      animation: float 8s ease-in-out infinite alternate-reverse;
    }
    .sphere-main {
      width: 160px;
      height: 160px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      box-shadow: var(--shadow-lg);
      z-index: 10;
      transform: translate(70px, 70px);
    }
    .icon { font-size: 2.5rem; margin-bottom: 0.5rem; }
    .label { font-size: 0.8rem; font-weight: 700; color: var(--text-main); text-transform: uppercase; }

    @keyframes float {
      0% { transform: translate(0, 0); }
      50% { transform: translate(20px, 40px); }
      100% { transform: translate(0, 0); }
    }

    @media (max-width: 968px) {
      .hero-section { flex-direction: column; text-align: center; padding-top: 8rem; }
      .hero-title { font-size: 3.5rem; }
      .hero-desc { margin: 0 auto 3rem; }
      .hero-actions { justify-content: center; }
      .hero-visual { height: 300px; margin-top: 4rem; }
      .sphere-main { transform: none; }
    }
  `]
})
export class HeroComponent {
  resumeService = inject(ResumeService);
  info = this.resumeService.personalInfo;
}
