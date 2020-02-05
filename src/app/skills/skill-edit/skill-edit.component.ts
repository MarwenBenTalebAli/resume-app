import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { CompetenceService } from '../competence.service';

@Component({
  selector: 'app-skill-edit',
  templateUrl: './skill-edit.component.html',
  styleUrls: ['./skill-edit.component.scss']
})
export class SkillEditComponent implements OnInit {

  id: number;
  editMode = false;
  competenceForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private competenceService: CompetenceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params.id;
          this.editMode = params.id != null;
          this.initForm();
        }
      );
  }

  private initForm() {
    let nomCompetence = '';
    let niveau = '';
    let description = '';

    if (this.editMode) {
      const competence = this.competenceService.getCompetence(this.id);
      nomCompetence = competence.nomCompetence;
      niveau = competence.niveau;
      description = competence.description;
    }

    this.competenceForm = new FormGroup({
      nomCompetence: new FormControl(nomCompetence, Validators.required),
      niveau: new FormControl(niveau, Validators.required),
      description: new FormControl(description, Validators.required)
    });
  }

  onSubmitCompetence() {
    console.log(this.competenceForm);
    if (this.editMode) {
      this.competenceService.updateCompetence(this.id, this.competenceForm.value);
    } else {
      this.competenceService.addCompetence(this.competenceForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

}
