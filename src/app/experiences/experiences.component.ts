import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { ExperienceService } from './experience.service';
import { Experience } from './experience.model';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';
import { ExperienceListComponent } from './experience-list/experience-list.component';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { TranslatePipe } from '@ngx-translate/core';
import { TranslateFieldPipe } from '../shared/translate-field.pipe';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [
    ExperienceListComponent,
    NzTimelineModule,
    TranslateFieldPipe,
    TranslatePipe,
  ],
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss'],
})
export class ExperiencesComponent implements OnInit, OnDestroy {
  pageName: string = 'PAGES.EXPERIENCES';
  societyLabel: string = 'EXPERIENCES_PAGE.SOCIETY';
  addressLabel: string = 'EXPERIENCES_PAGE.ADDRESS';
  experienceLabel: string = 'EXPERIENCES_PAGE.EXPERIENCE';
  experiences: Experience[];
  subscription: Subscription;
  isAdmin = signal(false);
  hoveredExperience: number | null = null;

  constructor(
    private experienceService: ExperienceService,
    private authService: AuthService,
    private dataStorageService: DataStorageService,
  ) {}

  ngOnInit() {
    this.isAdmin.set(this.authService.isAuthenticated());
    this.onFetchExperiencesData();
    this.experiences = this.experienceService.getExperiences();
    console.log('this.experiences', this.experiences);
    this.subscription = this.experienceService.experiencesChanged.subscribe(
      (experiences: Experience[]) => {
        this.experiences = experiences;
      },
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
    let date2Copiy = date2;
    if (!date2 || date2 === 'Présent') {
      let today = new Date();
      const dd = String(today.getDate()).padStart(2, '0');
      const mm = String(today.getMonth() + 1).padStart(2, '0');
      const yyyy = today.getFullYear();
      date2Copiy = dd + '/' + mm + '/' + yyyy;
    }
    const newDate2Array = date2Copiy.split(separator);

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

  calcDateCalendar(date1: string, date2: string) {
    // --------------------------------
    // Get today's date when "Présent"
    // --------------------------------

    if (!date2 || date2 === 'Présent') {
      const today = new Date();

      const dd = String(today.getDate()).padStart(2, '0');
      const mm = String(today.getMonth() + 1).padStart(2, '0');
      const yyyy = today.getFullYear();

      date2 = `${dd}/${mm}/${yyyy}`;
    }

    // --------------------------------
    // Parse dates
    // Supports:
    // DD/MM/YYYY
    // DD-MM-YYYY
    // --------------------------------

    const parseDate = (date: string): Date | null => {
      const parts = date.includes('/') ? date.split('/') : date.split('-');

      if (parts.length !== 3) {
        return null;
      }

      const day = Number(parts[0]);
      const month = Number(parts[1]);
      const year = Number(parts[2]);

      if (
        !Number.isInteger(day) ||
        !Number.isInteger(month) ||
        !Number.isInteger(year) ||
        month < 1 ||
        month > 12 ||
        day < 1 ||
        day > new Date(year, month, 0).getDate()
      ) {
        return null;
      }

      return new Date(year, month - 1, day);
    };

    const startDate = parseDate(date1);
    const endDate = parseDate(date2);

    if (!startDate || !endDate) {
      return null;
    }

    // Make sure the dates are in chronological order
    let start = startDate;
    let end = endDate;

    if (start > end) {
      [start, end] = [end, start];
    }

    // --------------------------------
    // Calculate years
    // --------------------------------

    let years = end.getFullYear() - start.getFullYear();

    let tempDate = new Date(start);

    tempDate.setFullYear(tempDate.getFullYear() + years);

    if (tempDate > end) {
      years--;
      tempDate = new Date(start);
      tempDate.setFullYear(tempDate.getFullYear() + years);
    }

    // --------------------------------
    // Calculate months
    // --------------------------------

    let months = 0;

    while (true) {
      const nextDate = new Date(tempDate);

      nextDate.setMonth(nextDate.getMonth() + 1);

      /*
       * JavaScript can overflow dates.
       *
       * Example:
       * January 31 + 1 month
       * can become March 3.
       *
       * We therefore clamp the day to the
       * last valid day of the target month.
       */

      const targetYear = nextDate.getFullYear();
      const targetMonth = nextDate.getMonth();

      const lastDayOfTargetMonth = new Date(
        targetYear,
        targetMonth + 1,
        0,
      ).getDate();

      const targetDay = Math.min(tempDate.getDate(), lastDayOfTargetMonth);

      const clampedDate = new Date(targetYear, targetMonth, targetDay);

      if (clampedDate > end) {
        break;
      }

      tempDate = clampedDate;
      months++;
    }

    // --------------------------------
    // End-of-month rule
    // --------------------------------
    //
    // If the end date is the last day
    // of its month, consider that month
    // completed.
    //
    // Example:
    // 01/06/2021 -> 28/02/2026
    //
    // => 4 years 9 months
    //

    const lastDayOfEndMonth = new Date(
      end.getFullYear(),
      end.getMonth() + 1,
      0,
    ).getDate();

    const isEndOfMonth = end.getDate() === lastDayOfEndMonth;

    if (isEndOfMonth && months < 11 && tempDate.getTime() !== end.getTime()) {
      months++;

      if (months === 12) {
        years++;
        months = 0;
      }
    }

    // --------------------------------
    // Remaining days
    // --------------------------------

    let days = 0;

    if (!isEndOfMonth) {
      const millisecondsPerDay = 24 * 60 * 60 * 1000;

      days = Math.floor(
        (end.getTime() - tempDate.getTime()) / millisecondsPerDay,
      );
    }

    // --------------------------------
    // Text
    // --------------------------------

    const resultParts: string[] = [];

    if (years === 1) {
      resultParts.push('1 year');
    } else if (years > 1) {
      resultParts.push(`${years} years`);
    }

    if (months === 1) {
      resultParts.push('1 month');
    } else if (months > 1) {
      resultParts.push(`${months} months`);
    }

    if (days === 1) {
      resultParts.push('1 day');
    } else if (days > 1) {
      resultParts.push(`${days} days`);
    }

    const result = resultParts.join(' ');

    // --------------------------------
    // Total days
    // --------------------------------

    const millisecondsPerDay = 24 * 60 * 60 * 1000;

    const totalDays = Math.round(
      Math.abs(end.getTime() - start.getTime()) / millisecondsPerDay,
    );

    const totalWeeks = totalDays / 7;
    const totalHours = totalDays * 24;
    const totalMinutes = totalHours * 60;
    const totalSeconds = totalMinutes * 60;

    // --------------------------------
    // Return
    // --------------------------------

    return {
      total_days: totalDays,
      total_weeks: Math.round(totalWeeks),
      total_hours: totalHours,
      total_minutes: totalMinutes,
      total_seconds: totalSeconds,
      result: result || '0 days',
    };
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
