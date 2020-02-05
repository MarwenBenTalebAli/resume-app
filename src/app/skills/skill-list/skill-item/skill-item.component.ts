import { Component, OnInit, Input } from '@angular/core';
import { Competence } from '../../competence.model';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.scss']
})
export class SkillItemComponent implements OnInit {

  @Input() competence: Competence;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
