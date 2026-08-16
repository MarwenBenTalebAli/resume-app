import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

import { CompetenceService } from './competence.service';
import { Competence } from './competence.model';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';

import { SkillListComponent } from './skill-list/skill-list.component';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SkillListComponent, NzGridModule, NzIconModule, TranslatePipe],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit, OnDestroy {
  pageName: string = 'PAGES.SKILLS';
  subTitle: string = 'SKILLS_PAGE.SUB_TITLE';

  competences: Competence[] = [];
  subscription!: Subscription;

  isAdmin = signal(false);

  constructor(
    private competenceService: CompetenceService,
    private authService: AuthService,
    private dataStorageService: DataStorageService,
    private sanitizer: DomSanitizer,
  ) {}

  ngOnInit(): void {
    this.isAdmin.set(this.authService.isAuthenticated());

    this.onFetchCompetencesData();

    this.competences = this.competenceService.getCompetences();

    this.subscription = this.competenceService.competencesChanged.subscribe(
      (competences: Competence[]) => {
        this.competences = competences;
      },
    );
  }

  onFetchCompetencesData(): void {
    this.dataStorageService.getCompetences();
  }

  sanitizedSvg(
    svgString: string | undefined,
    width: string,
    height: string,
    stroke: string,
    fill: string,
  ): SafeHtml {
    if (!svgString) {
      return '';
    }

    let newSvgString = svgString;

    newSvgString = newSvgString.replace('height="1em"', `height="${height}"`);

    newSvgString = newSvgString.replace('width="1em"', `width="${width}"`);

    newSvgString = newSvgString.replace(
      'fill="currentColor"',
      `fill="${fill}"`,
    );

    newSvgString = newSvgString.replace(
      'stroke="currentColor"',
      `stroke="${stroke}"`,
    );

    return this.sanitizer.bypassSecurityTrustHtml(newSvgString);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
