import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { FormationService } from '../formation.service';

@Component({
  selector: 'app-award-edit',
  templateUrl: './award-edit.component.html',
  styleUrls: ['./award-edit.component.scss']
})
export class AwardEditComponent implements OnInit {

  id: number;
  editMode = false;
  formationForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private formationService: FormationService,
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
    let nomFormation = '';
    let societe = '';
    let dateDebut = '';
    let dateFin = '';
    let adresse = '';
    let siteWeb = '';

    if (this.editMode) {
      const formation = this.formationService.getFormation(this.id);
      nomFormation = formation.nomFormation;
      societe = formation.societe;
      dateDebut = formation.dateDebut;
      dateFin = formation.dateFin;
      adresse = formation.adresse;
      siteWeb = formation.siteWeb;
    }

    this.formationForm = new FormGroup({
      nomFormation: new FormControl(nomFormation, Validators.required),
      societe: new FormControl(societe, Validators.required),
      dateDebut: new FormControl(dateDebut, Validators.required),
      dateFin: new FormControl(dateFin, Validators.required),
      adresse: new FormControl(adresse, Validators.required),
      siteWeb: new FormControl(siteWeb)
    });
  }

  onSubmitFormation() {
    console.log(this.formationForm);
    if (this.editMode) {
      this.formationService.updateFormation(this.id, this.formationForm.value);
    } else {
      this.formationService.addFormation(this.formationForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

}
