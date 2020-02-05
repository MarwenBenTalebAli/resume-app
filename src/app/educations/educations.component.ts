import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Institut } from './institut.model';
import { EducationService } from './education.service';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-educations',
  templateUrl: './educations.component.html',
  styleUrls: ['./educations.component.scss']
})
export class EducationsComponent implements OnInit, OnDestroy {

  instituts: Institut[];
  subscription: Subscription;
  @Input() isAdmin: boolean;

  constructor(private educationService: EducationService, private authService: AuthService) { }

  ngOnInit() {
    this.isAdmin = this.authService.isAuthenticated();
    this.instituts = this.educationService.getInstituts();
    this.subscription = this.educationService.institutsChanged.subscribe(
      (instituts: Institut[]) => {
        this.instituts = instituts;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}


