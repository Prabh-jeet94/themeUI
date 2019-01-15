import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
  private readonly headers: HttpHeaders;
  constructor(private toast: ToastrService) {
    this.headers = new HttpHeaders({'Access-Control-Allow-Origin': '*'});
   }

   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const
        contentTypeHeader = !req.body  ? {} : {'Content-Type': 'application/json'},

        request = req.clone({
            headers: this.headers,
            setHeaders: {
                ...contentTypeHeader
            }
        });
    return next.handle(request);
}
}
