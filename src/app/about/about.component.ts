import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user.model';
import { Subscription } from 'rxjs/Subscription';
import { DataStorageService } from '../shared/data-storage.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {
  user: User;
  subscription: Subscription;
  constructor(private userService: UserService, private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.onFetchUserData();
    this.user = this.userService.getUser();
    this.subscription = this.userService.userChanged.subscribe(
      (user: User) => {
        this.user = user;
      }
    );
  }

  onFetchUserData() {
    this.dataStorageService.getUser('email', 'marwen.bentaleb@gmail.com');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
