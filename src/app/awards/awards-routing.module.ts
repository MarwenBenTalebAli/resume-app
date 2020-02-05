import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AwardsComponent } from './awards.component';
import { AwardStartComponent } from './award-start/award-start.component';
import { AwardEditComponent } from './award-edit/award-edit.component';
import { AwardDetailComponent } from './award-detail/award-detail.component';



const awardsRoutes: Routes = [
    {
        path: '', component: AwardsComponent, children: [
            { path: '', component: AwardStartComponent },
            { path: 'new', component: AwardEditComponent },
            { path: ':id', component: AwardDetailComponent },
            { path: ':id/edit', component: AwardEditComponent },
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(awardsRoutes)
    ],
    exports: [RouterModule],
    providers: [
    ]
})
export class AwardsRoutingModule { }
