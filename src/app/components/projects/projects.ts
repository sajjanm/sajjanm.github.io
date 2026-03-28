import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeService, Project } from '../../services/resume';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class ProjectsComponent {
  resumeService = inject(ResumeService);
  projects = this.resumeService.projects;
  selectedProject = signal<Project | null>(null);

  openProject(project: Project) {
    this.selectedProject.set(project);
    document.body.style.overflow = 'hidden';
  }

  closeProject() {
    this.selectedProject.set(null);
    document.body.style.overflow = 'auto';
  }
}
