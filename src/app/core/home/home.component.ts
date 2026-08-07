import { Component, OnInit } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  detail1: string = 'HOME_PAGE.DETAIL_1';
  detail2: string = 'HOME_PAGE.DETAIL_2';

  constructor() {}

  ngOnInit() {}
}
