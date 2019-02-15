import { action } from "./_module";
import { ActionCreate } from "./../../utils";

export const LOAD_PRODUCTS = action("LOAD_PRODUCTS");
export const LOAD_PRODUCTS_SUCCESS = action("LOAD_PRODUCTS_SUCCESS");
export const LOAD_PRODUCTS_FAIL = action("LOAD_PRODUCTS_FAIL");

export const loadProducts = () => ActionCreate(LOAD_PRODUCTS);
export const loadProductsSuccess = data =>
  ActionCreate(LOAD_PRODUCTS_SUCCESS, data);
export const loadProductsFail = () => ActionCreate(LOAD_PRODUCTS_FAIL);
