import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  addProduct(p:Product){
    this.http.post("http://localhost:9001/product/add",p).subscribe(data=>data=p);
  }

  getProduct(id:number){
    return this.http.get("http://localhost:9004/product/"+id);
  }

  listProduct(){
    return this.http.get<Product[]>("http://localhost:9004/product/all");
  }

  listByCat(cat:string){
    return this.http.get<Product[]>("http://localhost:9004/product/category/"+cat);
  }

  delete(id:number){
    this.http.delete("http://localhost:9001/product/"+id).subscribe();
  }

  update(p:Product){
    this.http.put("http://localhost:9001/product/update",p).subscribe(data=>data=p);
  }




}
