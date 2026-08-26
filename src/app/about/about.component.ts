import { Component, OnInit, OnDestroy, signal, inject } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user.model';
import { Subscription } from 'rxjs';
import { DataStorageService } from '../shared/data-storage.service';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { TranslateFieldPipe } from '../shared/translate-field.pipe';
import { TranslatePipe } from '@ngx-translate/core';
import { Analytics, logEvent } from '@angular/fire/analytics';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NzIconDirective, NzButtonModule, TranslateFieldPipe, TranslatePipe],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit, OnDestroy {
  cvBtnLabel: string = 'BUTTONS.CV';
  user: User;
  subscription: Subscription;
  private userService = inject(UserService);
  private dataStorageService = inject(DataStorageService);
  private analytics = inject(Analytics);
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

  trackCvClick(): void {
    logEvent(this.analytics, 'cv_button_click');
  }

  trackLinkedInClick(): void {
    logEvent(this.analytics, 'linkedin_button_click');
  }

  trackGitHubClick(): void {
    logEvent(this.analytics, 'github_button_click');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
