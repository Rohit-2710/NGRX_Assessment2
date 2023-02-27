import { Component, OnInit } from '@angular/core';
import { Product } from '../products';
import {Store} from "@ngrx/store"
import { addProduct } from '../Cart-state-store/cart.actions';
import { Injectable } from '@angular/core';



export const Products=[
  {
    id:1,
    name:"Redmi A11",
    price:49.99,
    image:"https://i01.appmifile.com/webfile/globalimg/in/cms/303D1336-249C-0113-DA94-01ED533069F8.jpg"
  },
  {
    id:2,
    name:"Samsung S20",
    price:99.99,
    image:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1662417218/Croma%20Assets/Communication/Mobiles/Images/217249_al0f6i.png/mxw_640,f_auto"
  
  },
  {
    id:3,
    name:"IPhone",
    price:199.99,
    image:"https://www.aptronixindia.com/media/catalog/product/i/p/iphone_14_pro_deep_purple_pdp_image_position-1a_avail__en-in.jpg"
  }
]

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-shop-products',
  templateUrl: './shop-products.component.html',
  styleUrls: ['./shop-products.component.css']
})
export class ShopProductsComponent implements OnInit {
constructor(private store:Store){}
ngOnInit(): void {}

public products():Product[]{
  return Products

}
public buyProduct(product:Product){
  this.store.dispatch(addProduct(product))
}
}
