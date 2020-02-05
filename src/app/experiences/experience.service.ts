import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

import { Experience } from './experience.model';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class ExperienceService {

    experiencesChanged = new Subject<Experience[]>();

    experiences: Experience[] = [
        new Experience(
            'Indépendant ',
            'Développeur web freelance',
            '01/01/2018',
            'jusqu\'à maintenant',
            'Kalâa Seghira, Sousse',
            '- Je travaille en tant que développeur Web Freelance.\n' +
            '- Développer le site web de la société Fotón.\n' +
            '- Les frameworks utilisées : Java EE, Spring, Bootstrap 3.',
            null
        ),
        new Experience(
            'Innotall GmbH',
            'Développeur Java EE',
            '01/11/2017',
            '30/11/2017',
            'Sahloul, Sousse',
            `- Stage de test de 1 mois sans contrat et sans attestation au sein de la société Innotall GmbH en post développeur Java EE.
            - Création d'une portlet de gestion de documents avec le CMS Liferay en utilisant le langage Java.`,
            null
        ),
        new Experience(
            'DOT-IT',
            'Développeur Java EE',
            '01/07/2017',
            '31/10/2017',
            'Khzema, Sousse',
            '- Stage de test de 4 mois sans contrat et sans attestation au sein de la société DOT-IT comme post développeur Java EE.\n' +
            '- J\'ai été amenée à apprendre et faire des exemples des applications avec les outils suivant REST API, GWT et Symfony2.',
            null
        ),
        new Experience(
            'Solution groupe',
            'Développeur Java EE',
            '02/01/2017',
            '24/04/2017',
            'Mourouj 4, Ben Arous',
            '- Développer une application web de gestion d\'assurance avec un site web pour la coté client.\n' +
            '- Les langages de programmation utilisées : Java, JavaScript, HTML5, CSS3.\n' +
            '- Les frameworks utilisées : Java EE, Spring Boot, Spring Data JPA, Hibernate, Angular JS (1.4.7), Bootstrap 3.',
            null
        ),
        new Experience(
            'DOT-IT',
            'Stage de fin d\'étude (PFE) de 4 mois',
            '03/02/2015',
            '03/06/2015',
            'Khzema, Sousse',
            '- Développer une application web de gestion des incidents destiné aux centres d\'appel.\n' +
            '- Consommer cette application web avec une application Android afin d\'ajouter une meilleure qualité de service.\n' +
            '- Les langages de programmation utilisés: Java, JavaScript, HTML5, CSS3.\n' +
            '- Les Frameworks utilisés : Java EE, Spring, Hibernate.',
            '- Description : https://drive.google.com/open?id=0B_iYv23IHpIuYnplal8tck1ObDA'
        ),
        new Experience(
            'Tunisie Télécom',
            'Stage d\'été de 1 mois',
            '09/07/2014',
            '08/08/2014',
            'Sahloul, Sousse',
            '- Développer une application de gestion de stock pour gérer les entrées et les sorties des activités du service stock.\n' +
            '- Cette application permet de traiter les entrés et les sorties des matériels des constructions téléphonie fixe.\n' +
            '- Langage et API de programmation utilisés: Java, Swing.',
            '- Description : https://drive.google.com/open?id=0B_iYv23IHpIucWVtb0FjVHhqOFk'
        ),
        new Experience(
            'ESPITA',
            'Stage d\'été de 1 mois',
            '01/07/2013',
            '31/07/2013',
            'Hammam Sousse, Sousse',
            '- Développer une application Android pour Localisation et gestion des constructions téléphonie fixe.',
            '- Description : https://drive.google.com/open?id=0B_iYv23IHpIuQ2tseExuQm9EX1k'
        ),
        new Experience(
            'Tunisie Télécom',
            'Stage de fin d\'étude (PFE) de 4 mois',
            '01/02/2012',
            '31/05/2012',
            'Sahloul, Sousse',
            '- Installation des réseaux téléphoniques.\n' +
            '- Conception et mise en oeuvre d\'une application GIS pour Localisation et gestion des constructions téléphonie fixe.\n' +
            '- Il s\'agit d\'une application pour gérer les demandes d\'abonné avec une application android' +
            'pour apporter une meilleur qualité de service.\n' +
            '- Langage et API de programmation utilisés : Java, Swing.',
            '- Description : https://drive.google.com/open?id=0B_iYv23IHpIuRmFoY3EwNkl2dTg'
        ),
        new Experience(
            'MEDITEL',
            'Stage d\'été de 1 mois',
            '01/08/2011',
            '01/09/2011',
            'Sousse',
            `Installation et configuration des réseaux informatiques.`,
            null
        )
    ];

    constructor(private httpClient: HttpClient) {
    }

    setExperiences(experiences: Experience[]) {
        this.experiences = experiences;
        this.experiencesChanged.next(this.experiences.slice());
    }

    getExperience(index: number) {
        return this.experiences[index];
    }

    getExperiences(): Experience[] {
        return this.experiences.slice();
    }

    addExperience(experience: Experience) {
        this.experiences.push(experience);
        this.experiencesChanged.next(this.experiences.slice());
        const req = new HttpRequest(
            'PUT',
            'https://resume-profile.firebaseio.com/experiences.json',
            experience, { reportProgress: true }
        );
        return this.httpClient.request(req);
    }

    updateExperience(index: number, newExperience: Experience) {
        this.experiences[index] = newExperience;
        this.experiencesChanged.next(this.experiences.slice());
        const req = new HttpRequest(
            'PATCH',
            'https://resume-profile.firebaseio.com/experiences.json',
            newExperience, { reportProgress: true }
        );
        return this.httpClient.request(req);
    }

    deleteExperience(index: number) {
        this.experiences.splice(index, 1);
        this.experiencesChanged.next(this.experiences.slice());
        const req = new HttpRequest(
            'DELETE',
            'https://resume-profile.firebaseio.com/experiences.json',
            this.experiences[index], { reportProgress: true }
        );
        return this.httpClient.request(req);
    }
}
