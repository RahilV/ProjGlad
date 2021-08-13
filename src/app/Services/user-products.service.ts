import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ProductsPurchased } from '../pages/product-details/ProductsPurchased';

@Injectable({
  providedIn: 'root'
})
export class UserProductsService {
  private baseUrl = "http://localhost:8090/api/v1"
  constructor(private http: HttpClient) { }
  getAllUserProducts() {
    console.log(this.http.get<any[]>(this.baseUrl + '/productsPurchased'));
    return this.http.get<any[]>(this.baseUrl + "/productsPurchased");
  }
  getPrdById(productPurchasedId: number) {
    console.log(this.http.get<ProductsPurchased>(this.baseUrl + '/productsPurchased/' + productPurchasedId));
    return this.http.get<ProductsPurchased>(this.baseUrl + '/productsPurchased/' + productPurchasedId);
  }
  public addProduct(product: Object): Observable<Object> {
    console.log(this.http.post(this.baseUrl+ '/addnewproduct', product))
    return this.http.post(this.baseUrl+ '/addnewproduct', product);
  }
}
