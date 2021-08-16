import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ProductsPurchased } from '../pages/product-details/ProductsPurchased';
import { Transactions } from '../Models/Transactions';

@Injectable({
  providedIn: 'root'
})
export class UserProductsService {
  private baseUrl = "http://localhost:8090/api/v1"
  constructor(private http: HttpClient) { }
  
  public getAllUserProducts(userId:number) {
    console.log(this.http.get<ProductsPurchased[]>(this.baseUrl + '/userProducts/' + userId));
    return this.http.get<ProductsPurchased[]>(this.baseUrl + "/userProducts/" + userId);
  }
  public getPrdById(productPurchasedId: number) {
    console.log(this.http.get<ProductsPurchased>(this.baseUrl + '/productsPurchased/' + productPurchasedId));
    return this.http.get<ProductsPurchased>(this.baseUrl + '/productsPurchased/' + productPurchasedId);
  }
  public addProduct(product: Object): Observable<Object> {
    console.log(this.http.post(this.baseUrl+ '/addnewproduct', product))
    return this.http.post(this.baseUrl+ '/addnewproduct', product);
  }

  public installmentsLeft(productPurchasedId: number)
  {
    return this.http.get<number>(this.baseUrl + '/userProducts/emi/' + productPurchasedId);
  }

  public payInstallment(transaction:Transactions)
  {
    return this.http.post(this.baseUrl+'/payInstallment',transaction)
  }
}
