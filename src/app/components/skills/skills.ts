import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeService } from '../../services/resume';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class SkillsComponent {
  resumeService = inject(ResumeService);
  skills = this.resumeService.skills;

  skillCategories = [
    { title: 'Frontend Architecture', icon: '🎨', skills: this.skills.frontend },
    { title: 'Backend / Cloud', icon: '⚙️', skills: [...this.skills.backend, ...this.skills.cloud] },
    { title: 'Data Management', icon: '💾', skills: this.skills.databases },
    { title: 'DevOps & Tooling', icon: '🚀', skills: this.skills.devops }
  ];
}
