import { createSelector } from "reselect";
import { pageSelector } from "../root-selectors";

export const coreSelector = state => state && state.core;

export const cartSelector = createSelector(
  coreSelector,
  state => state && state.cart
);

export const cartItemsSelector = createSelector(
  cartSelector,
  state => state && state.cartItems
);
