import { Component, OnInit, input } from '@angular/core';
import { Formation } from '../../formation.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-award-item',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './award-item.component.html',
  styleUrls: ['./award-item.component.scss'],
})
export class AwardItemComponent implements OnInit {
  formation = input<Formation>();
  index = input<number>();

  constructor() {}

  ngOnInit() {}
}
