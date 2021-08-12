import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../Models/users';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  base_url='http://localhost:8090/api/v1/';
  constructor(private http:HttpClient) { }

  public getUserById(userId:number)
  {
    return this.http.get<Users>(this.base_url+'user/'+userId)
  }

  public loginUser(user:any)
  {
    return this.http.post(this.base_url+'login',user);
  }
}
