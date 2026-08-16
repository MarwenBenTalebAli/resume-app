import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-award-start',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './award-start.component.html',
  styleUrls: ['./award-start.component.scss'],
})
export class AwardStartComponent {
  pageName = 'ADMIN_AWARDS_START_COMPONENT.SELECT_AWARD_TEXT';
}
