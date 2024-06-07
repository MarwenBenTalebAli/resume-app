import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

import { Project } from './project.model';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class ProjectService {

    projectsChanged = new Subject<Project[]>();

    projects: Project[] = [
        new Project(
            0,
            "26/03/2021",
            "31/03/2021",
            "C'est une application Web qui vous permet de créer un hamburger et de le commander et de vous connecter pour voir vos commandes.",
            "Burger-builder-app",
            [
                "ReactJS",
                "HTML",
                "JavaScript",
                "CSS",
                "Firebase"
            ],
            "https://github.com/MarwenBenTalebAli/burger-builder-app",
            "https://burger-builder-app-2318e.web.app/",
            "https://drive.google.com/thumbnail?id=1dsLhOLprUeVmNYfidywybhzGMM32KbWV"
        ),
    ];

    constructor(private httpClient: HttpClient) {
    }

    setProjects(projects: Project[]) {
        this.projects = projects;
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
            project, { reportProgress: true }
        );
        return this.httpClient.request(req);
    }

    updateProject(index: number, newProject: Project) {
        this.projects[index] = newProject;
        this.projectsChanged.next(this.projects.slice());
        const req = new HttpRequest(
            'PATCH',
            'https://resume-profile.firebaseio.com/projects.json',
            newProject, { reportProgress: true }
        );
        return this.httpClient.request(req);
    }

    deleteProject(index: number) {
        this.projects.splice(index, 1);
        this.projectsChanged.next(this.projects.slice());
        const req = new HttpRequest(
            'DELETE',
            'https://resume-profile.firebaseio.com/projects.json',
            this.projects[index], { reportProgress: true }
        );
        return this.httpClient.request(req);
    }
}
