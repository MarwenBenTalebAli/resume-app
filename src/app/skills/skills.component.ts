import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { CompetenceService } from './competence.service';
import { Competence } from './competence.model';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';
import { DomSanitizer } from '@angular/platform-browser';
import { SkillListComponent } from './skill-list/skill-list.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SkillListComponent],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit, OnDestroy {
  competences: Competence[];
  subscription: Subscription;
  isAdmin = signal(false);

  constructor(
    private competenceService: CompetenceService,
    private authService: AuthService,
    private dataStorageService: DataStorageService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.isAdmin.set(this.authService.isAuthenticated());
    this.onFetchCompetencesData();
    this.competences = this.competenceService.getCompetences();
    this.subscription = this.competenceService.competencesChanged.subscribe(
      (competences: Competence[]) => {
        this.competences = competences;
      }
    );
  }

  onFetchCompetencesData() {
    this.dataStorageService.getCompetences();
  }

  sanitizedSvg(svgString: string) {
    return this.sanitizer.bypassSecurityTrustHtml(svgString);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
