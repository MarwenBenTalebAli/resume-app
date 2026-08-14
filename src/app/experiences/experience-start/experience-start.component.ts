import { Component, OnInit } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-experience-start',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './experience-start.component.html',
  styleUrls: ['./experience-start.component.scss'],
})
export class ExperienceStartComponent implements OnInit {
  selectExperienceText: string =
    'ADMIN_EXPERIENCES_START_COMPONENT.SELECT_EXPERIENCE_TEXT';

  constructor() {}

  ngOnInit() {}
}
