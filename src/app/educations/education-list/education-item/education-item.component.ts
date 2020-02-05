import { Component, OnInit, Input } from '@angular/core';
import { Institut } from '../../institut.model';

@Component({
  selector: 'app-education-item',
  templateUrl: './education-item.component.html',
  styleUrls: ['./education-item.component.scss']
})
export class EducationItemComponent implements OnInit {

  @Input() institut: Institut;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
