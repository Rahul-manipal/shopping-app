import { Component } from '@angular/core';
import { Customer } from '../models/customer.model';
import { CustomerService } from '../services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


    c : Customer = new Customer();
  
    custid:string='';
  
    email:string='';
  
    password:string='';
  
    mobile:string='';
  
   
  
    constructor(private service : CustomerService, private router : Router) { }
  
   
  
    save() {
  
      this.service.addCustomer(this.c);
  
      this.router.navigate(['/userdash']);
  
    }
  
  }


