import { Pipe, PipeTransform } from '@angular/core';
import { LanguageService } from './language.service';
import { Translatable } from './translatable.model';

@Pipe({
  name: 'translateField',
  standalone: true,
  pure: false, // to change translateField every shwitch language
})
export class TranslateFieldPipe implements PipeTransform {
  constructor(private languageService: LanguageService) {}

  transform(value: Translatable | null | undefined): string {
    if (!value) {
      return '';
    }

    const currentLanguage = this.languageService.currentLanguage;

    return value[currentLanguage] ?? value['fr'] ?? '';
  }
}
