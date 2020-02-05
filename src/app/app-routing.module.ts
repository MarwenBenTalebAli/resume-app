import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './about/about.component';
import { InterestsComponent } from './interests/interests.component';

const appRoutes: Routes = [
/*  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'experiences',
    loadChildren: () => import('./experiences/experiences.module').then(mod => mod.ExperiencesModule)
  },
  {
    path: 'educations',
    loadChildren: () => import('./educations/educations.module').then(mod => mod.EducationsModule)
  },
  {
    path: 'skills',
    loadChildren: () => import('./skills/skills.module').then(mod => mod.SkillsModule)
  },
  { path: 'interests', component: InterestsComponent },
  {
    path: 'awards',
    loadChildren: () => import('./awards/awards.module').then(mod => mod.AwardsModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule)
  },
*/
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'experiences', loadChildren: './experiences/experiences.module#ExperiencesModule'},
  { path: 'educations', loadChildren: './educations/educations.module#EducationsModule'},
  { path: 'skills', loadChildren: './skills/skills.module#SkillsModule'},
  { path: 'interests', component: InterestsComponent },
  { path: 'awards', loadChildren: './awards/awards.module#AwardsModule'},
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
