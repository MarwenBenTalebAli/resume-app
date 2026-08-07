import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidenavComponent } from './core/sidenav/sidenav.component';
import {
  NzContentComponent,
  NzFooterComponent,
  NzHeaderComponent,
  NzLayoutComponent,
} from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './shared/language.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    SidenavComponent,
    NzContentComponent,
    NzLayoutComponent,
    NzHeaderComponent,
    NzIconModule,
    NzFooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isCollapsed = false;
  // currentLanguage: 'fr' | 'en' = 'fr';

  constructor(
    private translate: TranslateService,
    public languageService: LanguageService,
  ) {}

  changeLanguage(lang: 'fr' | 'en') {
    // this.currentLanguage = lang;
    // this.translate.use(lang);
    // localStorage.setItem('lang', lang);
    this.languageService.changeLanguage(lang);
  }

  get currentLanguage() {
    return this.languageService.currentLanguage;
  }
}
