import { Component, OnInit } from '@angular/core';
import { UserProductsService } from 'src/app/Services/user-products.service';
import { UserProducts } from './UserProducts';

@Component({
  selector: 'app-user-products',
  templateUrl: './user-products.component.html',
  styleUrls: ['./user-products.component.scss']
})
export class UserProductsComponent implements OnInit {

  userPrdList:UserProducts[];
  constructor(private userProductService: UserProductsService) { }

  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    this.userProductService.getAllUserProducts().subscribe(data => 
      {
        this.userPrdList = data;
      }
    )

}

}
