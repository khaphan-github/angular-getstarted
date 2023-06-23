import { Component, ViewChild } from '@angular/core';
import { Product } from '../products/product';
import { ProductComponent } from '../products/product.component';
import { ProductListService } from './product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products: Array<Product> = [];

  constructor (productsService: ProductListService) {
    productsService.getListOfProduct()
    .then((products) => {
      this.products = products;
    })
    .catch((error) => {
      console.error(error);
    })
  }
}