import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpEvent, HttpEventType, HttpRequest } from '@angular/common/http'
import { last, map, Observable, tap } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  public progressSource = new BehaviorSubject<number>(0);
  private baseUrl = "http://localhost:8090/api/v1"

  constructor(private http: HttpClient) { }
  getAllProducts() {
    console.log(this.http.get<any[]>(this.baseUrl + '/products'));
    return this.http.get<any[]>(this.baseUrl + "/products");
  }
  getProductById(productId: number) {
    console.log(this.http.get<any>(this.baseUrl + '/product/' + productId));
    return this.http.get<any>(this.baseUrl + '/product/' + productId);
  }
  public addProduct(product: Object): Observable<Object> {
    console.log(this.http.post(this.baseUrl+ '/addnewproduct', product))
    return this.http.post(this.baseUrl+ '/addnewproduct', product);
  }
  // getAllTransactions() {
  //   throw new Error('Method not implemented.');
  // }

  // upload(file: File) {
  //   let formData = new FormData();
  //   formData.append("avatar", file);

  //   const req = new HttpRequest(
  //     "POST",
  //     "http://localhost:8090/api/v1",
  //     formData,
  //     {
  //       reportProgress: true
  //     }
  //   );

  //   return this.http.request(req).pipe(
  //     map(event => this.getEventMessage(event, file)),
  //     tap((envelope: any) => this.processProgress(envelope)),
  //     last()
  //   );
  // }

  // processProgress(envelope: any): void {
  //   if (typeof envelope === "number") {
  //     this.progressSource.next(envelope);
  //   }
  // }

  // private getEventMessage(event: HttpEvent<any>, file: File) {
  //   switch (event.type) {
  //     case HttpEventType.Sent:
  //       return `Uploading file "${file.name}" of size ${file.size}.`;
  //     case HttpEventType.UploadProgress:
  //       return Math.round((100 * event.loaded) / event.total);
  //     case HttpEventType.Response:
  //       return `File "${file.name}" was completely uploaded!`;
  //     default:
  //       return `File "${file.name}" surprising upload event: ${event.type}.`;
  //   }
  // }
}




