import { Component, ViewChild } from '@angular/core';
import { Product } from '../products/product';
import { ProductComponent } from '../products/product.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  @ViewChild(ProductComponent) child: ProductComponent | undefined;
  products: Array<Product> = [];

  constructor() {
    this.products.push(
      {
        id: "1",
        image: "https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/14%20plus-2.jpeg",
        name: "Phone 01",
        desc: "Hero agency is planning an ad campaign with several different ads cycling through the banner. New ad components are added frequently by several different teams",
        price: 292000
      },
      {
        id: "2",
        image: "https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/14%20plus-2.jpeg",
        name: "Phone 02",
        desc: "Hero agency is planning an ad campaign with several different ads cycling through the banner. New ad components are added frequently by several different teams",
        price: 292000
      },
      {
        id: "3",
        image: "https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/14%20plus-2.jpeg",
        name: "Phone 03",
        desc: "Hero agency is planning an ad campaign with several different ads cycling through the banner. New ad components are added frequently by several different teams",
        price: 292000
      },
    );
  }

}