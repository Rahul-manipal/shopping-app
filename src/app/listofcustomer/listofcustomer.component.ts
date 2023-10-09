import { Component } from '@angular/core';
import { Customer } from '../models/customer.model';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-listofcustomer',
  templateUrl: './listofcustomer.component.html',
  styleUrls: ['./listofcustomer.component.css']
})
export class ListofcustomerComponent {
  customers:Customer[]=[];
  constructor(private service:CustomerService){
    service.listCustomer().subscribe(data=>this.customers=data);
  }
}
