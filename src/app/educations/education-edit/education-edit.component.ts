import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

import { EducationService } from '../education.service';

@Component({
  selector: 'app-education-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './education-edit.component.html',
  styleUrls: ['./education-edit.component.scss'],
})
export class EducationEditComponent implements OnInit {
  id: number;
  editMode = false;
  educationForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private educationService: EducationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
      this.editMode = params.id != null;
      this.initForm();
    });
  }

  private initForm() {
    let nom = '';
    let diplome = '';
    let adresse = '';
    let dateDebut = '';
    let dateFin = '';
    let details = '';

    if (this.editMode) {
      const education = this.educationService.getInstitut(this.id);
      nom = education.nom;
      diplome = education.diplome;
      adresse = education.adresse;
      dateDebut = education.dateDebut;
      dateFin = education.dateFin;
      details = education.details;
    }

    this.educationForm = new FormGroup({
      nom: new FormControl(nom, Validators.required),
      diplome: new FormControl(diplome, Validators.required),
      dateDebut: new FormControl(dateDebut, Validators.required),
      dateFin: new FormControl(dateFin, Validators.required),
      adresse: new FormControl(adresse, Validators.required),
      details: new FormControl(details, Validators.required),
    });
  }

  onSubmitEducation() {
    console.log(this.educationForm);
    if (this.editMode) {
      this.educationService.updateInstitut(this.id, this.educationForm.value);
    } else {
      this.educationService.addInstitut(this.educationForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
