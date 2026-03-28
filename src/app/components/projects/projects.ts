import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeService } from '../../services/resume';

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
}
