import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { EducationsComponent } from './educations.component';
import { EducationStartComponent } from './education-start/education-start.component';
import { EducationListComponent } from './education-list/education-list.component';
import { EducationEditComponent } from './education-edit/education-edit.component';
import { EducationDetailComponent } from './education-detail/education-detail.component';
import { EducationItemComponent } from './education-list/education-item/education-item.component';
import { EducationsRoutingModule } from './educations-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    EducationsComponent,
    EducationStartComponent,
    EducationListComponent,
    EducationEditComponent,
    EducationDetailComponent,
    EducationItemComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EducationsRoutingModule,
    SharedModule
  ],
  exports: [
    EducationsComponent
  ]
})
export class EducationsModule {}
