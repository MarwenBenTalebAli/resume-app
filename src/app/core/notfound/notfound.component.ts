import { Component, OnInit } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-notfound',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss'],
})
export class NotfoundComponent implements OnInit {
  notFoundLabel: string = 'NOT_FOUND_PAGE.NOT_FOUND_LABEL';

  constructor() {}

  ngOnInit() {}
}
