import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { Institut } from './institut.model';
import { EducationService } from './education.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';
import { EducationListComponent } from './education-list/education-list.component';
import { TranslatePipe } from '@ngx-translate/core';
import { TranslateFieldPipe } from '../shared/translate-field.pipe';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-educations',
  standalone: true,
  imports: [
    EducationListComponent,
    TranslateFieldPipe,
    TranslatePipe,
    NzIconModule,
  ],
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
}
