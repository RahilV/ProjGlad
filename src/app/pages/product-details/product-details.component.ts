import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { data } from 'jquery';
import { Consumer } from 'src/app/Models/consumer';
import { Products } from 'src/app/Models/products';
import { ConsumerService } from 'src/app/Services/consumer.service';
import { ProductDetailsService } from 'src/app/Services/product-details.service';
import { TestService } from 'src/app/Services/test.service';
import { TransactionsService } from 'src/app/Services/transactions.service';
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

  public cs:Consumer;

  userId=Number(sessionStorage.getItem('userId'));
  
  productId:any;
  constructor(private formBuilder:FormBuilder, private testService: TestService, private routing: ActivatedRoute, private productPurchased:ProductDetailsService, private consumerService:ConsumerService) { 
    this.productId=this.routing.snapshot.paramMap.get("id");
  }

  ngOnInit(): void {
    this.loadData();

    this.payForm = this.formBuilder.group({
      emiPeriod: ['',Validators.required],      
    });

  }
  loadData(){
    this.testService.getProductById(this.productId).subscribe((data:any)=>{
        this.prdObj=data;
      });

      console.log(this.productId);
      
      console.log(this.consumerService.getConsumerById(this.userId).subscribe((data:any)=>{this.cs=data;}));

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
        "transaction": 
        {
            "transactionDate": "2027-07-22",
            "amount": 2000
        },
        "emiPeriod":this.payForm.value.emiPeriod
    }
    console.log(this.newBill);
    this.productPurchased.buyProduct(this.newBill).subscribe(data =>{ this.newBill = data; });
    

  }

showAlert(){
    if (confirm("Are you sure? First EMi of "+this.prdObj.price/this.payForm.value.emiPeriod+" will be paid")) {
    this.onSubmit();
    }
  }
}
