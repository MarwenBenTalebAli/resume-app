import { Component, OnInit, input } from '@angular/core';

import { RouterModule } from '@angular/router';

import { Institut } from '../../institut.model';

import { TranslateFieldPipe } from '../../../shared/translate-field.pipe';

import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-education-item',
  standalone: true,
  imports: [RouterModule, TranslateFieldPipe, NzIconModule],
  templateUrl: './education-item.component.html',
  styleUrls: ['./education-item.component.scss'],
})
export class EducationItemComponent implements OnInit {
  institut = input<Institut>();
  index = input<number>();

  constructor() {}

  ngOnInit() {}
}
