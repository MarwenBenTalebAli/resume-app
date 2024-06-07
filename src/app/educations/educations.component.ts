import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Institut } from './institut.model';
import { EducationService } from './education.service';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-educations',
  templateUrl: './educations.component.html',
  styleUrls: ['./educations.component.scss']
})
export class EducationsComponent implements OnInit, OnDestroy {

  instituts: Institut[];
  subscription: Subscription;
  @Input() isAdmin: boolean;

  constructor(private educationService: EducationService, private authService: AuthService, private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.isAdmin = this.authService.isAuthenticated();
    this.onFetchEducationsData();
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

  onFetchEducationsData() {
    console.log('onFetchEducationsData1234');
    this.dataStorageService.getEducations();
  }
}


