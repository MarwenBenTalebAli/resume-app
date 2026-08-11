import { Router } from '@angular/router';
// import * as firebase from 'firebase';
import { Injectable, NgZone, inject } from '@angular/core';
// import { auth } from 'firebase/app';
import {
  /*AngularFireAuth,*/ Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from '@angular/fire/auth';
import {
  Firestore,
  collection,
  collectionData,
  CollectionReference,
  setDoc,
  DocumentData,
  doc,
} from '@angular/fire/firestore';
// import {
//   AngularFirestore,
//   AngularFirestoreDocument,
// } from '@angular/fire/compat/firestore';
import { User } from '../shared/user.model';
import { DataStorageService } from '../shared/data-storage.service';
import { UserService } from '../about/user.service';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token: string;
  // errorMsg: string;
  user: {};
  private readonly USER_KEY = 'connectedUser';
  // private auth = inject(Auth);

  private router: Router = inject(Router);
  public angularFirestore: /*Angular*/ Firestore = inject(Firestore);
  // public angularFirestore: AngularFirestore = inject(AngularFirestore);
  public angularFireAuth: /*AngularFire*/ Auth = inject(Auth);
  // public angularFireAuth: AngularFireAuth = inject(AngularFireAuth);
  public ngZone: NgZone = inject(NgZone);
  public userService: UserService = inject(UserService);
  public dataStorageService: DataStorageService = inject(DataStorageService);

  constructor() {}

  signupUser(email: string, password: string) {
    createUserWithEmailAndPassword(this.angularFireAuth, email, password)
      .then((response) => {
        console.log('response.user', response.user);
        this.setUserData(response.user);
      })
      .catch((error) => console.log('signupUserError', error));
  }

  async signinUser(email: string, password: string): Promise<any> {
    try {
      const response = await signInWithEmailAndPassword(
        this.angularFireAuth,
        email,
        password,
      );

      console.log('SERVICE:signinUser:response:', response);

      this.setUserData(response.user);
      console.log(
        'SERVICE:signinUser:currentUser',
        this.angularFireAuth.currentUser,
      );
      // const currentUserEmailP = this.angularFireAuth.currentUser?.then(
      //   (user) => {
      //     const currentUserEmail = user?.email;
      //     console.log('currentUserEmail', currentUserEmail);
      //     if (currentUserEmail) {
      //       this.dataStorageService.getUser('email', currentUserEmail);
      //       this.user = this.userService.getUser();
      //     }
      //   }
      // );
      const currentUserEmail = this.angularFireAuth.currentUser?.email;
      if (currentUserEmail) {
        this.dataStorageService.getUser(
          'SERVICE:signinUser:email:',
          currentUserEmail,
        );
      }
      this.user = this.userService.getUser();
      console.log('SERVICE:signinUser:user:', this.user);
      const token = await this.angularFireAuth.currentUser?.getIdToken();
      // .then((token) => {
      if (token) {
        this.token = token;
      }
      console.log('SERVICE:signinUser:token:', this.token);
      this.setConnectedUser(
        {
          uid: response?.user?.uid || '',
          email: response?.user?.email || '',
          displayName: response?.user?.displayName || '',
          photoURL: response?.user?.photoURL || '',
          emailVerified: response?.user?.emailVerified || false,
        },
        this.token,
      );

      console.log('SERVICE:signinUser:SUCCESS:');

      // this.ngZone.run(() => {
      //   this.router.navigate(['/admin/experiences']);
      // });

      const navigationResult = await this.router.navigate([
        '/admin/experiences',
      ]);

      console.log('SERVICE:signinUser:navigationResult:', navigationResult);

      // });
    } catch (error) {
      // console.log('signinUserError:', Object.keys(error));
      // console.log('signinUserError:code:', error.code);
      // console.log(
      //   'signinUserError:customData:',
      //   Object.keys(error.customData),
      // );
      // console.log('signinUserError:name:', error.name);
      // this.errorMsg = error;
      console.error('SERVICE:signinUser:ERROR:', error);
      throw error;
    }
  }

  logout() {
    this.angularFireAuth.signOut();
    this.token = '';
    this.clearConnectedUser();
    this.router.navigate(['/about']);
  }

  getToken() {
    this.angularFireAuth.currentUser?.getIdToken().then((token) => {
      if (token) {
        this.token = token;
      }
    });
    return this.token;
  }

  isAuthenticated() {
    this.getConnectedUser();
    const userString = localStorage.getItem(this.USER_KEY);
    let token = null;
    if (userString) {
      const user = JSON.parse(userString);
      token = typeof user === 'object' && user !== null ? user.token : null;
    }
    return token != null;
  }

  setUserData(user: any) {
    /*
    const userRef1: AngularFirestoreDocument<any> = this.angularFirestore.doc(
      `users/${user.uid}`
    );

    const userData1: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    return userRef1.set(userData1, {
      merge: true,
    });
    */
    console.log('user.uid', user.uid);

    // get a reference to the user-profile collection

    const userProfileCollection: CollectionReference<
      DocumentData,
      DocumentData
    > = collection(this.angularFirestore, 'users');

    console.log('userProfileCollection:', userProfileCollection);

    // get documents (data) from the collection using collectionData
    // const user$ = collectionData(userProfileCollection) as Observable<User>;

    // console.log('user$:', user$);

    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };

    const userRef = doc(this.angularFirestore, `users/${user.uid}`);
    return setDoc(
      userRef,
      {
        // ...user$,
        ...userData,
      },
      { merge: true },
    );
  }

  setConnectedUser(user: User, token: string): void {
    localStorage.setItem(
      this.USER_KEY,
      JSON.stringify({ ...user, token: token }),
    );
  }

  getConnectedUser(): User | null {
    const user = localStorage.getItem(this.USER_KEY);
    return user ? JSON.parse(user) : null;
  }

  clearConnectedUser(): void {
    localStorage.removeItem(this.USER_KEY);
  }
}
