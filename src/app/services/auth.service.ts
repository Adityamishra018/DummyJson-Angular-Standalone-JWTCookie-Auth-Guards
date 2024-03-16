import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { take } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn : 'root'
})
export class AuthService implements OnDestroy {
  private token = ''
  isProcessing = false

  constructor(private http : HttpClient, private cookieServ : CookieService) { 
    if (cookieServ.get('jwt')){
      this.token = cookieServ.get('jwt')
    }
  }

  isAuthenticated(){
    return this.token !== ''
  }

  login(creds : {username : string, password : string}){
    this.isProcessing = true;
    this.http.post<any>(`${environment.AUTHURL}/auth/login`,creds)
    .pipe(take(1))
    .subscribe({
      next : res => {
        this.token = res.token;
        this.cookieServ.set('jwt',this.token,{sameSite : 'Strict',path :'/',secure : true})
        this.isProcessing = false;
      },
      error : err => {console.log(err);this.isProcessing = false;}
    })
  }

  logout(){
    this.cookieServ.delete('jwt')
    this.token = ''
  }

  ngOnDestroy(): void {
    console.log('auth service destroyed')
  }
}
