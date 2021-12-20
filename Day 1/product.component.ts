import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent{

  public prodArray:Product[]=[
    {pid:1011,pname:"Laptop", price:10000,category:"Electronics",quantity:10},
    {pid:1012,pname:"Phone", price:8000,category:"Electronics",quantity:5},
    {pid:1013,pname:"Book", price:2000,category:"Misc",quantity:24},
    {pid:1014,pname:"Car", price:803000,category:"Automobiles",quantity:5},
    {pid:1015,pname:"Primer", price:1400,category:"Cosmetics",quantity:10}
  ]

  pname:string  = "";
  unitPrice:number  = 0;
  quantity:number  = 0;
  total:number = 0;

  getTotal_click()
  {
    
      this.total = this.unitPrice*this.quantity;
   
  }


}
