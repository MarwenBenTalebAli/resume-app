import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { ExperienceService } from './experience.service';
import { Experience } from './experience.model';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';
import { ExperienceListComponent } from './experience-list/experience-list.component';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [ExperienceListComponent, NzTimelineModule],
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss'],
})
export class ExperiencesComponent implements OnInit, OnDestroy {
  experiences: Experience[];
  subscription: Subscription;
  isAdmin = signal(false);

  constructor(
    private experienceService: ExperienceService,
    private authService: AuthService,
    private dataStorageService: DataStorageService
  ) {}

  ngOnInit() {
    this.isAdmin.set(this.authService.isAuthenticated());
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

  calcDate(date1: string, date2: string) {
    let separator = '-';
    const array0 = date1.split('-');
    const array1 = date1.split('/');
    if (array0 && array0.length === 3) {
      separator = '-';
    }

    if (array1 && array1.length === 3) {
      separator = '/';
    }

    console.log('separator', separator);

    const newDate1Array = date1.split(separator);
    const newDate2Array = date2.split(separator);

    let newDate1 = '';
    let newDate2 = '';
    if (
      newDate1Array &&
      newDate1Array.length === 3 &&
      newDate2Array &&
      newDate2Array.length === 3
    ) {
      newDate1 =
        newDate1Array[1] +
        separator +
        newDate1Array[0] +
        separator +
        newDate1Array[2];
      newDate2 =
        newDate2Array[1] +
        separator +
        newDate2Array[0] +
        separator +
        newDate2Array[2];
    }

    /*
     * calcDate() : Calculates the difference between two dates
     * @date1 : "First Date in the format MM-DD-YYYY"
     * @date2 : "Second Date in the format MM-DD-YYYY"
     * return : Array
     */

    if (newDate1 && newDate2) {
      //new date instance
      const dt_date1 = new Date(newDate1);
      const dt_date2 = new Date(newDate2);

      //Get the Timestamp
      const date1_time_stamp = dt_date1.getTime();
      const date2_time_stamp = dt_date2.getTime();

      let calc;

      //Check which timestamp is greater
      if (date1_time_stamp > date2_time_stamp) {
        calc = new Date(date1_time_stamp - date2_time_stamp);
      } else {
        calc = new Date(date2_time_stamp - date1_time_stamp);
      }
      //Retrieve the date, month and year
      const calcFormatTmp =
        calc.getDate() +
        separator +
        (calc.getMonth() + 1) +
        separator +
        calc.getFullYear();
      //Convert to an array and store
      const calcFormat = calcFormatTmp.split(separator);
      //Subtract each member of our array from the default date
      const days_passed = Number(Math.abs(+calcFormat[0]) - 1);
      const months_passed = Number(Math.abs(+calcFormat[1]) - 1);
      const years_passed = Number(Math.abs(+calcFormat[2]) - 1970);

      //Set up custom text
      const yrsTxt = ['year', 'years'];
      const mnthsTxt = ['month', 'months'];
      const daysTxt = ['day', 'days'];

      //Convert to days and sum together
      const total_days =
        years_passed * 365 + months_passed * 30.417 + days_passed;
      const total_secs = total_days * 24 * 60 * 60;
      const total_mins = total_days * 24 * 60;
      const total_hours = total_days * 24;
      const total_weeks = total_days >= 7 ? total_days / 7 : 0;

      //display result with custom text
      const result =
        (years_passed == 1
          ? years_passed + ' ' + yrsTxt[0] + ' '
          : years_passed > 1
          ? years_passed + ' ' + yrsTxt[1] + ' '
          : '') +
        (months_passed == 1
          ? months_passed + ' ' + mnthsTxt[0]
          : months_passed > 1
          ? months_passed + ' ' + mnthsTxt[1] + ' '
          : '') +
        (days_passed == 1
          ? days_passed + ' ' + daysTxt[0]
          : days_passed > 1
          ? days_passed + ' ' + daysTxt[1]
          : '');

      //return the result
      return {
        total_days: Math.round(total_days),
        total_weeks: Math.round(total_weeks),
        total_hours: Math.round(total_hours),
        total_minutes: Math.round(total_mins),
        total_seconds: Math.round(total_secs),
        result: result.trim(),
      };
    }
    return null;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
