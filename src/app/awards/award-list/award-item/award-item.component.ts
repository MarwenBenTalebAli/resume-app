import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Formation } from '../../formation.model';

import { TranslateFieldPipe } from '../../../shared/translate-field.pipe';

@Component({
  selector: 'app-award-item',
  standalone: true,
  imports: [RouterModule, TranslateFieldPipe],
  templateUrl: './award-item.component.html',
  styleUrls: ['./award-item.component.scss'],
})
export class AwardItemComponent {
  formation = input<Formation>();
  index = input<number>();
}
