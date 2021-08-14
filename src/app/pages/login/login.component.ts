import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from 'src/app/Models/users';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  addForm: FormGroup;
  submitted: boolean = false;
  user;
  userId:number;
  userEntry;
  error:String;
  constructor(private formBuilder: FormBuilder, private router: Router, private loginService: LoginService) {}
  ngOnDestroy(){
   
  }

  ngOnInit() 
  {
    this.addForm = this.formBuilder.group({
      username: [''],
      password: [''],
    });
  }
  onSubmit() 
  {
    if (this.addForm.invalid) {
      return;
    }
    this.user={
      "userName":this.addForm.value.username,
      "password":this.addForm.value.password
    }
    console.log(this.user);
    this.loginService.loginUser(this.user).subscribe(data =>{
      this.userId = Number(data.toString());
      console.log(this.userId);
      
      //console.log("USER ID IS = ",this.userId);
      this.userEntry = this.loginService.getUserById(this.userId).subscribe(
        (data) =>{
          this.userEntry = data;
          console.log(this.userEntry);
          sessionStorage.setItem('userType',this.userEntry.userType.userTypeId);
          console.log("USER TYPE : ",sessionStorage.getItem('userType'));
          if(sessionStorage.getItem('userType') == "1")
          {
            this.router.navigate(['admin']);
          }
          else{
            this.router.navigate(['consumer'])
          }
        });
      sessionStorage.setItem('userId',this.userId.toString());
      sessionStorage.setItem('userName',this.addForm.value.username);
    },
      (error) =>
      {
        console.log(error.error.message);
        this.error = error.error.message;
      }
    );
    
  }
}
