import { takeEvery, put, call } from "redux-saga/effects";
import {
  LOAD_PRODUCTS,
  loadProductsSuccess,
  loadProductsFail
} from "./_actions";

export default function* homeSaga() {
  yield takeEvery(LOAD_PRODUCTS, loadProducts);
}

function* loadProducts() {
  try {
    let data = yield call(loadProductsService);
    yield put(loadProductsSuccess(data));
  } catch (error) {
    yield put(loadProductsFail());
  }
}

async function loadProductsService() {
  let res = await fetch("http://localhost:8000/api/products");
  return res.json();
}
