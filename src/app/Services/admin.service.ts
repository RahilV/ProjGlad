import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Consumer } from '../Models/consumer';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  public progressSource = new BehaviorSubject<number>(0);
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

  public deleteConsumer(userId):any
  {
    return this.http.post(this.base_url+'deleteConsumer/',userId);
  }

  getConsumerById(consumerId)
  {
    return this.http.get<Consumer>(this.base_url+'consumers/',consumerId)
  }

  editConsumer(consumer:Consumer)
  {
    return this.http.post(this.base_url+'consumers/edit',consumer)
  }
}
