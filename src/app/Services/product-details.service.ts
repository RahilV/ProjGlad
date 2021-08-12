import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductsPurchased } from '../pages/product-details/ProductsPurchased';
import { Products } from '../pages/test/test';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

  private baseUrl = "http://localhost:8090/api/v1"
  constructor(private http: HttpClient) { }

  getProductById(id: number):any {
    console.log(this.http.get<Products>(this.baseUrl + '/product/' + id));
    return this.http.get<Products>(this.baseUrl + '/product/' + id);
  }

buyProduct(pp: ProductsPurchased){
  console.log(this.http.post(this.baseUrl+'/buyproduct', pp));  
  return this.http.post(this.baseUrl+'/buyproduct', pp);
}
}
