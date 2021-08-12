import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductDetailsService } from 'src/app/Services/product-details.service';
import { TestService } from 'src/app/Services/test.service';
import { Products } from '../test/test';
import { ProductsPurchased } from './ProductsPurchased';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  newBill;
  pp:ProductsPurchased = new ProductsPurchased();

  payForm: FormGroup;
  submitted = false;
  prdObj:Products;
  
  productId:any;
  constructor(private formBuilder:FormBuilder, private testService: TestService, private routing: ActivatedRoute, private productPurchased:ProductDetailsService) { 
    this.productId=this.routing.snapshot.paramMap.get("id");
  }

  ngOnInit(): void {
    this.loadData();

    this.payForm = this.formBuilder.group({
      emi_duration: [''],      
    });

  }
  loadData(){
    this.testService.getProductById(this.productId).subscribe((data:any)=>{
        this.prdObj=data;
      });
  }

  onSubmit() 
  {
    if (this.payForm.invalid) {
      return;
    }
    this.submitted=true;
    this.newBill={
        "userId": sessionStorage.getItem('userId'),
        "productId": {
            "productId":this.productId ,
            "productName": "Earphones",
            "productDetails": "Boat",
            "price": 2000,
            "image": "mno.jpg",
            "eligibilityCriteria": "Product Eligible"
        },
        "emiDuration":this.payForm.value.emi_duration,
        "amountBillable": 10002,
        "amountPayed": 3000,
        "transactionId": 10000003
    }
    console.log(this.newBill);
    this.productPurchased.buyProduct(this.newBill).subscribe(data =>{
      this.newBill = data;
    });
    this.pp = new ProductsPurchased();

  }


}
