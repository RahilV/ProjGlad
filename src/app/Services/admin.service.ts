import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Consumer } from '../Models/consumer';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  base_url='http://localhost:8090/api/v1/';
  constructor(private http:HttpClient) { }

  public getAllConsumers()
  {
    return this.http.get<Consumer[]>(this.base_url+'consumers');
  }
  public getAllNonValidConsumers()
  {
    return this.http.get<Consumer[]>(this.base_url+'nonvalid_consumers');
  }

  public validateConsumer(user)
  {
    return this.http.post(this.base_url+'validateConsumers',user);
  }
}
