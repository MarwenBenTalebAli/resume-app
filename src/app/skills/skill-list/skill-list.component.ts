import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { Competence } from '../competence.model';
import { CompetenceService } from '../competence.service';
import { DataStorageService } from '../../shared/data-storage.service';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { SkillItemComponent } from './skill-item/skill-item.component';

@Component({
  selector: 'app-skill-list',
  standalone: true,
  imports: [RouterModule, SkillItemComponent],
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.scss'],
})
export class SkillListComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  competences: Competence[];
  private dataStorageService = inject(DataStorageService);

  constructor(
    private competenceService: CompetenceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subscription = this.competenceService.competencesChanged.subscribe(
      (competences: Competence[]) => {
        this.competences = competences;
      }
    );
    this.competences = this.competenceService.getCompetences();
  }

  onNewCompetence() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onSaveCompetencesData() {
    this.dataStorageService.storeCompetences().subscribe((response) => {
      console.log(response);
    });
  }

  onFetchCompetencesData() {
    this.dataStorageService.getCompetences();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
