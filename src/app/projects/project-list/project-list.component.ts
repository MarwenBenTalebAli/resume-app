import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { DataStorageService } from '../../shared/data-storage.service';
import { Router, ActivatedRoute, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProjectItemComponent } from './project-item/project-item.component';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [RouterOutlet, ProjectItemComponent],
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  projects: Project[];
  private dataStorageService = inject(DataStorageService);
  private projectService: ProjectService = inject(ProjectService);

  constructor(
    // private projectService: ProjectService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subscription = this.projectService.projectsChanged.subscribe(
      (projects: Project[]) => {
        this.projects = projects;
      }
    );
    this.projects = this.projectService.getProjects();
  }

  onNewProject() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onSaveProjectsData() {
    this.dataStorageService.storeProjects().subscribe((response) => {
      console.log(response);
    });
  }

  onFetchProjectsData() {
    console.log('onFetchProjectsData');
    this.dataStorageService.getProjects();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
