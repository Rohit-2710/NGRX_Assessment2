import {createReducer, on} from "@ngrx/store";
import { Product } from "../products";
import { addProduct } from "./cart.actions";

export const initialState:Product[] = [];
export const cartReducer=createReducer(
initialState,

on(addProduct, (entries, product)=>{
    const entriesClone:Product[]=JSON.parse(JSON.stringify(entries));
    entriesClone.push(product);
    return entriesClone;
})

)

