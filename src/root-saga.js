import { fork } from "redux-saga/effects";
import homeSaga from "./pages/home/_sagas";

export default function* RootSaga() {
  yield fork(homeSaga);
}
