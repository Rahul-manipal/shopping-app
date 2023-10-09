import { Component } from '@angular/core';

import { CustomerService } from '../services/customer.service';

import { Router } from '@angular/router';

import { catchError, of } from 'rxjs';
import { Customer } from '../models/customer.model';



 

@Component({

  selector: 'app-login',

  templateUrl: './login.component.html',

  styleUrls: ['./login.component.css']

})

export class LoginComponent {

  cust : Customer = new Customer();
  custid : string = '';
  password : string = '';
  error: string = '';
  constructor(private service : CustomerService, private router : Router) { }
  login() {
    if(this.custid === '2480' && this.password === 'rahul123')
      this.router.navigate(['/admindash']);
    else {
      this.service.validate(this.custid, this.password).pipe(
        catchError(error => {
          this.error = error.error.message;
          console.log(this.error);
          return of();
        })
      ).subscribe(data => {
        localStorage.setItem("User", JSON.stringify(data));
        localStorage.setItem("idd", data.custid);
        this.router.navigate(['/userdash']);
      });
    }
  }
}

 