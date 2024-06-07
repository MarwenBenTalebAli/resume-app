import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ProjectService } from './project.service';
import { Project } from './project.model';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnDestroy {

  projects: Project[];
  subscription: Subscription;
  @Input() isAdmin = false;

  constructor(private projectService: ProjectService, private authService: AuthService, private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.isAdmin = this.authService.isAuthenticated();
    this.onFetchProjectsData();
    this.projects = this.projectService.getProjects();
    console.log('this.projects', this.projects);
    this.subscription = this.projectService.projectsChanged.subscribe(
      (projects: Project[]) => {
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
