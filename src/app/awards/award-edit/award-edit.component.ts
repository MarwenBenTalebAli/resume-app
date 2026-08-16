import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';

import { FormationService } from '../formation.service';

@Component({
  selector: 'app-award-edit',
  standalone: true,
  imports: [ReactiveFormsModule, TranslatePipe],
  templateUrl: './award-edit.component.html',
  styleUrls: ['./award-edit.component.scss'],
})
export class AwardEditComponent implements OnInit {
  id!: number;
  editMode = false;

  formationForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private formationService: FormationService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;

      this.initForm();
    });
  }

  private initForm(): void {
    let nomFormation = '';
    let societe = '';
    let dateDebut = '';
    let dateFin = '';
    let adresse = '';
    let siteWeb = '';

    if (this.editMode) {
      const formation = this.formationService.getFormation(this.id);

      if (formation) {
        if (typeof formation.nomFormation === 'string') {
          nomFormation = formation.nomFormation;
        } else {
          nomFormation = formation.nomFormation?.['fr'] ?? '';
        }

        societe = formation.societe;
        dateDebut = this.formatDateForInput(formation.dateDebut);
        dateFin = this.formatDateForInput(formation.dateFin);
        adresse = formation.adresse;
        siteWeb = formation.siteWeb;
      }
    }

    this.formationForm = new FormGroup({
      nomFormation: new FormControl(nomFormation, Validators.required),

      societe: new FormControl(societe, Validators.required),

      dateDebut: new FormControl(dateDebut, Validators.required),

      dateFin: new FormControl(dateFin, Validators.required),

      adresse: new FormControl(adresse, Validators.required),

      siteWeb: new FormControl(siteWeb),
    });
  }

  private formatDateForInput(date: string): string {
    if (!date) {
      return '';
    }

    // Already in the correct format
    if (/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      return date;
    }

    const parsedDate = new Date(date);

    if (isNaN(parsedDate.getTime())) {
      return '';
    }

    const year = parsedDate.getFullYear();
    const month = String(parsedDate.getMonth() + 1).padStart(2, '0');
    const day = String(parsedDate.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

  onSubmitFormation(): void {
    if (this.formationForm.invalid) {
      this.formationForm.markAllAsTouched();
      return;
    }

    const formationData = this.formationForm.value;

    if (this.editMode) {
      this.formationService.updateFormation(this.id, formationData);
    } else {
      this.formationService.addFormation(formationData);
    }

    this.onCancel();
  }

  onCancel(): void {
    this.router.navigate(['../'], {
      relativeTo: this.route,
    });
  }
}
