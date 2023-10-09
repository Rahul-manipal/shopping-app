import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listofproducts-admin',
  templateUrl: './listofproducts-admin.component.html',
  styleUrls: ['./listofproducts-admin.component.css']
})
export class ListofproductsAdminComponent {
  products:Product[]=[];
  constructor(private service:ProductService,private router:Router){
    service.listProduct().subscribe(data=>this.products=data);
  }
 
  update(p:Product){
    localStorage.setItem("Product",JSON.stringify(p));
    this.router.navigate(['update']);
  } 
   async delete(id:number){
    if(await confirm("Are you sure you want to delete??")){
      await this.service.delete(id);
    }
    // this.service.delete(id);
    window.location.reload();
  }
}
