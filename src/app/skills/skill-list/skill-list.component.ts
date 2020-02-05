import { Component, OnInit, OnDestroy } from '@angular/core';
import { Competence } from '../competence.model';
import { CompetenceService } from '../competence.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.scss']
})
export class SkillListComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  competences: Competence[];

  constructor(
    private competenceService: CompetenceService,
    private dataStorageService: DataStorageService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

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
    this.dataStorageService.storeCompetences()
      .subscribe(
        (response) => {
          console.log(response);
        }
      );
  }

  onFetchCompetencesData() {
    this.dataStorageService.getCompetences();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
