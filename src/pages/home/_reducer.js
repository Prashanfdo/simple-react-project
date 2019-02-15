import {
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_FAIL,
  LOAD_PRODUCTS
} from "./_actions";

const homePageReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case LOAD_PRODUCTS:
      return {
        ...state,
        productsLoading: true,
        products: undefined,
        productsError: undefined
      };
    case LOAD_PRODUCTS_SUCCESS:
      return {
        ...state,
        productsLoading: false,
        products: payload
      };
    case LOAD_PRODUCTS_FAIL:
      return {
        ...state,
        productsLoading: false,
        productsError: true
      };
    default:
      return state;
  }
};

export default homePageReducer;
