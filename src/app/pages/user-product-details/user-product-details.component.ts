import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from 'src/app/Models/products';
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
  installmentsLeft:number;
  productPurchasedId:any;
  newTransaction;
  constructor(private userProductsService: UserProductsService,private routing:ActivatedRoute, private transactionService: TransactionsService,private router:Router,
    private testService:TestService) {
    this.productPurchasedId=this.routing.snapshot.paramMap.get('id');
  }
  
  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    this.userProductsService.getPrdById(this.productPurchasedId).subscribe(data => {
      this.prdObj=data;
      console.log(this.prdObj);
    });
    
    this.transactionService.getTransactionsById(this.productPurchasedId).subscribe(data => { 
      this.transactionsList=data;
    });

    this.userProductsService.installmentsLeft(this.productPurchasedId).subscribe(data => {
      this.installmentsLeft=data;
      console.log("INSTALLMENTS LEFT : ",this.installmentsLeft);
    });
    
  }

  payInstallment()
  {
    console.log("ISKA PAY KARO",this.productPurchasedId);
    this.newTransaction= {
      "productPurchasedId":this.productPurchasedId,
      "transactionDate": "2021-08-16",
      "amount": (this.prdObj.amountBillable/this.prdObj.emiPeriod)
    }
    this.userProductsService.payInstallment(this.newTransaction).subscribe(data=>{
      
    });
    this.router.navigate(['/userProducts']);
  }
}