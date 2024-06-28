import {
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpHandlerFn,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/do';
import { tap } from 'rxjs/operators';

export class LoggingInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // old
    // return next.handle(req).do((event) => {
    //   console.log('Logging interceptor', event);
    // });

    // new
    return next.handle(req).pipe(
      tap(
        (event) => this.handleResponse(req, event),
        (error) => this.handleError(req, error)
      )
    );
  }

  handleResponse(req: HttpRequest<any>, event: HttpEvent<any>) {
    console.log('Handling response for ', req.url, event);
    if (event instanceof HttpResponse) {
      console.log(
        'Request for ',
        req.url,
        ' Response Status ',
        event.status,
        ' With body ',
        event.body
      );
    }
  }

  handleError(req: HttpRequest<any>, event: { status: any; error: any }) {
    console.error(
      'Request for ',
      req.url,
      ' Response Status ',
      event.status,
      ' With error ',
      event.error
    );
  }
}

export function loggingInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  return next(req).pipe(
    tap((event) => {
      if (event.type === HttpEventType.Response) {
        console.log(req.url, 'returned a response with status', event.status);
      }
    })
  );
}
