import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EducationsComponent } from './educations.component';
import { EducationStartComponent } from './education-start/education-start.component';
import { EducationEditComponent } from './education-edit/education-edit.component';
import { EducationDetailComponent } from './education-detail/education-detail.component';


const educationsRoutes: Routes = [
    {
        path: '', component: EducationsComponent, children: [
            { path: '', component: EducationStartComponent },
            { path: 'new', component: EducationEditComponent },
            { path: ':id', component: EducationDetailComponent },
            { path: ':id/edit', component: EducationEditComponent }
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(educationsRoutes)
    ],
    exports: [RouterModule],
    providers: [
    ]
})
export class EducationsRoutingModule { }
