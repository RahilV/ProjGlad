import { Component, OnInit } from '@angular/core';
import { Transactions } from 'src/app/Models/Transactions';
import { TestService } from 'src/app/Services/test.service';
import { TransactionsService } from 'src/app/Services/transactions.service';
import { Products } from '../test/test';

@Component({
  selector: 'app-user-product-details',
  templateUrl: './user-product-details.component.html',
  styleUrls: ['./user-product-details.component.scss']
})
export class UserProductDetailsComponent implements OnInit {
  
  transactionsList:Transactions[];
  prdObj:Products= new Products();
  productId:number=0;
   
  constructor(private transactionsService: TransactionsService,private testService: TestService) {}
  
    ngOnInit(): void {
      this.onSubmit();
    }
    onSubmit() {
      this.testService.getProductById(this.productId).subscribe(data => {
        this.prdObj=data;

      this.transactionsService.getAllTransactions().subscribe(data=> {
        this.transactionsList = data;
      })
      });
    }
  }