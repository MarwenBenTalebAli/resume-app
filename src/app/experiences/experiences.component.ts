import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ExperienceService } from './experience.service';
import { Experience } from './experience.model';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit, OnDestroy {

  experiences: Experience[];
  subscription: Subscription;
  @Input() isAdmin = false;

  constructor(private experienceService: ExperienceService, private authService: AuthService) { }

  ngOnInit() {
    this.isAdmin = this.authService.isAuthenticated();
    this.experiences = this.experienceService.getExperiences();
    this.subscription = this.experienceService.experiencesChanged.subscribe(
      (experiences: Experience[]) => {
        this.experiences = experiences;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
