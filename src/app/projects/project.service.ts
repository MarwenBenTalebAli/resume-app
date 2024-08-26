import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
// import 'rxjs/Rx';

import { Project } from './project.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private httpClient = inject(HttpClient);
  projectsChanged = new Subject<Project[]>();

  projects: Project[] = [];

  constructor() {}

  setProjects(projects: Project[]) {
    this.projects = projects;
    console.log('setProjects1234', {
      type: Array.isArray(this.projects.slice()) ? 'array' : 'notArray',
      projects: this.projects.slice(),
    });
    this.projectsChanged.next(this.projects.slice());
  }

  getProject(index: number) {
    return this.projects[index];
  }

  getProjects(): Project[] {
    return this.projects.slice();
  }

  addProject(project: Project) {
    this.projects.push(project);
    this.projectsChanged.next(this.projects.slice());
    const req = new HttpRequest(
      'PUT',
      'https://resume-profile.firebaseio.com/projects.json',
      project,
      { reportProgress: true }
    );
    return this.httpClient.request(req);
  }

  updateProject(index: number, newProject: Project) {
    this.projects[index] = newProject;
    this.projectsChanged.next(this.projects.slice());
    const req = new HttpRequest(
      'PATCH',
      'https://resume-profile.firebaseio.com/projects.json',
      newProject,
      { reportProgress: true }
    );
    return this.httpClient.request(req);
  }

  deleteProject(index: number) {
    this.projects.splice(index, 1);
    this.projectsChanged.next(this.projects.slice());
    const req = new HttpRequest(
      'DELETE',
      'https://resume-profile.firebaseio.com/projects.json',
      this.projects[index],
      { reportProgress: true }
    );
    return this.httpClient.request(req);
  }
}
