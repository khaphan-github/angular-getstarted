import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Product } from "../products/product";

@Component({
    selector: 'app-product-alerts',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.css']
})
export class AlertComponent {
    @Input() product!: Product;
    @Output() notify = new EventEmitter();
}