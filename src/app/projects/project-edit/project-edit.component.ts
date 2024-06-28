import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
  FormControlState,
} from '@angular/forms';

import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.scss'],
})
export class ProjectEditComponent implements OnInit {
  id: number;
  editMode = false;
  projectForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
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
    let dateDebut = '';
    let dateFin = '';
    let description = '';
    let nomProjet = '';
    let outils: any[] | FormControlState<any[]> = [];
    let urlCodeSorce = '';
    let urlDemoEnLigne = '';
    let urlImage = '';

    if (this.editMode) {
      const project = this.projectService.getProject(this.id);
      dateDebut = project.dateDebut;
      dateFin = project.dateFin;
      nomProjet = project.nomProjet;
      description = project.description;
      outils = project.outils;
      urlCodeSorce = project.urlCodeSorce;
      urlDemoEnLigne = project.urlDemoEnLigne;
      urlImage = project.urlImage;
    }

    this.projectForm = new FormGroup({
      dateDebut: new FormControl(dateDebut, Validators.required),
      dateFin: new FormControl(dateFin, Validators.required),
      nomProjet: new FormControl(nomProjet, Validators.required),
      description: new FormControl(description, Validators.required),
      outils: new FormControl(outils, Validators.required),
      urlCodeSorce: new FormControl(urlCodeSorce, Validators.required),
      urlDemoEnLigne: new FormControl(urlDemoEnLigne),
      urlImage: new FormControl(urlImage),
    });
  }

  onSubmitProject() {
    console.log(this.projectForm);
    if (this.editMode) {
      this.projectService.updateProject(this.id, this.projectForm.value);
    } else {
      this.projectService.addProject(this.projectForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
