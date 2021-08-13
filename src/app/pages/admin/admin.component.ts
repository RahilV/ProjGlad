import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Consumer } from 'src/app/Models/consumer';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  consumerList:Consumer[];
  admin;
  constructor(private adminService:AdminService,private router:Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('userType') == "1")
    {
      this.router.navigate(['admin']);
      this.loadData();
      this.admin = sessionStorage.getItem('userName');
    }
    else{
      this.router.navigate(['consumer'])
    }
  }
  loadData() {
    this.adminService.getAllConsumers().subscribe(data => {
        this.consumerList = data;
    });
  }
}
