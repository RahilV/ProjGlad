import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/Models/products';
import { ProductDetailsService } from 'src/app/Services/product-details.service';
import { TestService } from 'src/app/Services/test.service';
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
      emiPeriod: [''],      
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
            "productName": this.prdObj.productName,
            "productDetails": this.prdObj.productDetails,
            "price": this.prdObj.price,
            "image": this.prdObj.image,
            "eligibilityCriteria": this.prdObj.eligibilityCriteria
        },
        "amountBillable": this.prdObj.price,
        "amountPayed": this.prdObj.price/this.payForm.value.emiPeriod,
        "transactionId": 10000023,
        "emiPeriod":this.payForm.value.emiPeriod
    }
    console.log(this.newBill);
    this.productPurchased.buyProduct(this.newBill).subscribe(data =>{ this.newBill = data; });
  }

showAlert(){
    if (confirm("Are you sure? First EMi of"+this.prdObj.price/this.payForm.value.emiPeriod+" will be paid")) {
    this.onSubmit();
    }
  }


}
