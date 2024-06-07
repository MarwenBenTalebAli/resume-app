import { Router } from '@angular/router';
// import * as firebase from 'firebase';
import { Injectable, NgZone } from '@angular/core';
// import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { User } from '../shared/user.model';
import { DataStorageService } from '../shared/data-storage.service';
import { UserService } from '../about/user.service';

@Injectable()
export class AuthService {
  token: string;
  errorMsg: string;
  user: {};
  private readonly USER_KEY = 'connectedUser';

  constructor(
    private router: Router,
    public angularFirestore: AngularFirestore,
    public angularFireAuth: AngularFireAuth,
    public ngZone: NgZone,
    public userService: UserService,
    public dataStorageService: DataStorageService
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
              this.router.navigate(['/admin/experiences']);
            }
          );
          this.setUserData(response.user);
          const currentUserEmail = this.angularFireAuth.auth.currentUser.email;
          console.log('currentUserEmail', currentUserEmail);
          this.dataStorageService.getUser('email', currentUserEmail);
          this.user = this.userService.getUser();
          this.angularFireAuth.auth.currentUser.getIdToken()
            .then(
              (token: string) => {
                this.token = token;
                console.log('token', this.token);
                this.setConnectedUser({
                  uid: response.user.uid,
                  email: response.user.email,
                  displayName: response.user.displayName,
                  photoURL: response.user.photoURL,
                  emailVerified: response.user.emailVerified,
                }
                  , this.token
                );
              }
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
    this.clearConnectedUser();
    this.router.navigate(['/about']);
  }

  getToken() {
    this.angularFireAuth.auth.currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }

  isAuthenticated() {
    this.getConnectedUser()
    const userString = localStorage.getItem(this.USER_KEY);
    const user = JSON.parse(userString);
    const token = (typeof user === 'object' && user !== null) ? user.token : null;
    return token != null;
  }

  setUserData(user: any) {
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



  setConnectedUser(user: User, token: string): void {
    localStorage.setItem(this.USER_KEY, JSON.stringify({ ...user, token: token }));
  }

  getConnectedUser(): User | null {
    const user = localStorage.getItem(this.USER_KEY);
    return user ? JSON.parse(user) : null;
  }

  clearConnectedUser(): void {
    localStorage.removeItem(this.USER_KEY);
  }
}
