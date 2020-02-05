import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './admin.component';

import { SharedModule } from '../shared/shared.module';
import { EducationsModule } from '../educations/educations.module';
import { ExperiencesModule } from '../experiences/experiences.module';
import { AdminRoutingModule } from './admin-routing.module';
import { SkillsModule } from '../skills/skills.module';
import { AwardsModule } from '../awards/awards.module';


@NgModule({
    declarations: [
        AdminComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AdminRoutingModule,
        EducationsModule,
        ExperiencesModule,
        SkillsModule,
        AwardsModule,
        SharedModule,
    ],
    schemas: [NO_ERRORS_SCHEMA],
})
export class AdminModule { }
