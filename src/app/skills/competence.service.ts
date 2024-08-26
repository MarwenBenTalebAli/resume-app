import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
// import 'rxjs/Rx';

import { Competence } from './competence.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CompetenceService {
  competencesChanged = new Subject<Competence[]>();

  competences: Competence[] = [
    // new Competence(
    //   'Java',
    //   'Avancé',
    //   "J'effectue cette formation au sein de la société FORMAPLUS.",
    //   '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40"/></svg>'
    // ),
    // new Competence('Spring Boot', 'Intermédiaire', 'Développeur Java EE'),
    // new Competence('Angular', 'Intermédiaire', ''),
    // new Competence('Bootstrap', 'Intermédiaire', ''),
  ];

  constructor(private httpClient: HttpClient) {}

  setCompetences(competences: Competence[]) {
    this.competences = competences;
    this.competencesChanged.next(this.competences.slice());
  }

  getCompetence(index: number) {
    return this.competences[index];
  }

  getCompetences() {
    return this.competences.slice();
  }

  addCompetence(competence: Competence) {
    this.competences.push(competence);
    this.competencesChanged.next(this.competences.slice());
    const req = new HttpRequest(
      'PUT',
      'https://resume-profile.firebaseio.com/competences.json',
      competence,
      { reportProgress: true }
    );
    return this.httpClient.request(req);
  }

  updateCompetence(index: number, newCompetence: Competence) {
    this.competences[index] = newCompetence;
    this.competencesChanged.next(this.competences.slice());
    const req = new HttpRequest(
      'PATCH',
      'https://resume-profile.firebaseio.com/competences.json',
      newCompetence,
      { reportProgress: true }
    );
    return this.httpClient.request(req);
  }

  deleteCompetence(index: number) {
    this.competences.splice(index, 1);
    this.competencesChanged.next(this.competences.slice());
    const req = new HttpRequest(
      'DELETE',
      'https://resume-profile.firebaseio.com/competences.json',
      this.competences[index],
      { reportProgress: true }
    );
    return this.httpClient.request(req);
  }
}
