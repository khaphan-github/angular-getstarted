import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './products/product.component';
import { ShoppingCartComponent } from './shopping-cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { Product } from './products/product';
import { AlertComponent } from './alert/alert.component';
import { ProductListService } from './product-list/product-list.service';
import { ShippingComponent } from './shipping/shipping.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products/:productId', component: ProductComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'shipping', component: ShippingComponent },
];

@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    ShoppingCartComponent,
    ShippingComponent,
    ProductListComponent,
    ProductComponent,
    AlertComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],

  providers: [
    Product,
    ProductListService
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }
