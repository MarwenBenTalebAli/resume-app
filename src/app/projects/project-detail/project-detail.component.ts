import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Project } from '../project.model';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [],
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
})
export class ProjectDetailComponent implements OnInit {
  project: Project;
  id: number;

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
      this.project = this.projectService.getProject(this.id);
    });
  }

  onEditProject() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  onDeleteProject() {
    this.projectService.deleteProject(this.id);
    this.router.navigate(['/projects']);
  }
}
