import { createAction, props } from "@ngrx/store";
import { Product } from "../products";
export const addProduct=createAction("Add Product", props<Product>());