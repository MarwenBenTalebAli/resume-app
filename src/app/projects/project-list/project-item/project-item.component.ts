import { Component, OnInit, input } from '@angular/core';
import { Project } from '../../project.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-project-item',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
})
export class ProjectItemComponent implements OnInit {
  project = input<Project>();
  index = input<number>();

  constructor() {}

  ngOnInit() {}
}
