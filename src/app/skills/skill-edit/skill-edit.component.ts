import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

import { TranslatePipe } from '@ngx-translate/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { CompetenceService } from '../competence.service';

@Component({
  selector: 'app-skill-edit',
  standalone: true,
  imports: [ReactiveFormsModule, TranslatePipe, NzButtonModule, NzIconModule],
  templateUrl: './skill-edit.component.html',
  styleUrls: ['./skill-edit.component.scss'],
})
export class SkillEditComponent implements OnInit {
  id!: number;

  editMode = false;

  competenceForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private competenceService: CompetenceService,
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
    let nomCompetence = '';

    let niveau = {
      fr: '',
      en: '',
    };

    let description = {
      fr: '',
      en: '',
    };

    if (this.editMode) {
      const competence = this.competenceService.getCompetence(this.id);

      nomCompetence = competence.nomCompetence;

      niveau = this.normalizeTranslation(competence.niveau);

      description = this.normalizeTranslation(competence.description);
    }

    this.competenceForm = new FormGroup({
      nomCompetence: new FormControl(nomCompetence, Validators.required),

      niveau: new FormGroup({
        fr: new FormControl(niveau.fr, Validators.required),

        en: new FormControl(niveau.en, Validators.required),
      }),

      description: new FormGroup({
        fr: new FormControl(description.fr, Validators.required),

        en: new FormControl(description.en, Validators.required),
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

  onSubmitCompetence(): void {
    if (!this.competenceForm.valid) {
      this.competenceForm.markAllAsTouched();

      return;
    }

    console.log('Competence:', this.competenceForm.value);

    if (this.editMode) {
      this.competenceService.updateCompetence(
        this.id,
        this.competenceForm.value,
      );
    } else {
      this.competenceService.addCompetence(this.competenceForm.value);
    }

    this.onCancel();
  }

  onCancel(): void {
    this.router.navigate(['../'], {
      relativeTo: this.route,
    });
  }
}
