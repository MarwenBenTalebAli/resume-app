import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsComponent } from './projects.component';
import { ProjectStartComponent } from './project-start/project-start.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';


const projectsRoutes: Routes = [
    {
        path: '', component: ProjectsComponent, children: [
            { path: '', component: ProjectStartComponent },
            { path: 'new', component: ProjectEditComponent },
            { path: ':id', component: ProjectDetailComponent },
            { path: ':id/edit', component: ProjectEditComponent }
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(projectsRoutes)
    ],
    exports: [RouterModule],
    providers: [
    ]
})
export class ProjectsRoutingModule { }
