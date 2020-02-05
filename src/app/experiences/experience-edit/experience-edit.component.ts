import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ExperienceService } from '../experience.service';

@Component({
  selector: 'app-experience-edit',
  templateUrl: './experience-edit.component.html',
  styleUrls: ['./experience-edit.component.scss']
})
export class ExperienceEditComponent implements OnInit {

  id: number;
  editMode = false;
  experienceForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private experienceService: ExperienceService,
    private router: Router) { }

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
    let nom = '';
    let societe = '';
    let adresse = '';
    let dateDebut = '';
    let dateFin = '';
    let description = '';
    let urlDescription = '';

    if (this.editMode) {
      const experience = this.experienceService.getExperience(this.id);
      nom = experience.nomExperience;
      societe = experience.societe;
      adresse = experience.adresse;
      dateDebut = experience.dateDebut;
      dateFin = experience.dateFin;
      description = experience.description;
      urlDescription = experience.urlDescription;
    }

    this.experienceForm = new FormGroup({
      nomExperience: new FormControl(nom, Validators.required),
      societe: new FormControl(societe, Validators.required),
      adresse: new FormControl(adresse, Validators.required),
      dateDebut: new FormControl(dateDebut, Validators.required),
      dateFin: new FormControl(dateFin, Validators.required),
      description: new FormControl(description, Validators.required),
      urlDescription: new FormControl(urlDescription)
    });
  }

  onSubmitExperience() {
    console.log(this.experienceForm);
    if (this.editMode) {
      this.experienceService.updateExperience(this.id, this.experienceForm.value);
    } else {
      this.experienceService.addExperience(this.experienceForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

}
