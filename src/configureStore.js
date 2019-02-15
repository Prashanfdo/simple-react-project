import { applyMiddleware, compose, createStore } from "redux";
import RootReducer from "./root-reducer";
import RootSaga from "./root-saga";
import createSagaMiddleware from "redux-saga";

export default function configureStore(preloadedState) {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const store = createStore(
    RootReducer,
    preloadedState,
    applyMiddleware(...middlewares)
  );

  sagaMiddleware.run(RootSaga);

  return store;
}
