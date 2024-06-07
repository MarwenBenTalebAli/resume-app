import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { AngularFireStorage } from '@angular/fire/storage';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

import { EducationService } from '../educations/education.service';
import { Institut } from '../educations/institut.model';
import { Experience } from '../experiences/experience.model';
import { ExperienceService } from '../experiences/experience.service';
import { Project } from '../projects/project.model';
import { ProjectService } from '../projects/project.service';
import { CompetenceService } from '../skills/competence.service';
import { Competence } from '../skills/competence.model';
import { FormationService } from '../awards/formation.service';
import { Formation } from '../awards/formation.model';
import { User } from '../about/user.model';
import { UserService } from '../about/user.service';
import { InterestService } from '../interests/interest.service';
import { Interest } from '../interests/interest.model';




@Injectable()
export class DataStorageService {

    constructor(
        private httpClient: HttpClient,
        private educationService: EducationService,
        private experienceService: ExperienceService,
        private projectService: ProjectService,
        private competenceService: CompetenceService,
        private formationService: FormationService,
        private userService: UserService,
        private interestService: InterestService
    ) {

    }

    storeEducations() {
        const req = new HttpRequest(
            'PUT',
            'https://resume-profile.firebaseio.com/educations.json',
            this.educationService.getInstituts(),
            { reportProgress: true }
        );
        return this.httpClient.request(req);
    }

    getEducations() {
        this.httpClient.get<Institut[]>(
            'https://resume-profile.firebaseio.com/educations.json',
            {
                observe: 'body',
                responseType: 'json'
            }
        )
            .map(
                (instituts) => {
                    console.log(instituts);
                    return instituts;
                }
            )
            .subscribe(
                (instituts: Institut[]) => {
                    this.educationService.setInstituts(instituts);
                }
            );
    }

    storeExperiences() {
        const req = new HttpRequest(
            'PUT',
            'https://resume-profile.firebaseio.com/experiences.json',
            this.experienceService.getExperiences(),
            { reportProgress: true }
        );
        return this.httpClient.request(req);
    }

    getExperiences() {
        console.log('getExperiences');
        this.httpClient.get<Experience[]>(
            'https://resume-profile.firebaseio.com/experiences.json',
            {
                observe: 'body',
                responseType: 'json'
            }
        )
            .map(
                (experiences) => {
                    console.log('experiences1234', experiences);
                    return experiences;
                }
            )
            .subscribe(
                (experiences: Experience[]) => {
                    this.experienceService.setExperiences(experiences);
                }
            );
    }

    storeProjects() {
        const req = new HttpRequest(
            'PUT',
            'https://resume-profile.firebaseio.com/projects.json',
            this.projectService.getProjects(),
            { reportProgress: true }
        );
        return this.httpClient.request(req);
    }

    getProjects() {
        console.log('getProjects');
        this.httpClient.get<Project[]>(
            'https://resume-profile.firebaseio.com/projets.json',
            {
                observe: 'body',
                responseType: 'json'
            }
        )
            .map(
                (projects) => {
                    console.log('projects1234', projects);
                    return projects;
                }
            )
            .subscribe(
                (projects: Project[]) => {
                    this.projectService.setProjects(projects);
                }
            );
    }

    storeCompetences() {
        const req = new HttpRequest(
            'PUT',
            'https://resume-profile.firebaseio.com/competences.json',
            this.competenceService.getCompetences(),
            { reportProgress: true }
        );
        return this.httpClient.request(req);
    }
    getCompetences() {
        this.httpClient.get<Competence[]>(
            'https://resume-profile.firebaseio.com/competences.json',
            {
                observe: 'body',
                responseType: 'json'
            }
        )
            .map(
                (competences) => {
                    console.log(competences);
                    return competences;
                }
            )
            .subscribe(
                (competences: Competence[]) => {
                    this.competenceService.setCompetences(competences);
                }
            );
    }

    storeFormations() {
        const req = new HttpRequest(
            'PUT',
            'https://resume-profile.firebaseio.com/formations.json',
            this.formationService.getFormations(),
            { reportProgress: true }
        );
        return this.httpClient.request(req);
    }

    getFormations() {
        this.httpClient.get<Formation[]>(
            'https://resume-profile.firebaseio.com/formations.json',
            {
                observe: 'body',
                responseType: 'json'
            }
        )
            .map(
                (formations) => {
                    console.log(formations);
                    return formations;
                }
            )
            .subscribe(
                (formations: Formation[]) => {
                    this.formationService.setFormations(formations);
                }
            );
    }

    storeUsers() {
        const req = new HttpRequest(
            'PUT',
            'https://resume-profile.firebaseio.com/users.json',
            this.userService.getUsers(),
            { reportProgress: true }
        );
        return this.httpClient.request(req);
    }

    getUsers() {
        this.httpClient.get<User[]>(
            'https://resume-profile.firebaseio.com/users.json',
            {
                observe: 'body',
                responseType: 'json'
            }
        )
            .map(
                (users) => {
                    console.log(users);
                    return users;
                }
            )
            .subscribe(
                (users: User[]) => {
                    this.userService.setUsers(users);
                }
            );
    }

    getUser(orderBy: string = 'email', equalTo: string) {
        this.httpClient.get<User>(
            `https://resume-profile.firebaseio.com/users.json?orderBy="${orderBy}"&equalTo="${equalTo}"`,
            {
                observe: 'body',
                responseType: 'json'
            }
        ).map(user => user[0]).subscribe(
            (user: User) => {
                this.userService.setUser(user);
            }
        );
    }

    getInterest() {
        this.httpClient.get<Interest>(
            'https://resume-profile.firebaseio.com/interest.json',
            {
                observe: 'body',
                responseType: 'json'
            }
        ).map(interest => interest).subscribe(
            (interest: Interest) => {
                this.interestService.setInterest(interest);
            }
        );
    }

}
