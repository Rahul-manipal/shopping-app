import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient ) { }

  addCustomer(c:Customer){
    this.http.post("http://localhost:9002/customer/add",c).subscribe(data=>data=c);
  }

  getCustomer(custid:string){
    return this.http.get("http://localhost:9004/customer/"+custid);
  }

  listCustomer(){
    return this.http.get<Customer[]>("http://localhost:9004/customer/all");
  }

  validate(custid:string,password:string){
    return this.http.get<Customer>("http://localhost:9004/customer/login", {params: 
      new HttpParams().append("custid", custid).append("password",password)});
  }
}
