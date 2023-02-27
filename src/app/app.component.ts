import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs"
import { selectCount,selectPrice } from './Cart-state-store/cart.selector';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'task';
 count$:Observable<number>;
 price$:Observable<number>;

 constructor(private store:Store){
  this.count$=store.select(selectCount);
  this.price$=store.select(selectPrice);
 }

 ngOnInit(): void {
   
 }
}
