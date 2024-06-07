import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ExperienceService } from './experience.service';
import { Experience } from './experience.model';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit, OnDestroy {

  experiences: Experience[];
  subscription: Subscription;
  @Input() isAdmin = false;

  constructor(private experienceService: ExperienceService, private authService: AuthService, private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.isAdmin = this.authService.isAuthenticated();
    this.onFetchExperiencesData();
    this.experiences = this.experienceService.getExperiences();
    console.log('this.experiences', this.experiences);
    this.subscription = this.experienceService.experiencesChanged.subscribe(
      (experiences: Experience[]) => {
        this.experiences = experiences;
      }
    );
  }

  onFetchExperiencesData() {
    console.log('onFetchExperiencesData1234');
    this.dataStorageService.getExperiences();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
