import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transactions } from '../Models/Transactions';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  private baseUrl = "http://localhost:8090/api/v1"
  constructor(private http: HttpClient) { }

  getAllTransactions(){
    console.log(this.http.get<any[]>(this.baseUrl+'/transaction'));
   return  this.http.get<any[]>(this.baseUrl+'/transaction');
  }
}
