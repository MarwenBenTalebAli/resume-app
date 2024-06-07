import { Component, OnInit, OnDestroy } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  projects: Project[];

  constructor(
    private projectService: ProjectService,
    private dataStorageService: DataStorageService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

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
    this.dataStorageService.storeProjects()
      .subscribe(
        (response) => {
          console.log(response);
        }
      );
  }

  onFetchProjectsData() {
    console.log('onFetchProjectsData');
    this.dataStorageService.getProjects();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
