import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { CompetenceService } from './competence.service';
import { Competence } from './competence.model';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit, OnDestroy {

  competences: Competence[];
  subscription: Subscription;
  @Input() isAdmin = false;

  constructor(private competenceService: CompetenceService, private authService: AuthService) { }

  ngOnInit() {
    this.isAdmin = this.authService.isAuthenticated();
    this.competences = this.competenceService.getCompetences();
    this.subscription = this.competenceService.competencesChanged.subscribe(
      (competences: Competence[]) => {
        this.competences = competences;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
