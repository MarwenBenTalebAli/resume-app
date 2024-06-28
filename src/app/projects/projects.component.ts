import { Component, OnInit, OnDestroy, signal, inject } from '@angular/core';
import { ProjectService } from './project.service';
import { Project } from './project.model';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';
import { ProjectListComponent } from './project-list/project-list.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    ProjectListComponent,
    NzGridModule,
    NzCardModule,
    NzButtonModule,
    NzIconModule,
    NzTagModule,
    NzTypographyModule,
  ],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit, OnDestroy {
  projects: Project[];
  subscription: Subscription;
  isAdmin = signal(false);
  private projectService: ProjectService = inject(ProjectService);
  private authService: AuthService = inject(AuthService);
  private dataStorageService: DataStorageService = inject(DataStorageService);

  constructor() {} // private dataStorageService: DataStorageService // private authService: AuthService, // private projectService: ProjectService,

  ngOnInit() {
    this.isAdmin.set(this.authService.isAuthenticated());
    this.onFetchProjectsData();
    this.projects = this.projectService.getProjects();
    console.log('this.projects', this.projects);
    this.subscription = this.projectService.projectsChanged.subscribe(
      (projects: Project[]) => {
        console.log('projects1234', projects);

        this.projects = projects;
      }
    );
  }

  onFetchProjectsData() {
    this.dataStorageService.getProjects();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
