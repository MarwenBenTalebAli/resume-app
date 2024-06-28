import {
  HttpEvent,
  // HttpEventType,
  HttpHandler,
  HttpHandlerFn,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
// import { tap } from 'rxjs/operators';
import { Injectable, inject } from '@angular/core';

import { AuthService } from '../auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  urlsToNotUse: Array<{ method: string; url: string }>;
  constructor(private authService: AuthService) {
    this.urlsToNotUse = [
      { method: 'GET', url: 'experiences.json' },
      { method: 'GET', url: 'projets.json' },
      { method: 'GET', url: 'educations.json' },
      { method: 'GET', url: 'formations.json' },
      { method: 'GET', url: 'users.json' },
      { method: 'GET', url: 'interest.json' },
      { method: 'GET', url: 'competences.json' },
    ];
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('Intercepted!', req);
    if (!this.isValidRequestForInterceptor(req.url, req.method)) {
      let modifiedRequest = req.clone({
        setHeaders: {
          //DO WORK HERE
        },
      });
      return next.handle(modifiedRequest);
    }
    // const copiedReq = req.clone({headers: req.headers.set('', '')});
    const copiedReq = req.clone({
      params: req.params.set('auth', this.authService.getToken()),
    });
    return next.handle(copiedReq);
    // return null;
  }

  private isValidRequestForInterceptor(
    requestUrl: string,
    requestMethod: string
  ): boolean {
    let positionIndicator: string = 'resume-profile.firebaseio.com/';
    let position = requestUrl.indexOf(positionIndicator);

    if (position > 0) {
      let destination: string = requestUrl.substring(
        position + positionIndicator.length
      );
      for (let address of this.urlsToNotUse) {
        if (
          new RegExp(address.url).test(destination) &&
          address.method === 'GET'
        ) {
          return false;
        }
      }
    }
    return true;
  }
}

export function authInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  const authService = inject(AuthService);

  const urlsToNotUse: Array<{ method: string; url: string }> = [
    { method: 'GET', url: 'experiences.json' },
    { method: 'GET', url: 'projets.json' },
    { method: 'GET', url: 'educations.json' },
    { method: 'GET', url: 'formations.json' },
    { method: 'GET', url: 'users.json' },
    { method: 'GET', url: 'interest.json' },
    { method: 'GET', url: 'competences.json' },
  ];

  console.log('Intercepted!', req);
  if (!isValidRequestForInterceptor(req.url, req.method, urlsToNotUse)) {
    let modifiedRequest = req.clone({
      setHeaders: {
        //DO WORK HERE
      },
    });
    return next(modifiedRequest);
  }
  // const copiedReq = req.clone({headers: req.headers.set('', '')});
  const copiedReq = req.clone({
    params: req.params.set('auth', authService.getToken()),
  });
  return next(copiedReq);

  function isValidRequestForInterceptor(
    requestUrl: string,
    requestMethod: string,
    urlsToNotUse: Array<{ method: string; url: string }>
  ): boolean {
    let positionIndicator: string = 'resume-profile.firebaseio.com/';
    let position = requestUrl.indexOf(positionIndicator);

    if (position > 0) {
      let destination: string = requestUrl.substring(
        position + positionIndicator.length
      );
      for (let address of urlsToNotUse) {
        if (
          new RegExp(address.url).test(destination) &&
          address.method === 'GET'
        ) {
          return false;
        }
      }
    }
    return true;
  }
}
