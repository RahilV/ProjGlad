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
}
