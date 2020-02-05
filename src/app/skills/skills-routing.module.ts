
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkillsComponent } from './skills.component';
import { SkillStartComponent } from './skill-start/skill-start.component';
import { SkillEditComponent } from './skill-edit/skill-edit.component';
import { SkillDetailComponent } from './skill-detail/skill-detail.component';



const skillsRoutes: Routes = [
    {
        path: '', component: SkillsComponent, children: [
            { path: '', component: SkillStartComponent },
            { path: 'new', component: SkillEditComponent },
            { path: ':id', component: SkillDetailComponent },
            { path: ':id/edit', component: SkillEditComponent },
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(skillsRoutes)
    ],
    exports: [RouterModule],
    providers: [
    ]
})
export class SkillsRoutingModule { }
