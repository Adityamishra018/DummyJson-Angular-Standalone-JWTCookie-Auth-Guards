import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DummyService {

  constructor(private http : HttpClient) {
  }
  getUsers(){
    return this.http.get(`${environment.AUTHURL}/users?limit=2`)
  }

  getPosts(){
    return this.http.get(`${environment.AUTHURL}/posts?limit=3`)
  }

  getMe(){
    return this.http.get(`${environment.AUTHURL}/auth/me`)
  }
}
