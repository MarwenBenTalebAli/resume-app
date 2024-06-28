import { Component, OnInit, input } from '@angular/core';
import { Competence } from '../../competence.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-skill-item',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.scss'],
})
export class SkillItemComponent implements OnInit {
  competence = input<Competence>();
  index = input<number>();

  constructor() {}

  ngOnInit() {}
}
