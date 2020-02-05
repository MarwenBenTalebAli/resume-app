import { Component, OnInit, Input } from '@angular/core';
import { Formation } from '../../formation.model';

@Component({
  selector: 'app-award-item',
  templateUrl: './award-item.component.html',
  styleUrls: ['./award-item.component.scss']
})
export class AwardItemComponent implements OnInit {

  @Input() formation: Formation;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
