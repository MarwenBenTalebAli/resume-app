// import { inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Subject } from 'rxjs';
// import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // private httpClient = inject(HttpClient);
  usersChanged = new Subject<User[]>();

  users: User[] = [
    // new User(
    //   'GOUVERNORAT DE SOUSSE, TUNISIE',
    //   `J'ai de bonnes compétences en développement d'applications desktop et web.     Je suis un jeune homme dynamique qui cherche à mettre son énergie     et ses compétences dans le domaine du développement informatique.`,
    //   'marwen.bentaleb@gmail.com',
    //   'drive.google.com/file/d/1AGKL4lnSxciwl4wMzyI2bQ10LdY5s_YH/view?usp=sharing',
    //   'github.com/MarwenBenTalebAli',
    //   'www.linkedin.com/in/dev-web',
    //   'MARWEN',
    //   '(+216) 25 056 351',
    //   'BEN TALEB ALI'
    // ),
  ];

  userChanged = new Subject<User>();

  user: User = new User(
    'GOUVERNORAT DE SOUSSE, TUNISIE',
    `J'ai de bonnes compétences en développement d'applications desktop et web.     Je suis un jeune homme dynamique qui cherche à mettre son énergie     et ses compétences dans le domaine du développement informatique.`,
    'marwen.bentaleb@gmail.com',
    'drive.google.com/file/d/1AGKL4lnSxciwl4wMzyI2bQ10LdY5s_YH/view?usp=sharing',
    'github.com/MarwenBenTalebAli',
    'www.linkedin.com/in/dev-web',
    'MARWEN',
    ['(+216) 25 056 351', '(+216) 23 043 762'],
    'BEN TALEB ALI'
  );

  constructor() {}

  getUser() {
    return this.user;
  }

  getUsers() {
    return this.users.slice();
  }

  addUser(user: User) {
    this.users.push(user);
    this.usersChanged.next(this.users.slice());
  }

  updateUser(index: number, newUser: User) {
    this.users[index] = newUser;
    this.usersChanged.next(this.users.slice());
  }

  deleteUser(index: number) {
    this.users.splice(index, 1);
    this.usersChanged.next(this.users.slice());
  }

  setUsers(users: User[]) {
    this.users = users;
    this.usersChanged.next(this.users.slice());
  }

  setUser(user: User) {
    this.user = user;
    this.userChanged.next(this.user);
  }
}
