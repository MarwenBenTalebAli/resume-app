import { Component, Input, OnInit } from '@angular/core';
import { Interest } from './interest.model';
import { InterestService } from './interest.service';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.scss']
})
export class InterestsComponent implements OnInit {
  interest: Interest;
  subscription: Subscription;
  @Input() isAdmin = false;

  constructor(private interestService: InterestService, private authService: AuthService, private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.isAdmin = this.authService.isAuthenticated();
    this.onFetchInterestData();
    this.interest = this.interestService.getInterest();
    this.subscription = this.interestService.interestChanged.subscribe(
      (interest: Interest) => {
        this.interest = interest;
      }
    );
  }

  onFetchInterestData() {
    this.dataStorageService.getInterest();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
