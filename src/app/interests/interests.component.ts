import { Component, signal, OnInit } from '@angular/core';
import { Interest } from './interest.model';
import { InterestService } from './interest.service';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';
import { Subscription } from 'rxjs';
import { TranslatePipe } from '@ngx-translate/core';
import { TranslateFieldPipe } from '../shared/translate-field.pipe';

@Component({
  selector: 'app-interests',
  standalone: true,
  imports: [TranslateFieldPipe, TranslatePipe],
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.scss'],
})
export class InterestsComponent implements OnInit {
  pageName: string = 'PAGES.INTERESTS';
  interest: Interest;
  subscription: Subscription;
  isAdmin = signal(false);

  constructor(
    private interestService: InterestService,
    private authService: AuthService,
    private dataStorageService: DataStorageService,
  ) {}

  ngOnInit() {
    this.isAdmin.set(this.authService.isAuthenticated());
    this.onFetchInterestData();
    this.interest = this.interestService.getInterest();
    this.subscription = this.interestService.interestChanged.subscribe(
      (interest: Interest) => {
        this.interest = interest;
      },
    );
  }

  onFetchInterestData() {
    this.dataStorageService.getInterest();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
