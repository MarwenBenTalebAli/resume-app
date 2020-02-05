import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ExperiencesComponent } from './experiences.component';
import { ExperienceStartComponent } from './experience-start/experience-start.component';
import { ExperienceListComponent } from './experience-list/experience-list.component';
import { ExperienceEditComponent } from './experience-edit/experience-edit.component';
import { ExperienceDetailComponent } from './experience-detail/experience-detail.component';
import { ExperienceItemComponent } from './experience-list/experience-item/experience-item.component';
import { ExperiencesRoutingModule } from './experiences-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ExperiencesComponent,
    ExperienceStartComponent,
    ExperienceListComponent,
    ExperienceEditComponent,
    ExperienceDetailComponent,
    ExperienceItemComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ExperiencesRoutingModule,
    SharedModule
  ],
  exports: [
    ExperiencesComponent,
  ]
})
export class ExperiencesModule { }
