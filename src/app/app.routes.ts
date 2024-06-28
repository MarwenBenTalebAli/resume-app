import { Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './about/about.component';
import { ExperiencesRoutingModule } from './experiences/experiences-routing.module';
import { ProjectsRoutingModule } from './projects/projects-routing.module';
import { EducationsRoutingModule } from './educations/educations-routing.module';
import { SkillsRoutingModule } from './skills/skills-routing.module';
import { InterestsComponent } from './interests/interests.component';
import { AwardsRoutingModule } from './awards/awards-routing.module';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { NotfoundComponent } from './core/notfound/notfound.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'experiences',
    loadChildren: () => ExperiencesRoutingModule,
  },
  {
    path: 'projects',
    loadChildren: () => ProjectsRoutingModule,
  },
  {
    path: 'educations',
    loadChildren: () => EducationsRoutingModule,
  },
  { path: 'skills', loadChildren: () => SkillsRoutingModule },
  { path: 'interests', component: InterestsComponent },
  { path: 'awards', loadChildren: () => AwardsRoutingModule },
  { path: 'admin', loadChildren: () => AdminRoutingModule },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: '**', component: NotfoundComponent },
];
