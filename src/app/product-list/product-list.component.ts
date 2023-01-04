import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductListService } from '../product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] | undefined ;
  constructor(private productService :ProductListService) { }

  ngOnInit(): void {
    this.getProduct();
  }
  private getProduct(){
    this.productService.getProductList().subscribe(data =>{
      this.products =data; 
    })
  }

}
