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
    this.authService.signinUser(email, password);
  }

  getErrorMsg(): string {
    let message = '';
    this.errorAlert = this.authService.errorMsg;
    if (this.errorAlert) {
      message = 'Erreur: vérifier votre email et motdepasse!';
    }
    return message;
  }
}
