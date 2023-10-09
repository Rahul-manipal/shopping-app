import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { Customer } from '../models/customer.model';
import { Cart } from '../models/cart.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-listofproducts',
  templateUrl: './listofproducts.component.html',
  styleUrls: ['./listofproducts.component.css']
})
export class ListofproductsComponent {
  products:Product[]=[];
  c:Customer=JSON.parse(localStorage.getItem("User")!);
  c1:Cart=new Cart();

  constructor(private service :ProductService,private router:Router, private cservice:CartService){
    this.service.listProduct().subscribe(data=>this.products=data);
    this.c1.custid=this.c.custid;
  }

  add(id:number){
    //localStorage.setItem("id",id+"");
    this.c1.id=id;
    this.cservice.addToCart(this.c1);
  }
}
