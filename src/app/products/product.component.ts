import { Component, Input } from '@angular/core';
import { Product } from './product';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})

export class ProductComponent {
    @Input() productItem: Product;

    constructor(product: Product) {
        this.productItem = product;
    }
    
  alertProductToShareByName(productName: string) {
    alert("Sản phẩm " + productName + " đã được chia sẽ!");
  }
  onNotifyWhenProductSaleByName(productName: string) {
    alert("Chúng tôi sẽ thông báo cho bạn mỗi khi sản phẩm " + productName + " giảm giá!");
  }
}