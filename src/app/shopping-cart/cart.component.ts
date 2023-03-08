import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../products/product';
import { CartService } from './cart.service';

@Component({
    selector: 'app-shopping-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})

export class ShoppingCartComponent implements OnInit {
    ProductList: Array<Product> = this.cartService.getProductsFromCart();

    constructor(
        private route: ActivatedRoute,
        private cartService: CartService
    ) { }

    ngOnInit(): void {
        const routeParams = this.route.snapshot.paramMap;
    }
    removeProductFromCart = (product: Product): void => {
      
    }
}