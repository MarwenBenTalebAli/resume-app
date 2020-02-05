import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExperiencesComponent } from './experiences.component';
import { ExperienceStartComponent } from './experience-start/experience-start.component';
import { ExperienceEditComponent } from './experience-edit/experience-edit.component';
import { ExperienceDetailComponent } from './experience-detail/experience-detail.component';


const experiencesRoutes: Routes = [
    {
        path: '', component: ExperiencesComponent, children: [
            { path: '', component: ExperienceStartComponent },
            { path: 'new', component: ExperienceEditComponent },
            { path: ':id', component: ExperienceDetailComponent },
            { path: ':id/edit', component: ExperienceEditComponent }
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(experiencesRoutes)
    ],
    exports: [RouterModule],
    providers: [
    ]
})
export class ExperiencesRoutingModule { }
