import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserdashComponent } from './userdash/userdash.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { RegisterComponent } from './register/register.component';
import { ListofproductsComponent } from './listofproducts/listofproducts.component';
import { ListbycategoryComponent } from './listbycategory/listbycategory.component';
import { MycartComponent } from './mycart/mycart.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ListofcustomerComponent } from './listofcustomer/listofcustomer.component';
import { ListofproductsAdminComponent } from './listofproducts-admin/listofproducts-admin.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"userdash",component:UserdashComponent},
  {path:"admindash",component:AdmindashComponent},
  {path:"register",component:RegisterComponent},
  {path:"listofproducts",component:ListofproductsComponent},
  {path:"listbycategory",component:ListbycategoryComponent},
  {path:"mycart",component:MycartComponent},
  {path:"addproduct", component:AddproductComponent},
  {path:"listofcustomer", component: ListofcustomerComponent},
  {path: "listofproduct-admin", component: ListofproductsAdminComponent},
  {path: "update", component: UpdateComponent},
  {path:"**",redirectTo:"home",pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
