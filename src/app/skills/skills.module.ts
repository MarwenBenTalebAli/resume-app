import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SkillsComponent } from './skills.component';
import { SkillStartComponent } from './skill-start/skill-start.component';
import { SkillEditComponent } from './skill-edit/skill-edit.component';
import { SkillDetailComponent } from './skill-detail/skill-detail.component';
import { SkillListComponent } from './skill-list/skill-list.component';
import { SkillItemComponent } from './skill-list/skill-item/skill-item.component';
import { SkillsRoutingModule } from './skills-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        SkillsComponent,
        SkillStartComponent,
        SkillEditComponent,
        SkillDetailComponent,
        SkillListComponent,
        SkillItemComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SkillsRoutingModule,
        SharedModule
    ],
    exports: [
        SkillsComponent
    ]
})
export class SkillsModule { }
