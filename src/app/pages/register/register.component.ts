import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Consumer } from 'src/app/Models/consumer';
import { UserTypes } from 'src/app/Models/user-types';
import { ConsumerService } from 'src/app/Services/consumer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  addForm: FormGroup;
  submitted: boolean = false;
  newConsumerJSON;
  constructor(private formBuilder: FormBuilder, private router: Router, private consumerService: ConsumerService) { }
  today = new Date();
  limit:number;
  validity = new Date();
  ngOnInit() {
    this.addForm = this.formBuilder.group({
      fName: [''],
      lName: [''],
      email: [''],
      phoneNo: [],
      dateOfBirth: [],
      address: [''],
      userName: [''],
      password: [''],
      confirmPassword: [''],
      bank: [''],
      savingsAccountNumber: [''],
      ifscCode: [''],
      cardType: [''],
      cardLimit: [''],
      cardValidity: new Date(),
    });
  }


  onSubmit() {
    console.log("SUBMIT");
    if (this.addForm.invalid) {
      return;
    }

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
          "userType":
            {
              "userTypeId": 2,
              "userTypeName": "Consumer"
            },
          "userName": this.addForm.value.userName,
          "email": this.addForm.value.email,
          "password": this.addForm.value.password,
        },
        "fName": this.addForm.value.fName,
        "lName": this.addForm.value.lName,
        "phoneNo": this.addForm.value.phoneNo,
        "address": this.addForm.value.address,
        "cardNo": {
            "cardTypeName": this.addForm.value.cardType,
            "cardLimit": this.limit,
            "Validity": this.today
        },
        "savingAccNo": this.addForm.value.savingsAccountNumber,
        "ifscCode": this.addForm.value.ifscCode,
        "isValidated": 'N',
        "balance": this.addForm.value.balance
      };

      console.log(this.newConsumerJSON);
      this.consumerService.createConsumer(this.newConsumerJSON).subscribe(data => {
        this.router.navigate(['/login']);
      });
  }
  
}
/*

*/
