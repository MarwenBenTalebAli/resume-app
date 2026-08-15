import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  Router,
  ActivatedRoute,
  RouterOutlet,
  NavigationEnd,
} from '@angular/router';
import { Subscription, filter } from 'rxjs';

import { Experience } from '../experience.model';
import { ExperienceService } from '../experience.service';
import { DataStorageService } from '../../shared/data-storage.service';
import { ExperienceItemComponent } from './experience-item/experience-item.component';

import { TranslatePipe } from '@ngx-translate/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { TranslateFieldPipe } from '../../shared/translate-field.pipe';

@Component({
  selector: 'app-experience-list',
  standalone: true,
  imports: [
    NzButtonModule,
    NzIconModule,
    RouterOutlet,
    ExperienceItemComponent,
    TranslatePipe,
    TranslateFieldPipe,
  ],
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.scss'],
})
export class ExperienceListComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  routerSubscription: Subscription;

  experiences: Experience[] = [];

  selectedExperience: Experience | null = null;

  newExperienceButtonLabel = 'ADMIN_EXPERIENCES_BUTTONS.NEW_EXPERIENCE';

  saveDataButtonLabel = 'ADMIN_EXPERIENCES_BUTTONS.SAVE_DATA';

  fetchDataButtonLabel = 'ADMIN_EXPERIENCES_BUTTONS.FETCH_DATA';

  headerTitle = 'ADMIN_EXPERIENCES_HEADER.HEADER_TITLE';

  headerSubtitle = 'ADMIN_EXPERIENCES_HEADER.HEADER_SUBTITLE';

  listTitle = 'ADMIN_EXPERIENCE_DETAIL.LIST_TITLE';

  detailsTitle = 'ADMIN_EXPERIENCE_DETAIL.DETAILS_TITLE';

  constructor(
    private experienceService: ExperienceService,
    private dataStorageService: DataStorageService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    /*
     * Experiences
     */
    this.subscription = this.experienceService.experiencesChanged.subscribe(
      (experiences: Experience[]) => {
        this.experiences = experiences;

        this.updateSelectedExperience();
      },
    );

    this.experiences = this.experienceService.getExperiences();

    /*
     * Watch route changes
     *
     * When the user selects another experience,
     * the URL changes from /0 to /1, /2, etc.
     */
    this.routerSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateSelectedExperience();
      });

    /*
     * Initial selected experience
     */
    this.updateSelectedExperience();
  }

  private updateSelectedExperience(): void {
    /*
     * Example URLs:
     *
     * /admin/experiences/0
     * /admin/experiences/1
     * /admin/experiences/2
     *
     * The last number represents the experience index.
     */

    const match = this.router.url.match(/\/(\d+)$/);

    if (!match) {
      this.selectedExperience = null;

      return;
    }

    const index = Number(match[1]);

    if (Number.isNaN(index) || index < 0 || index >= this.experiences.length) {
      this.selectedExperience = null;

      return;
    }

    this.selectedExperience = this.experiences[index] ?? null;
  }

  onNewExperience(): void {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onSaveExperiencesData(): void {
    this.dataStorageService.storeExperiences().subscribe((response) => {
      console.log(response);
    });
  }

  onFetchExperiencesData(): void {
    console.log('onFetchExperiencesData');

    this.dataStorageService.getExperiences();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();

    this.routerSubscription?.unsubscribe();
  }
}
