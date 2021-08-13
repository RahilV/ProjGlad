import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Transactions } from 'src/app/Models/Transactions';
import { TestService } from 'src/app/Services/test.service';
import { TransactionsService } from 'src/app/Services/transactions.service';
import { UserProductsService } from 'src/app/Services/user-products.service';
import { ProductsPurchased } from '../product-details/ProductsPurchased';
import { UserProducts } from '../user-products/UserProducts';

@Component({
  selector: 'app-user-product-details',
  templateUrl: './user-product-details.component.html',
  styleUrls: ['./user-product-details.component.scss']
})
export class UserProductDetailsComponent implements OnInit {
  
  transactionsList:Transactions[];
  public prdObj:ProductsPurchased;
  prdId:any;
   
  constructor(private userProductsService: UserProductsService,private routing:ActivatedRoute) {
    this.prdId=this.routing.snapshot.paramMap.get('id');
  }
  
  ngOnInit(): void {
    this.onSubmit();
  }
  onSubmit() {
    this.userProductsService.getPrdById(this.prdId).subscribe(data => {
      this.prdObj=data;
      console.log(this.prdObj.productId);
    });
  }
} 