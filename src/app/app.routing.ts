import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { EmiCardListComponent } from './Pages/EmiCard/emi-card-list/emi-card-list.component';
import { CreateEmiCardComponent } from './Pages/EmiCard/create-emi-card/create-emi-card.component';
import { EmiCardByNoComponent } from './Pages/EmiCard/emi-card-by-no/emi-card-by-no.component';
import { UserProductsComponent } from './Pages/user-products/user-products.component';
import { ProductDetailsComponent } from './Pages/product-details/product-details.component';
import { AdminComponent } from './pages/admin/admin.component';
import { UserProductDetailsComponent } from './pages/user-product-details/user-product-details.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { AddProductComponent } from './Pages/add-product/add-product.component';
import { TestComponent } from './pages/test/test.component';
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';
import { ConsumersComponent } from './pages/admin/consumers/consumers.component';

const routes: Routes =[
  { path: '', component: DashboardComponent },
  { path: 'validateConsumers', component: DashboardComponent },
  { path: 'consumer', component: DashboardComponent },
  { path: 'user-profile/:id', component: UserProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'products', component: TestComponent },
  { path: 'consumer/emiCardList', component: EmiCardListComponent },
  { path: 'consumer/emiCardByNo', component: EmiCardByNoComponent },
  { path: 'consumer/createEmiCard', component: CreateEmiCardComponent },
  { path: 'userProducts', component: UserProductsComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'admin',component: AdminComponent},
  { path: 'consumers',component: ConsumersComponent},
  { path: 'userProducts/:id',component:UserProductDetailsComponent},
  { path: 'logout',component:LogoutComponent },
  {path:'terms',component:TermsConditionsComponent},
  { path: 'addProduct',component:AddProductComponent},
  { path: '**'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
