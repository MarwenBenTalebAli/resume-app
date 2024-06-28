import { Component, OnInit, input } from '@angular/core';
import { Institut } from '../../institut.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-education-item',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './education-item.component.html',
  styleUrls: ['./education-item.component.scss'],
})
export class EducationItemComponent implements OnInit {
  institut = input<Institut>();
  index = input<number>();

  constructor() {}

  ngOnInit() {}
}
