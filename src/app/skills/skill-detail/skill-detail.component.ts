import { Component, OnInit } from '@angular/core';
import { CompetenceService } from '../competence.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Competence } from '../competence.model';


@Component({
  selector: 'app-skill-detail',
  templateUrl: './skill-detail.component.html',
  styleUrls: ['./skill-detail.component.scss']
})
export class SkillDetailComponent implements OnInit {

  competence: Competence;
  id: number;

  constructor(
    private competenceService: CompetenceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params.id;
        this.competence = this.competenceService.getCompetence(this.id);
      }
    );
  }

  onEditCompetence() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  onDeleteCompetence() {
    this.competenceService.deleteCompetence(this.id);
    this.router.navigate(['/skills']);
  }

}
