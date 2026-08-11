import { Component, OnInit, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  errorAlert: string;
  private authService: AuthService = inject(AuthService);

  constructor() {}

  ngOnInit() {}

  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    console.log('email:', email);
    console.log('email type:', typeof email);
    console.log('password exists:', !!password);
    console.log('password type:', typeof password);

    this.authService.signinUser(email, password).catch((error) => {
      console.log('Login error:', error.code);

      switch (error.code) {
        case 'auth/invalid-credential':
          this.errorAlert = 'Erreur : adresse email ou mot de passe incorrect.';
          break;

        case 'auth/user-disabled':
          this.errorAlert = 'Erreur : ce compte a été désactivé.';
          break;

        case 'auth/too-many-requests':
          this.errorAlert =
            'Erreur : trop de tentatives. Veuillez réessayer plus tard.';
          break;

        default:
          this.errorAlert =
            'Erreur : impossible de se connecter. Veuillez réessayer.';
      }
    });
  }

  // getErrorMsg(): string {
  //   let message = '';
  //   this.errorAlert = this.authService.errorMsg;
  //   if (this.errorAlert) {
  //     message = 'Erreur: vérifier votre email et motdepasse!';
  //     console.log('message:', message);
  //   }
  //   return message;
  // }
}
