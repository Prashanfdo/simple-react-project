import { action } from "./_module";
import { ActionCreate } from "./../utils";

export const ADD_TO_CART = action("ADD_TO_CART");

export const addToCart = () => ActionCreate(ADD_TO_CART);
