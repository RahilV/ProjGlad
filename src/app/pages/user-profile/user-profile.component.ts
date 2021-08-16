import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmedValidator } from 'src/app/Models/confirmedvalidator';
import { Consumer } from 'src/app/Models/consumer';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  userId:any;
  public consumer:Consumer;
  user;
  addForm: FormGroup;
  fname:String;

  newConsumerJSON;
  today = new Date();
  limit:number;
  constructor(private formBuilder: FormBuilder,private activatedRoute:ActivatedRoute,private adminService:AdminService,private router:Router) {
    this.userId = this.activatedRoute.snapshot.paramMap.get("id");
  }

  ngOnInit() {
    this.loadData();
    this.addForm = this.formBuilder.group({
      fName: ['',Validators.required],
      lName: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      phoneNo: [,[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern("[0-9]{10}")]],
      address: ['',Validators.required],
      userName: ['',Validators.required],
      bank: [''],
      savingsAccountNumber: ['',Validators.required],
      ifscCode: ['',Validators.required],
      cardType: ['']
    });
    
  }

  loadData()
  {
    this.adminService.getConsumerById(this.userId).subscribe((data:any) =>{
      this.consumer = data;
      this.addForm.get('fName').setValue(this.consumer[0].fName);
      this.addForm.get('lName').setValue(this.consumer[0].lName);
      this.addForm.get('email').setValue(this.consumer[0].user.email);
      this.addForm.get('phoneNo').setValue(this.consumer[0].phoneNo);
      this.addForm.get('address').setValue(this.consumer[0].address);
      this.addForm.get('userName').setValue(this.consumer[0].user.userName);
      //this.addForm.get('bank').setValue(this.consumer[0].bank);
      this.addForm.get('savingsAccountNumber').setValue(this.consumer[0].savingAccNo);
      this.addForm.get('ifscCode').setValue(this.consumer[0].ifscCode);
      this.addForm.get('cardType').setValue(this.consumer[0].card.cardTypeName);
    });
  }

  onSubmit()
  {
    console.log("SUBMIT");
    if (this.addForm.invalid) {
      return;
    }
    console.log(this.addForm.value.email);
    if(this.addForm.value.cardType === "Gold")
    {
      this.today.setFullYear(this.today.getFullYear() + 5);
      this.limit = 50000;
    }
    else
    {
      this.today.setFullYear(this.today.getFullYear() + 10);
      this.limit=100000;
    }
    this.newConsumerJSON={
        "user":
        {
          "userId" : this.userId,
          "userType":
            {
              "userTypeId": 2,
              "userTypeName": "Consumer"
            },
          "userName": this.addForm.value.userName,
          "email": this.addForm.value.email,
          "password": '',
        },
        "fName": this.addForm.value.fName,
        "lName": this.addForm.value.lName,
        "phoneNo": this.addForm.value.phoneNo,
        "address": this.addForm.value.address,
        "card": {
            "cardTypeName": this.addForm.value.cardType,
            "cardLimit": this.limit,
            "Validity": this.today
        },
        "savingAccNo": this.addForm.value.savingsAccountNumber,
        "ifscCode": this.addForm.value.ifscCode,
        "isValidated": 'Y',
        "balance": 0
      };

      console.log(this.newConsumerJSON);
      this.adminService.editConsumer(this.newConsumerJSON).subscribe(data => {
        this.router.navigate(['/consumers']);
      });
  }
}
