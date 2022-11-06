// combineReducers come from redux that used for combining reducers that we just made.
import { combineReducers } from "redux";

// Reducers
import todo from "./reducers/products-reducers";

export default combineReducers({
  todo,
  // Here you can registering another reducers.
});
