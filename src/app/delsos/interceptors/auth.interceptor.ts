import { Injectable, Inject, Optional } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { consoleTestResultHandler } from 'tslint/lib/test';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor( ) { }

  intercept(req: HttpRequest<unknown>, next: HttpHandler) : Observable<HttpEvent<unknown>>{
    const token = localStorage.getItem('adminToken');
    console.log('i am being intercepted');
    console.log(token);
      req = req.clone({
        url:  req.url,
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    console.log(req);
    return next.handle(req);
  }
}


export const AuthentificationInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true,
}
