import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AwardsComponent } from './awards.component';
import { AwardDetailComponent } from './award-detail/award-detail.component';
import { AwardEditComponent } from './award-edit/award-edit.component';
import { AwardStartComponent } from './award-start/award-start.component';
import { AwardListComponent } from './award-list/award-list.component';
import { AwardItemComponent } from './award-list/award-item/award-item.component';
import { AwardsRoutingModule } from './awards-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        AwardsComponent,
        AwardDetailComponent,
        AwardEditComponent,
        AwardStartComponent,
        AwardListComponent,
        AwardItemComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AwardsRoutingModule,
        SharedModule
    ]
})
export class AwardsModule { }
