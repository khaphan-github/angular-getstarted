import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../products/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  productsIncart: Array<Product> = [
    {
      id: "3",
      image: "https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/14%20plus-2.jpeg",
      name: "Phone 03",
      desc: "Hero agency is planning an ad campaign with several different ads cycling through the banner. New ad components are added frequently by several different teams",
      price: 292000
    }
  ];

  constructor(
    private http: HttpClient
  ) {  }

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
  
  public clearCart = (productList: Array<Product>) => {
    while(productList.length > 0) {
      this.productsIncart.pop();
      console.log('clear cart success');
    }
  }
  public getShippingPrices = () => {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
}
