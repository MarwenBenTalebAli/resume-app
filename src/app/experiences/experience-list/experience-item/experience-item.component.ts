import { Component, OnInit, Input } from '@angular/core';
import { Experience } from 'src/app/experiences/experience.model';

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.scss']
})
export class ExperienceItemComponent implements OnInit {

  @Input() experience: Experience;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
