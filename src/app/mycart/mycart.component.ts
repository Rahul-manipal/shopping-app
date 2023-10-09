import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { CartTemplate } from '../models/carttemplate.model';
import { CartService } from '../services/cart.service';
import { Cart } from '../models/cart.model';
import { Customer } from '../models/customer.model';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
  export class MycartComponent {
    product: Product[] = [];
    carts:CartTemplate[]=[];
   c:Customer=JSON.parse(localStorage.getItem("User")!);
  
     constructor(private service:CartService){
      this.service.list(this.c.custid).subscribe(data=>this.carts=data);
   }
  
     async delete(cid:number){
      if(await confirm("Are you sure you want to remove this item from your cart")){
          await this.service.deleteItem(cid).subscribe();  
    }
    window.location.reload();
    }  
     }

