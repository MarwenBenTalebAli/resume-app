import { Component, OnInit, OnDestroy, signal, inject } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user.model';
import { Subscription } from 'rxjs';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit, OnDestroy {
  user: User;
  subscription: Subscription;
  private userService = inject(UserService);
  private dataStorageService = inject(DataStorageService);
  constructor() {} // private dataStorageService: DataStorageService // private userService: UserService,
  ngOnInit() {
    this.onFetchUserData();
    this.user = this.userService.getUser();
    console.log('this.user', this.user);
    this.subscription = this.userService.userChanged.subscribe((user: User) => {
      this.user = user;
    });
  }

  onFetchUserData() {
    this.dataStorageService.getUser('email', 'marwen.bentaleb@gmail.com');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
