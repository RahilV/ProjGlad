import { Component, OnInit } from '@angular/core';
  import { Router } from '@angular/router';
  import Chart from 'chart.js';
import { UserProductsService } from 'src/app/Services/user-products.service';

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "../../variables/charts";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  

  public datasets: any;
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  /*
    npm install jquery --save
    npm install datatables.net --save
    npm install datatables.net-dt --save
    npm install angular-datatables --save
    npm install @types/jquery --save-dev
    npm install @types/datatables.net --save-dev
  */

  userPrdList:any;
  prdId:any;
  userId:number;
  
  dtOptions: DataTables.Settings = {};
    
  constructor(private router: Router,private userProductService: UserProductsService) {
    this.userId = Number(sessionStorage.getItem('userId'));
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
  }

  ngOnInit() 
  {
    if (sessionStorage.getItem('userType') == "1") 
    {
      this.router.navigate(['admin']);
    }
    else if (sessionStorage.getItem('userType') == "2") 
    {
      this.router.navigate(['consumer'])
    }
    else 
    {
      this.router.navigate(['login'])
    }

    this.loadData();
  }

  loadData()
  {
    this.userProductService.getAllUserProducts(this.userId).subscribe(data => {
      this.userPrdList = data;
      console.log(this.userPrdList);
    });

    
  }

}
