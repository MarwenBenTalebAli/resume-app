import { Component, OnInit, OnDestroy } from '@angular/core';
import { Experience } from '../experience.model';
import { ExperienceService } from '../experience.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.scss']
})
export class ExperienceListComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  experiences: Experience[];

  constructor(
    private experienceService: ExperienceService,
    private dataStorageService: DataStorageService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

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
    this.dataStorageService.storeExperiences()
      .subscribe(
        (response) => {
          console.log(response);
        }
      );
  }

  onFetchExperiencesData() {
    this.dataStorageService.getExperiences();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
