import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export type Language = 'fr' | 'en';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor(private translateService: TranslateService) {}

  get currentLanguage(): Language {
    return (this.translateService.currentLang() as Language) || 'fr';
  }

  changeLanguage(language: Language) {
    this.translateService.use(language);
    localStorage.setItem('language', language);
  }
}
