import { Component, OnInit, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Experience } from '../../experience.model';

@Component({
  selector: 'app-experience-item',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.scss'],
})
export class ExperienceItemComponent implements OnInit {
  experience = input<Experience>();
  index = input<number>();

  constructor() {}

  ngOnInit() {}
}
