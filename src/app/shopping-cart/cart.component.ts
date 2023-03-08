import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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

    checkoutForm = this.formBuilder.group({
        name: '',
        address: ''
      });

    constructor(
        private route: ActivatedRoute,
        private cartService: CartService,
        private formBuilder: FormBuilder
    ) { }

    ngOnInit(): void {
        const routeParams = this.route.snapshot.paramMap;
    }
    removeProductFromCart = (product: Product): void => {
      
    }
    onSubmit(): void {
        // Process checkout data here
        this.cartService.clearCart(this.ProductList);
        console.warn('Your order has been submitted', this.checkoutForm.value);
        this.checkoutForm.reset();
      }
}