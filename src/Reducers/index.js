import { combineReducers } from "redux";
import Products from "./Products";
import Carts from "./Carts";

const myPreducer = combineReducers({
  Products,
  Carts
});

export default myPreducer;
