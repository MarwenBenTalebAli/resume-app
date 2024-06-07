import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';

import { EducationEditComponent } from '../educations/education-edit/education-edit.component';
import { EducationDetailComponent } from '../educations/education-detail/education-detail.component';

import { ExperienceEditComponent } from '../experiences/experience-edit/experience-edit.component';
import { ExperienceDetailComponent } from '../experiences/experience-detail/experience-detail.component';

import { SkillEditComponent } from '../skills/skill-edit/skill-edit.component';
import { SkillDetailComponent } from '../skills/skill-detail/skill-detail.component';

import { AwardEditComponent } from '../awards/award-edit/award-edit.component';
import { AwardDetailComponent } from '../awards/award-detail/award-detail.component';

import { EducationStartComponent } from '../educations/education-start/education-start.component';
import { ExperienceStartComponent } from '../experiences/experience-start/experience-start.component';
import { SkillStartComponent } from '../skills/skill-start/skill-start.component';
import { AwardStartComponent } from '../awards/award-start/award-start.component';

import { AuthGuard } from '../auth/auth-guard.service';
import { ExperiencesComponent } from '../experiences/experiences.component';
import { EducationsComponent } from '../educations/educations.component';
import { AwardsComponent } from '../awards/awards.component';
import { SkillsComponent } from '../skills/skills.component';






const adminRoutes: Routes = [
    {
        path: '', component: AdminComponent, children: [
            {
                path: 'experiences', component: ExperiencesComponent, canActivate: [AuthGuard],
                children: [
                    { path: '', component: ExperienceStartComponent },
                    { path: 'new', component: ExperienceEditComponent, canActivate: [AuthGuard] },
                    { path: ':id', component: ExperienceDetailComponent, canActivate: [AuthGuard] },
                    { path: ':id/edit', component: ExperienceEditComponent, canActivate: [AuthGuard] }
                ]
            },
            {
                path: 'educations', component: EducationsComponent, canActivate: [AuthGuard],
                children: [
                    { path: '', component: EducationStartComponent },
                    { path: 'new', component: EducationEditComponent, canActivate: [AuthGuard] },
                    { path: ':id', component: EducationDetailComponent, canActivate: [AuthGuard] },
                    { path: ':id/edit', component: EducationEditComponent, canActivate: [AuthGuard] },
                ]
            },
            {
                path: 'skills', component: SkillsComponent, canActivate: [AuthGuard],
                children: [
                    { path: '', component: SkillStartComponent },
                    { path: 'new', component: SkillEditComponent, canActivate: [AuthGuard] },
                    { path: ':id', component: SkillDetailComponent, canActivate: [AuthGuard] },
                    { path: ':id/edit', component: SkillEditComponent, canActivate: [AuthGuard] },
                ]
            },
            {
                path: 'awards', component: AwardsComponent, canActivate: [AuthGuard],
                children: [
                    { path: '', component: AwardStartComponent },
                    { path: 'new', component: AwardEditComponent },
                    { path: ':id', component: AwardDetailComponent },
                    { path: ':id/edit', component: AwardEditComponent },
                ]
            },
        ],
        canActivate: [AuthGuard]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes)
    ],
    exports: [RouterModule],
    providers: [
        AuthGuard
    ]
})
export class AdminRoutingModule { }
