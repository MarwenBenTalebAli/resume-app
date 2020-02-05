import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

import { EducationService } from '../educations/education.service';
import { Institut } from '../educations/institut.model';
import { Experience } from '../experiences/experience.model';
import { ExperienceService } from '../experiences/experience.service';
import { CompetenceService } from '../skills/competence.service';
import { Competence } from '../skills/competence.model';
import { FormationService } from '../awards/formation.service';
import { Formation } from '../awards/formation.model';




@Injectable()
export class DataStorageService {

    constructor(
        private httpClient: HttpClient,
        private educationService: EducationService,
        private experienceService: ExperienceService,
        private competenceService: CompetenceService,
        private formationService: FormationService
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
        this.httpClient.get<Experience[]>(
            'https://resume-profile.firebaseio.com/experiences.json',
            {
                observe: 'body',
                responseType: 'json'
            }
        )
            .map(
                (experiences) => {
                    console.log(experiences);
                    return experiences;
                }
            )
            .subscribe(
                (experiences: Experience[]) => {
                    this.experienceService.setExperiences(experiences);
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

}
