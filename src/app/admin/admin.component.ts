import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  constructor(private authService: AuthService) {}

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  ngOnInit() {}
}
