import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { Competence } from '../competence.model';
import { CompetenceService } from '../competence.service';
import { DataStorageService } from '../../shared/data-storage.service';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { SkillItemComponent } from './skill-item/skill-item.component';
import { TranslatePipe } from '@ngx-translate/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-skill-list',
  standalone: true,
  imports: [
    RouterModule,
    SkillItemComponent,
    TranslatePipe,
    NzButtonModule,
    NzIconModule,
  ],
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.scss'],
})
export class SkillListComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  competences: Competence[];

  private dataStorageService = inject(DataStorageService);

  headerTitle: string = 'ADMIN_SKILLS_HEADER.HEADER_TITLE';
  headerSubtitle: string = 'ADMIN_SKILLS_HEADER.HEADER_SUBTITLE';

  newSkillButtonLabel: string = 'ADMIN_SKILLS_BUTTONS.NEW_SKILL';
  saveDataButtonLabel: string = 'ADMIN_SKILLS_BUTTONS.SAVE_DATA';
  fetchDataButtonLabel: string = 'ADMIN_SKILLS_BUTTONS.FETCH_DATA';

  listTitle: string = 'ADMIN_SKILL_DETAIL.LIST_TITLE';
  detailsTitle: string = 'ADMIN_SKILL_DETAIL.DETAILS_TITLE';

  constructor(
    private competenceService: CompetenceService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.subscription = this.competenceService.competencesChanged.subscribe(
      (competences: Competence[]) => {
        this.competences = competences;
      },
    );

    this.competences = this.competenceService.getCompetences();
  }

  onNewCompetence(): void {
    this.router.navigate(['new'], {
      relativeTo: this.route,
    });
  }

  onSaveCompetencesData(): void {
    this.dataStorageService.storeCompetences().subscribe((response) => {
      console.log(response);
    });
  }

  onFetchCompetencesData(): void {
    this.dataStorageService.getCompetences();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
