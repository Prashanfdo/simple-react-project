import { ADD_TO_CART } from "./_actions";
import { combineReducers } from "redux";

const initialState = { cartItems: [] };

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, payload]
      };
    default:
      return state;
  }
};

const coreReducer = combineReducers({
  cart: cartReducer
});

export default coreReducer;
