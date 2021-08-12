import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserProductsService } from 'src/app/Services/user-products.service';
import { UserProducts } from './UserProducts';

@Component({
  selector: 'app-user-products',
  templateUrl: './user-products.component.html',
  styleUrls: ['./user-products.component.scss']
})
export class UserProductsComponent implements OnInit {

  userPrdList:UserProducts[];
  prdId:any;
  constructor(private userProductService: UserProductsService,private routing:ActivatedRoute) { 
this.prdId=this.routing.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    this.userProductService.getProductById(this.prdId).subscribe(data => 
      {
        this.userPrdList = data;
      }
    )



}

}
