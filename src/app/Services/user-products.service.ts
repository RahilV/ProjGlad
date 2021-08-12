import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { Observable } from 'rxjs';

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
  getProductById(productId: number) {
    console.log(this.http.get<any>(this.baseUrl + '/productsPurchased/' + productId));
    return this.http.get<any>(this.baseUrl + '/productsPurchased/' + productId);
  }
  public addProduct(product: Object): Observable<Object> {
    console.log(this.http.post(this.baseUrl+ '/addnewproduct', product))
    return this.http.post(this.baseUrl+ '/addnewproduct', product);
  }
}
