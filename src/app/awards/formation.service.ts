import { Injectable, inject } from '@angular/core';
import { Formation } from './formation.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FormationService {
  private httpClient = inject(HttpClient);
  formationsChanged = new Subject<Formation[]>();

  formations: Formation[] = [
    new Formation(
      'Certificat de formation Symfony 2',
      'FORMAPLUS',
      'Aug 1, 2017',
      'Sep 1, 2017',
      'Avenue Léopold Senghor, 4000 Sousse',
      'http://www.formation-plus.com'
    ),
    new Formation(
      'Certificat de formation C#',
      'FORMAPLUS',
      'Dec 1, 2016',
      'Jan 1, 2017',
      'Avenue Léopold Senghor, 4000 Sousse',
      'http://www.formation-plus.com'
    ),
    new Formation(
      'Certificat de formation Java',
      'FORMAPLUS',
      'Oct 1, 2016',
      'Dec 1, 2016',
      'Avenue Léopold Senghor, 4000 Sousse',
      'http://www.formation-plus.com'
    ),
    new Formation(
      'Certificat de formation Java EE',
      'FORMAPLUS',
      'Dec 1, 2015',
      'Jan 1, 2016',
      'Avenue Léopold Senghor, 4000 Sousse',
      'http://www.formation-plus.com'
    ),
    new Formation(
      'Certificat de formation Android',
      'FORMAPLUS',
      'Nov 1, 2015',
      'Dec 1, 2015',
      'Avenue Léopold Senghor, 4000 Sousse',
      'http://www.formation-plus.com'
    ),
  ];

  constructor() {}

  getFormation(index: number) {
    return this.formations[index];
  }

  getFormations() {
    return this.formations.slice();
  }

  addFormation(formation: Formation) {
    this.formations.push(formation);
    this.formationsChanged.next(this.formations.slice());
  }

  updateFormation(index: number, newFormation: Formation) {
    this.formations[index] = newFormation;
    this.formationsChanged.next(this.formations.slice());
  }

  deleteFormation(index: number) {
    this.formations.splice(index, 1);
    this.formationsChanged.next(this.formations.slice());
  }

  setFormations(formations: Formation[]) {
    this.formations = formations;
    this.formationsChanged.next(this.formations.slice());
  }
}
