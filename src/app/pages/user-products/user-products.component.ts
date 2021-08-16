import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/Models/products';
import { TransactionsService } from 'src/app/Services/transactions.service';
import { UserProductsService } from 'src/app/Services/user-products.service';
import { UserProducts } from './UserProducts';

@Component({
  selector: 'app-user-products',
  templateUrl: './user-products.component.html',
  styleUrls: ['./user-products.component.scss']
})
export class UserProductsComponent implements OnInit {
  [x: string]: any;

  userPrdList:any;
  prdId:any;
  userId:number;
  prdObj:Products;
  constructor(private userProductService: UserProductsService) {
    this.userId = Number(sessionStorage.getItem('userId'));
  }

  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    this.userProductService.getAllUserProducts(this.userId).subscribe(data => {
        this.userPrdList = data;
        console.log(this.userPrdList);

   
    });
  }
}
