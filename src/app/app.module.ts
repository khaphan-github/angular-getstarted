import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './products/product.component';
import { ShoppingCartComponent } from './shopping-cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { Product } from './products/product';
import { AlertComponent } from './alert/alert.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products/:productId', component: ProductComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },

];

@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    ShoppingCartComponent,

    ProductListComponent,
    ProductComponent,
    AlertComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],

  providers: [
    Product
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }
