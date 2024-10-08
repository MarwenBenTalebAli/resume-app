import { Component, OnInit, OnDestroy } from '@angular/core';
import { Experience } from '../experience.model';
import { ExperienceService } from '../experience.service';
import { DataStorageService } from '../../shared/data-storage.service';
import { Router, ActivatedRoute, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { ExperienceItemComponent } from './experience-item/experience-item.component';

@Component({
  selector: 'app-experience-list',
  standalone: true,
  imports: [RouterOutlet, ExperienceItemComponent],
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.scss'],
})
export class ExperienceListComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  experiences: Experience[];

  constructor(
    private experienceService: ExperienceService,
    private dataStorageService: DataStorageService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subscription = this.experienceService.experiencesChanged.subscribe(
      (experiences: Experience[]) => {
        this.experiences = experiences;
      }
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
