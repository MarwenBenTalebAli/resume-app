import { Component, OnInit } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-skill-start',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './skill-start.component.html',
  styleUrls: ['./skill-start.component.scss'],
})
export class SkillStartComponent implements OnInit {
  selectSkillText = 'ADMIN_SKILLS_START_COMPONENT.SELECT_SKILL_TEXT';

  constructor() {}

  ngOnInit() {}
}
