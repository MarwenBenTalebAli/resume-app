import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AuthRoutingModule } from './auth-routing.module';

import { CommonModule } from '@angular/common';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent
  ],
  imports: [
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    AuthRoutingModule,
    CommonModule
  ]
})
export class AuthModule { }
