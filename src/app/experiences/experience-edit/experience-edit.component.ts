import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

import { ExperienceService } from '../experience.service';
import { Translatable } from '../../shared/translatable.model';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-experience-edit',
  standalone: true,
  imports: [ReactiveFormsModule, TranslatePipe],
  templateUrl: './experience-edit.component.html',
  styleUrls: ['./experience-edit.component.scss'],
})
export class ExperienceEditComponent implements OnInit {
  id: number;
  editMode = false;
  experienceForm: FormGroup;
  saveButtonLabel: string = 'ADMIN_EXPERIENCE_EDIT_BUTTONS.SAVE';
  cancelButtonLabel: string = 'ADMIN_EXPERIENCE_EDIT_BUTTONS.CANCEL';

  constructor(
    private route: ActivatedRoute,
    private experienceService: ExperienceService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
      this.editMode = params.id != null;
      this.initForm();
    });
  }

  private initForm() {
    let nom: Translatable = { fr: '', en: '' };
    let societe = '';
    let adresse = '';
    let dateDebut = '';
    let dateFin = '';
    let description: Translatable = { fr: '', en: '' };
    let urlDescription: Translatable = { fr: '', en: '' };

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
      nomExperience: new FormGroup({
        fr: new FormControl(nom.fr, Validators.required),
        en: new FormControl(nom.en, Validators.required),
      }),

      societe: new FormControl(societe, Validators.required),

      adresse: new FormControl(adresse, Validators.required),

      dateDebut: new FormControl(dateDebut, Validators.required),

      dateFin: new FormControl(dateFin, Validators.required),

      description: new FormGroup({
        fr: new FormControl(description.fr, Validators.required),
        en: new FormControl(description.en, Validators.required),
      }),

      urlDescription: new FormGroup({
        fr: new FormControl(urlDescription.fr),
        en: new FormControl(urlDescription.en),
      }),
    });
  }

  onSubmitExperience() {
    console.log('Form:', this.experienceForm.value);

    if (this.editMode) {
      this.experienceService.updateExperience(
        this.id,
        this.experienceForm.value,
      );
    } else {
      this.experienceService.addExperience(this.experienceForm.value);
    }

    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
