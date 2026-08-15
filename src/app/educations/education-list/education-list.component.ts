import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';

import { Institut } from '../institut.model';
import { EducationService } from '../education.service';
import { DataStorageService } from '../../shared/data-storage.service';

import { EducationItemComponent } from './education-item/education-item.component';

import { TranslatePipe } from '@ngx-translate/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-education-list',
  standalone: true,
  imports: [
    NzButtonModule,
    NzIconModule,
    RouterOutlet,
    EducationItemComponent,
    TranslatePipe,
  ],
  templateUrl: './education-list.component.html',
  styleUrls: ['./education-list.component.scss'],
})
export class EducationListComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  instituts: Institut[];

  newEducationButtonLabel = 'ADMIN_EDUCATIONS_BUTTONS.NEW_EDUCATION';

  saveDataButtonLabel = 'ADMIN_EDUCATIONS_BUTTONS.SAVE_DATA';

  fetchDataButtonLabel = 'ADMIN_EDUCATIONS_BUTTONS.FETCH_DATA';

  headerTitle = 'ADMIN_EDUCATIONS_HEADER.HEADER_TITLE';

  headerSubtitle = 'ADMIN_EDUCATIONS_HEADER.HEADER_SUBTITLE';

  listTitle = 'ADMIN_EDUCATION_DETAIL.LIST_TITLE';

  detailsTitle = 'ADMIN_EDUCATION_DETAIL.DETAILS_TITLE';

  constructor(
    private educationService: EducationService,
    private dataStorageService: DataStorageService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.subscription = this.educationService.institutsChanged.subscribe(
      (instituts: Institut[]) => {
        this.instituts = instituts;
      },
    );

    this.instituts = this.educationService.getInstituts();
  }

  onNewEducation() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onSaveEducationsData() {
    this.dataStorageService.storeEducations().subscribe((response) => {
      console.log(response);
    });
  }

  onFetchEducationsData() {
    this.dataStorageService.getEducations();
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
