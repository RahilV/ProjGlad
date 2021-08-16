import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmedValidator } from 'src/app/Models/confirmedvalidator';
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
      fName: ['',Validators.required],
      lName: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      phoneNo: [,[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern("[0-9]{10}")]],
      address: ['',Validators.required],
      userName: ['',Validators.required],
      password: ['',[Validators.required]],
      confirmPassword: ['',[Validators.required]],
      bank: [''],
      savingsAccountNumber: ['',Validators.required],
      ifscCode: ['',Validators.required],
      cardType: [''],
      cardLimit: [''],
      cardValidity: new Date()},{validator:ConfirmedValidator('password','confirmPassword')
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
        "card": {
            "cardTypeName": this.addForm.value.cardType,
            "cardLimit": this.limit,
            "Validity": this.today
        },
        "savingAccNo": this.addForm.value.savingsAccountNumber,
        "ifscCode": this.addForm.value.ifscCode,
        "isValidated": 'N',
        "balance": this.limit
      };

      console.log(this.newConsumerJSON);
      this.consumerService.createConsumer(this.newConsumerJSON).subscribe(data => {
        this.router.navigate(['/login']);
      });
  }
  
}
/*

*/
