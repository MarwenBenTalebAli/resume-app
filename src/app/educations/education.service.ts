import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

import { Institut } from './institut.model';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class EducationService {

    institutsChanged = new Subject<Institut[]>();

    instituts: Institut[] = [
        new Institut(
            'ESPITA',
            'DIPLÔME NATIONAL D’INGÉNIEUR EN GÉNIE INFORMATIQUE',
            'Sept. 2012',
            'Juin. 2015',
            'Campus Universitaire Boukhzar route de ceinture Bouhsina Sousse',
            `J'ai effectué cette formation au sein de la société de l’Ecole supérieure privée d'Ingénierie et Technologie Appliquée
            (ESPITA) de Sahloul. Mention : Bien.`
        ),
        new Institut(
            'ISITCOM',
            'LICENCE APPLIQUÉE EN RÉSEAUX INFORMATIQUES',
            'Sept. 2009',
            'Juin. 2012',
            'Hammam Sousse',
            `J'ai effectué cette formation au sein de la société ISITCOM de Hamme Sousse, spécialité Réseaux Informatiques.`
        ),
        new Institut(
            'LYCÉE TECHNIQUE DE SOUSSE',
            'DIPLÔME NATIONAL DU BACCALAURÉAT EN SECTION TECHNIQUE',
            'Sept. 2008',
            'Juin. 2009',
            'Sousse',
            `J'ai effectué cette formation au sein de lycée Technique de Sousse. Session : Principale.`
        )
    ];

    constructor(private httpClient: HttpClient) {
    }

    setInstituts(instituts: Institut[]) {
        this.instituts = instituts;
        this.institutsChanged.next(this.instituts.slice());
    }

    getInstitut(index: number) {
        return this.instituts[index];
    }

    getInstituts(): Institut[] {
        return this.instituts.slice();
    }

    addInstitut(institut: Institut) {
        this.instituts.push(institut);
        this.institutsChanged.next(this.instituts.slice());
        const req = new HttpRequest(
            'PUT',
            'https://resume-profile.firebaseio.com/educations.json',
            institut, { reportProgress: true }
        );
        return this.httpClient.request(req);
    }

    updateInstitut(index: number, newInstitut: Institut) {
        this.instituts[index] = newInstitut;
        this.institutsChanged.next(this.instituts.slice());
        const req = new HttpRequest(
            'PATCH',
            'https://resume-profile.firebaseio.com/educations.json',
            newInstitut, { reportProgress: true }
        );
        return this.httpClient.request(req);
    }

    deleteInstitut(index: number) {
        this.instituts.splice(index, 1);
        this.institutsChanged.next(this.instituts.slice());
        const req = new HttpRequest(
            'DELETE',
            'https://resume-profile.firebaseio.com/educations.json',
            this.instituts[index], { reportProgress: true }
        );
        return this.httpClient.request(req);
    }
}
