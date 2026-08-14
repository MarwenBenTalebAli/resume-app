import { Component, OnInit, OnDestroy } from '@angular/core';
import { Experience } from '../experience.model';
import { ExperienceService } from '../experience.service';
import { DataStorageService } from '../../shared/data-storage.service';
import { Router, ActivatedRoute, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { ExperienceItemComponent } from './experience-item/experience-item.component';
import { TranslatePipe } from '@ngx-translate/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-experience-list',
  standalone: true,
  imports: [
    NzButtonModule,
    NzIconModule,
    RouterOutlet,
    ExperienceItemComponent,
    TranslatePipe,
  ],
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.scss'],
})
export class ExperienceListComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  experiences: Experience[];

  newExperienceButtonLabel: string = 'ADMIN_EXPERIENCES_BUTTONS.NEW_EXPERIENCE';
  saveDataButtonLabel: string = 'ADMIN_EXPERIENCES_BUTTONS.SAVE_DATA';
  fetchDataButtonLabel: string = 'ADMIN_EXPERIENCES_BUTTONS.FETCH_DATA';
  headerTitle: string = 'ADMIN_EXPERIENCES_HEADER.HEADER_TITLE';
  headerSubtitle: string = 'ADMIN_EXPERIENCES_HEADER.HEADER_SUBTITLE';
  listTitle: string = 'ADMIN_EXPERIENCE_DETAIL.LIST_TITLE';
  detailsTitle: string = 'ADMIN_EXPERIENCE_DETAIL.DETAILS_TITLE';

  constructor(
    private experienceService: ExperienceService,
    private dataStorageService: DataStorageService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.subscription = this.experienceService.experiencesChanged.subscribe(
      (experiences: Experience[]) => {
        this.experiences = experiences;
      },
    );
    this.experiences = this.experienceService.getExperiences();
  }

  onNewExperience() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onSaveExperiencesData() {
    this.dataStorageService.storeExperiences().subscribe((response) => {
      console.log(response);
    });
  }

  onFetchExperiencesData() {
    console.log('onFetchExperiencesData');
    this.dataStorageService.getExperiences();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
