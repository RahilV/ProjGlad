import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { EmiCardListComponent } from './Pages/EmiCard/emi-card-list/emi-card-list.component';
import { EmiCardByNoComponent } from './Pages/EmiCard/emi-card-by-no/emi-card-by-no.component';
import { CreateEmiCardComponent } from './Pages/EmiCard/create-emi-card/create-emi-card.component';
import { UserProductsComponent } from './Pages/user-products/user-products.component';
import { ProductDetailsComponent } from './Pages/product-details/product-details.component';
import { AdminComponent } from './pages/admin/admin.component';
import { UserProductDetailsComponent } from './pages/user-product-details/user-product-details.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { TestComponent } from './pages/test/test.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    UserProfileComponent,
    TestComponent,
    EmiCardListComponent,
    EmiCardByNoComponent,
    CreateEmiCardComponent,
    UserProductsComponent,
    ProductDetailsComponent,
    AdminComponent,
    UserProductDetailsComponent,
    LogoutComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
