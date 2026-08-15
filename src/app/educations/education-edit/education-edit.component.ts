import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router';

import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

import { EducationService } from '../education.service';

import { TranslatePipe } from '@ngx-translate/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { formatDateForInput, formatDateForStorage } from '../../shared/utils';

@Component({
  selector: 'app-education-edit',
  standalone: true,
  imports: [ReactiveFormsModule, TranslatePipe, NzButtonModule, NzIconModule],
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
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;

      this.editMode = params.id != null;

      this.initForm();
    });
  }

  private initForm(): void {
    let nom = '';

    let diplome = {
      fr: '',
      en: '',
    };

    let adresse = '';

    let dateDebut = '';

    let dateFin = '';

    let details = {
      fr: '',
      en: '',
    };

    if (this.editMode) {
      const education = this.educationService.getInstitut(this.id);

      nom = education.nom;

      diplome = this.normalizeTranslation(education.diplome);

      adresse = education.adresse;

      // Convert DD/MM/YYYY → YYYY-MM-DD
      // Required by <input type="date">
      dateDebut = formatDateForInput(education.dateDebut);

      dateFin = formatDateForInput(education.dateFin);

      details = this.normalizeTranslation(education.details);
    }

    this.educationForm = new FormGroup({
      nom: new FormControl(nom, Validators.required),

      diplome: new FormGroup({
        fr: new FormControl(diplome.fr, Validators.required),

        en: new FormControl(diplome.en, Validators.required),
      }),

      dateDebut: new FormControl(dateDebut, Validators.required),

      dateFin: new FormControl(dateFin, Validators.required),

      adresse: new FormControl(adresse, Validators.required),

      details: new FormGroup({
        fr: new FormControl(details.fr, Validators.required),

        en: new FormControl(details.en, Validators.required),
      }),
    });
  }

  private normalizeTranslation(value: any): { fr: string; en: string } {
    if (value && typeof value === 'object') {
      return {
        fr: value.fr ?? '',
        en: value.en ?? '',
      };
    }

    return {
      fr: value ?? '',
      en: value ?? '',
    };
  }

  onSubmitEducation(): void {
    const formValue = this.educationForm.value;

    const educationData = {
      ...formValue,

      // Convert YYYY-MM-DD → DD/MM/YYYY
      // Before saving to Firebase
      dateDebut: formatDateForStorage(formValue.dateDebut),

      dateFin: formatDateForStorage(formValue.dateFin),
    };

    console.log('Education:', educationData);

    if (this.editMode) {
      this.educationService.updateInstitut(this.id, educationData);
    } else {
      this.educationService.addInstitut(educationData);
    }

    this.onCancel();
  }

  onCancel(): void {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
