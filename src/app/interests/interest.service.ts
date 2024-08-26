import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
// import 'rxjs/Rx';

import { Interest } from './interest.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InterestService {
  private httpClient = inject(HttpClient);
  interestChanged = new Subject<Interest>();

  interest: Interest = new Interest('', '');
  // `En plus d'être développeur Web, j'apprécie la plupart de mon temps passé à l'extérieur. J'aime faire du vélo de montagne.`,
  // `Quand je suis forcé à l'intérieur, je suis un certain nombre de cours de développement et d'éducation en ligne,
  //     J'ai l'esprit ouverte d'esprit et je passe une grande partie de mon temps libre à explorer les dernières avancées technologiques
  //     dans le monde du développement web.`

  constructor() {}

  setInterest(interest: Interest) {
    this.interest = interest;
    this.interestChanged.next(JSON.parse(JSON.stringify(this.interest)));
  }

  getInterest() {
    return JSON.parse(JSON.stringify(this.interest));
  }

  addInterest(interest: Interest) {
    this.setInterest(interest);
    const req = new HttpRequest(
      'PUT',
      'https://resume-profile.firebaseio.com/interest.json',
      interest,
      { reportProgress: true }
    );
    return this.httpClient.request(req);
  }

  updateInterest(newInterest: Interest) {
    this.setInterest(newInterest);
    const req = new HttpRequest(
      'PATCH',
      'https://resume-profile.firebaseio.com/interest.json',
      newInterest,
      { reportProgress: true }
    );
    return this.httpClient.request(req);
  }

  deleteExperience() {
    this.setInterest(new Interest('', ''));
    const req = new HttpRequest(
      'DELETE',
      'https://resume-profile.firebaseio.com/interest.json',
      null,
      { reportProgress: true }
    );
    return this.httpClient.request(req);
  }
}
