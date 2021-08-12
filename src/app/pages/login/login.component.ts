import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
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
  userId;
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
      this.userId = data;
      sessionStorage.setItem('userId',this.userId);
      sessionStorage.setItem('userName',this.addForm.value.username);
    });
  }
}
