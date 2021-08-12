import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestService } from 'src/app/Services/test.service';
import { Products } from '../test/test';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {


  prdObj:Products;
  
  productId:any;
  constructor(private testService: TestService, private routing: ActivatedRoute) { 
    this.productId=this.routing.snapshot.paramMap.get("id");
  }

  ngOnInit(): void {
    this.loadData();
  }
  loadData(){
    this.testService.getProductById(this.productId).subscribe((data:any)=>{
        this.prdObj=data;
      });
  }

}
