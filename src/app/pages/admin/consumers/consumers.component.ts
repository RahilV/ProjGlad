import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Consumer } from 'src/app/Models/consumer';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-consumers',
  templateUrl: './consumers.component.html',
  styleUrls: ['./consumers.component.scss']
})
export class ConsumersComponent implements OnInit {

  consumerList:Consumer[];
  admin;
  user;
  message:String;
  constructor(private adminService:AdminService,private router:Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('userType') == "1")
    {
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

  deleteConsumer(consumer)
  {
    const cons = {
      "userId":consumer
    }
    this.adminService.deleteConsumer(cons).subscribe((data) => {
      /*this.adminService.getAllConsumers().subscribe(data => {
        this.consumerList = data;
      });*/
    });
    
    
  }
  showAlert(consumer){
    if (confirm("ARE YOU SURE YOU WANT TO REMOVE THE CONSUMER? \nONCE DELETED YOU CANNOT GO BACK!")) 
    {
      this.deleteConsumer(consumer);
    }
  }
}
