import { Injectable } from '@angular/core';
import { Product } from '../products/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private productsIncart: Array<Product> = [];

  constructor() { }

  public addProductToCart = (product: Product) => {
    if (product) {
      this.productsIncart.push(product);
      console.log('add product to cart success');
      return;
    }
    throw new Error("Product is empty when add to cart");
  }

  public getProductsFromCart = () => {
    return this.productsIncart;
  }
  
  public clearCart = () => {
    while(this.productsIncart.length > 0) {
      this.productsIncart.pop();
      console.log('clear cart success');
    }
  }
}
