import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { Competence } from '../../competence.model';
import { TranslateFieldPipe } from '../../../shared/translate-field.pipe';

@Component({
  selector: 'app-skill-item',
  standalone: true,
  imports: [RouterModule, NzIconModule, TranslateFieldPipe],
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.scss'],
})
export class SkillItemComponent {
  competence = input<Competence>();
  index = input<number>();
}
