import { combineReducers } from "redux";
import homePageReducer from "./pages/home/_reducer";
import coreReducer from "./core/_reducer";

const RootReducer = combineReducers({
  core: coreReducer,
  pages: combineReducers({
    home: homePageReducer
  })
});

export default RootReducer;
