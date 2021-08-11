import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserTypes } from 'src/app/Models/user-types';
import { ConsumerService } from 'src/app/Services/consumer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public addForm:FormGroup;
  submitted:boolean=false;
  constructor(private formBuilder: FormBuilder, private router: Router,private consumerService:ConsumerService) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      fName:[''],
      lName:[''],
      email:[''],
      phoneNo:[],
      dateOfBirth:[],
      address:[''],
      userName:[''],
      password:[''],
      confirmPassword:[''],
      bank:[''],
      savingsAccountNumber:[''],
      ifscCode:[''],
      cardType:[''],
    });
  }
}
  /*newConsumer:
  {
      "user": [
        {
          "userType": 
          [
            {
              "userTypeId": 2,
              "userTypeName": "Consumer"
            }
          ]
          "userName": [],
          "email": "rahilv@gmail.com",
          "password": "rahil123",
        }
      ],
      "fName": "Rahil",
      "lName": "Vithalani",
      "phoneNo": 9702678234,
      "address": "Malad",
      "cardNo": {
        "cardTypeName": "Titanium",
        "cardLimit": 300000,
        "validity": "2025-08-22"
      },
      "savingAccNo": 1111111102,
      "ifscCode": "BOI11111102",
      "isValidated": "Y",
      "balance": 500000
*/
