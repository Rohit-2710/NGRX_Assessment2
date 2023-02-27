import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopProductsComponent } from './shop-products/shop-products.component';
import { ShopCartComponent } from './shop-cart/shop-cart.component';

const routes: Routes = [
  {path: 'products', component:ShopProductsComponent},
  {path: 'cart', component:ShopCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
