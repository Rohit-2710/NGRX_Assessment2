import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductGroup, showCart } from '../Cart-state-store/cart.selector';
import { Observable } from 'rxjs';
import { addProduct } from '../Cart-state-store/cart.actions';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit {
  cartEntries$: Observable<ProductGroup[]>

  constructor(private store: Store) {
    this.cartEntries$ = store.select(showCart);
  }

  ngOnInit(): void {
  }

}
