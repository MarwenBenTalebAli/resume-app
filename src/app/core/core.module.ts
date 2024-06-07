import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';
import { UserService } from '../about/user.service';
import { InterestService } from '../interests/interest.service';
import { EducationService } from '../educations/education.service';
import { ExperienceService } from '../experiences/experience.service';
import { ProjectService } from '../projects/project.service';
import { FormationService } from '../awards/formation.service';
import { CompetenceService } from '../skills/competence.service';
import { AuthInterceptor } from '../shared/auth.interceptor';
import { LoggingInterceptor } from '../shared/logging.interceptor';


@NgModule({
    declarations: [
        SidenavComponent,
        HomeComponent
    ],
    imports: [
        SharedModule,
        AppRoutingModule
    ],
    exports: [
        AppRoutingModule,
        SidenavComponent
    ],
    providers: [
        UserService,
        EducationService,
        ExperienceService,
        ProjectService,
        FormationService,
        CompetenceService,
        InterestService,
        DataStorageService,
        AuthService,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true }
    ]
})
export class CoreModule { }
