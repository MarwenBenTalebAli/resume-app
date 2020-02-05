import { Router } from '@angular/router';
// import * as firebase from 'firebase';
import { Injectable, NgZone } from '@angular/core';
// import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { User } from '../shared/user.model';

@Injectable()
export class AuthService {
  token: string;
  errorMsg: string;

  constructor(
    private router: Router,
    public angularFirestore: AngularFirestore,
    public angularFireAuth: AngularFireAuth,
    public ngZone: NgZone
  ) { }

  signupUser(email: string, password: string) {
    this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(response => {
        // this.setUserData(response.user);
      }
      )
      .catch(
        error => console.log(error)
      );
  }

  signinUser(email: string, password: string) {
    this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.ngZone.run(
            () => {
              this.router.navigate(['/admin']);
            }
          );
          // this.setUserData(response.user);
          this.angularFireAuth.auth.currentUser.getIdToken()
            .then(
              (token: string) => this.token = token
            );
        }
      )
      .catch(
        error => this.errorMsg = error
      );
  }

  logout() {
    this.angularFireAuth.auth.signOut();
    this.token = null;
  }

  getToken() {
    this.angularFireAuth.auth.currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

  setUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.angularFirestore.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    };
    return userRef.set(userData, {
      merge: true
    });
  }
}
