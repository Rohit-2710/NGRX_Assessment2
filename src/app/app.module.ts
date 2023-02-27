import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopProductsComponent } from './shop-products/shop-products.component';
import {StoreModule} from "@ngrx/store"
import { cartReducer } from './Cart-state-store/cart.reducer';

import { ShopCartComponent } from './shop-cart/shop-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopProductsComponent,
    ShopCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({cartEntries:cartReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
