import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { NotfoundComponent } from '../core/notfound/notfound.component';

const authRoutes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
