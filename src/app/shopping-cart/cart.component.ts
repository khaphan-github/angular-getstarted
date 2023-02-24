import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-shopping-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})

export class ShoppingCartComponent implements OnInit {
    
    
    constructor(private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        const routeParams = this.route.snapshot.paramMap;
    }
}