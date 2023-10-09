import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-listbycategory',
  templateUrl: './listbycategory.component.html',
  styleUrls: ['./listbycategory.component.css']
})
export class ListbycategoryComponent {
  products:Product[]=[];
  cat:string="sports";

  constructor(private service :ProductService,private router:Router){
    this.service.listByCat(this.cat).subscribe(data=>this.products=data);
  }

  buy(id:number){
    localStorage.setItem("id",id+"");
  }

  search(){
    this.service.listByCat(this.cat).subscribe((data) => (this.products = data));
  }

}
