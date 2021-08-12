import { Component, OnInit } from '@angular/core';
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
  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.loadData();
    this.admin = sessionStorage.getItem('userName');
  }
  loadData() {
    this.adminService.getAllConsumers().subscribe(data => {
        this.consumerList = data;
    });
  }
}
