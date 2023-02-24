import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
    id:string = '';
    name: string = '';
    image: string = ''
    price: GLfloat = 0;
    desc: string = '';
    
    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        const routeParams = this.route.snapshot.paramMap;
        const productIdFromRoute = Number(routeParams.get('productId'));

        this.id = productIdFromRoute.toString();
        // Fetch api to get product 
        console.log('Loading Product');
        // After get Product

        this.name = 'IPhone 13';
        this.image = 'https://didongviet.vn/pub/media/catalog/product/i/p/iphone-14-128gb-didongviet_1.jpg';
        this.price = 24000000;
        this.desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
}