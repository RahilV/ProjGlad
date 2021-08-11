import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { TestComponent } from './pages/test/test.component';
import { EmiCardListComponent } from './Pages/EmiCard/emi-card-list/emi-card-list.component';
import { CreateEmiCardComponent } from './Pages/EmiCard/create-emi-card/create-emi-card.component';
import { EmiCardByNoComponent } from './Pages/EmiCard/emi-card-by-no/emi-card-by-no.component';

const routes: Routes =[
  { path: '',      component: DashboardComponent },
  { path: 'dashboard',      component: DashboardComponent },
  { path: 'user-profile',   component: UserProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'test', component: TestComponent },
  { path: 'emiCardList', component: EmiCardListComponent },
  { path: 'emiCardByNo', component: EmiCardByNoComponent },
  { path: 'createEmiCard', component: CreateEmiCardComponent },


  {
    path: '**',
    //redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
