import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductListService } from '../product-list/product-list.service';
import { CartService } from '../shopping-cart/cart.service';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  @Input() productItem: Product = new Product();

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductListService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    // Find the product that correspond with the id provided in route.
    if (productIdFromRoute) {
      this.productsService
        .getProductById(productIdFromRoute.toString())
        .then((product) => {
          this.productItem = product;
        })
        .catch((error) => {
          console.error(error);
        })
    }
  }

  alertProductToShareByName(productName?: string) {
    alert("Sản phẩm " + productName + " đã được chia sẽ!");
  }

  onNotifyWhenProductSaleByName(productName?: string) {
    alert("Chúng tôi sẽ thông báo cho bạn mỗi khi sản phẩm " + productName + " giảm giá!");
  }

  addProductToCart(product: Product) {
    confirm("Bạn muốn thêm sản phẩm " + product.name + " vào giỏ hàng?");
    this.cartService.addProductToCart(product);
    console.log('Add product to cart success');
  }
}