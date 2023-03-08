import { Injectable } from '@angular/core';
import { Product } from '../products/product';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  private products: Array<Product> = [];

  constructor() {
    this.products = [
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
      }
    ];
  }

  public getProductById = (id: string): Promise<Product> => {
    const product: any = this.products.find(p => p.id === id);
    if (product as Product) {
      return Promise.resolve(product);
    }
    return Promise.reject(new Error("product not found"));
  }

  public getListOfProduct(): Promise<Product[]> {
    if (this.products) {
      return Promise.resolve(this.products)
    }
    return Promise.reject(new Error("products not found"));
  }
}
