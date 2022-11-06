// combineReducers come from redux that used for combining reducers that we just made.
import { combineReducers } from "redux";

// Reducers
import product from "./reducers/products-reducers";

export default combineReducers({
  product,
  // Here you can registering another reducers.
});
