import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';

// ngx-translate
import { provideTranslateService, TranslateLoader } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';

import { provideRouter } from '@angular/router';
import {
  // HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptors,
  // withInterceptorsFromDi,
} from '@angular/common/http';

import { routes } from './app.routes';
import { provideFirebaseApp, initializeApp, getApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { provideAnalytics, getAnalytics } from '@angular/fire/analytics';
import {
  // AuthInterceptor,
  authInterceptor,
} from './shared/auth.interceptor';
import {
  // LoggingInterceptor,
  loggingInterceptor,
} from './shared/logging.interceptor';
import { provideNzIcons } from './icons-provider';
import { en_US, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

registerLocaleData(en);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    provideAnalytics(() => getAnalytics()),
    provideRouter(routes),
    provideHttpClient(
      // withInterceptorsFromDi()
      withInterceptors([loggingInterceptor, authInterceptor]),
    ),
    provideNzIcons(),
    provideNzI18n(en_US),
    provideTranslateService({
      loader: provideTranslateHttpLoader({
        prefix: './assets/i18n/',
        suffix: '.json',
      }),
      fallbackLang: 'fr',
      lang: localStorage.getItem('language') || 'fr',
    }),
    importProvidersFrom(FormsModule),
    provideAnimationsAsync(),
    // provideHttpClient(),
    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: LoggingInterceptor,
    //   multi: true,
    // },
  ],
};
