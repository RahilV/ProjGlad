import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../Models/users';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  base_url='http://localhost:8090/api/v1/';
  constructor(private http:HttpClient) { }

  public loginUser(user:any)
  {
    return this.http.post(this.base_url+'login',user);
  }
}
