import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  let cookieServ = inject(CookieService);

  if (cookieServ.get('jwt')){
    let cloned = req.clone({
      setHeaders : {
        Authorization : `Bearer ${cookieServ.get('jwt')}`
      }
    })
    return next(cloned);
  }
  return next(req);

};
