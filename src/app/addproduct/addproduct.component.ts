import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
  p:Product=new Product();
  constructor(private service:ProductService,private router:Router){}
  save(){
    this.service.addProduct(this.p);
    this.router.navigate(['/listofproduct-admin']);
  }

}
