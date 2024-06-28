import { Injectable, inject } from '@angular/core';
import {
  HttpClient,
  // HttpHeaders,
  // HttpParams,
  HttpRequest,
} from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
// import 'rxjs/Rx';

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
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  private readonly httpClient /*: HttpClient*/ = inject(HttpClient);
  private educationService /*: EducationService*/ = inject(EducationService);
  private experienceService /*: ExperienceService*/ = inject(ExperienceService);
  private projectService /*: ProjectService*/ = inject(ProjectService);
  private competenceService /*: CompetenceService*/ = inject(CompetenceService);
  private formationService /*: FormationService*/ = inject(FormationService);
  private userService /*: UserService*/ = inject(UserService);
  private interestService /*: InterestService*/ = inject(InterestService);

  constructor() {}

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
    this.httpClient
      .get<Institut[]>(
        'https://resume-profile.firebaseio.com/educations.json',
        {
          observe: 'body',
          responseType: 'json',
        }
      )
      .pipe(
        map((instituts) => {
          console.log('getEducations', instituts);
          return instituts;
        })
      )
      .subscribe((instituts: Institut[]) => {
        this.educationService.setInstituts(instituts);
      });
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
    this.httpClient
      .get<Experience[]>(
        'https://resume-profile.firebaseio.com/experiences.json',
        {
          observe: 'body',
          responseType: 'json',
        }
      )
      .pipe(
        map((experiences) => {
          console.log('getExperiences:', experiences);
          return experiences;
        })
      )
      .subscribe((experiences: Experience[]) => {
        this.experienceService.setExperiences(experiences);
      });
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
    this.httpClient
      .get<Project[]>('https://resume-profile.firebaseio.com/projets.json', {
        observe: 'body',
        responseType: 'json',
      })
      .pipe(
        map((projects) => {
          console.log('getProjectsmap:', projects);
          return projects;
        })
      )
      .subscribe((projects: Project[]) => {
        console.log('getProjects1234', {
          type: Array.isArray(projects) ? 'array' : 'notArray',
          projects,
        });
        this.projectService.setProjects(projects);
      });
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
    this.httpClient
      .get<Competence[]>(
        'https://resume-profile.firebaseio.com/competences.json',
        {
          observe: 'body',
          responseType: 'json',
        }
      )
      .pipe(
        map((competences) => {
          console.log('getCompetences:', competences);
          return competences;
        })
      )
      .subscribe((competences: Competence[]) => {
        this.competenceService.setCompetences(competences);
      });
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
    this.httpClient
      .get<Formation[]>(
        'https://resume-profile.firebaseio.com/formations.json',
        {
          observe: 'body',
          responseType: 'json',
        }
      )
      .pipe(
        map((formations) => {
          console.log('getFormations:', formations);
          return formations;
        })
      )
      .subscribe((formations: Formation[]) => {
        this.formationService.setFormations(formations);
      });
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
    this.httpClient
      .get<User[]>('https://resume-profile.firebaseio.com/users.json', {
        observe: 'body',
        responseType: 'json',
      })
      .pipe(
        map((users) => {
          console.log('getUsers:', users);
          return users;
        })
      )
      .subscribe((users: User[]) => {
        this.userService.setUsers(users);
      });
  }

  getUser(orderBy: string = 'email', equalTo: string) {
    this.httpClient
      .get<User[]>(
        `https://resume-profile.firebaseio.com/users.json?orderBy="${orderBy}"&equalTo="${equalTo}"`,
        {
          observe: 'body',
          responseType: 'json',
        }
      )
      .pipe(
        map((user) => {
          console.log('getUser:', { ...user });
          return user;
        })
      )
      .subscribe((user: User[]) => {
        this.userService.setUser(user[0]);
      });
  }

  getInterest() {
    this.httpClient
      .get<Interest>('https://resume-profile.firebaseio.com/interest.json', {
        observe: 'body',
        responseType: 'json',
      })
      .pipe(map((interest) => interest))
      .subscribe((interest: Interest) => {
        this.interestService.setInterest(interest);
      });
  }
}
