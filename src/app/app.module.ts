import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserdashComponent } from './userdash/userdash.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { RegisterComponent } from './register/register.component';
import { ListofproductsComponent } from './listofproducts/listofproducts.component';
import { ListbycategoryComponent } from './listbycategory/listbycategory.component';
import { MycartComponent } from './mycart/mycart.component';
import { ListofproductsAdminComponent } from './listofproducts-admin/listofproducts-admin.component';
import { ListofcustomerComponent } from './listofcustomer/listofcustomer.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UserdashComponent,
    AdmindashComponent,
    RegisterComponent,
    ListofproductsComponent,
    ListbycategoryComponent,
    MycartComponent,
    ListofproductsAdminComponent,
    ListofcustomerComponent,
    AddproductComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
