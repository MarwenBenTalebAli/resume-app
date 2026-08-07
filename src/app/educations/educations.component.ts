import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { Institut } from './institut.model';
import { EducationService } from './education.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';
import { EducationListComponent } from './education-list/education-list.component';
import { TranslatePipe } from '@ngx-translate/core';
import { TranslateFieldPipe } from '../shared/translate-field.pipe';

@Component({
  selector: 'app-educations',
  standalone: true,
  imports: [EducationListComponent, TranslateFieldPipe, TranslatePipe],
  templateUrl: './educations.component.html',
  styleUrls: ['./educations.component.scss'],
})
export class EducationsComponent implements OnInit, OnDestroy {
  pageName: string = 'PAGES.EDUCATIONS';
  instituts: Institut[];
  subscription: Subscription;
  isAdmin = signal(false);

  constructor(
    private educationService: EducationService,
    private authService: AuthService,
    private dataStorageService: DataStorageService,
  ) {}

  ngOnInit() {
    this.isAdmin.set(this.authService.isAuthenticated());
    this.onFetchEducationsData();
    this.instituts = this.educationService.getInstituts();
    this.subscription = this.educationService.institutsChanged.subscribe(
      (instituts: Institut[]) => {
        this.instituts = instituts;
      },
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
