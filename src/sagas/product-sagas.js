// Import the redux-saga/effects
import { put, call, takeEvery } from "redux-saga/effects";

// Import all actions and api's
import {
  SET_LOADING,
  GET_PRODUCT,
  GET_PRODUCT_REQUESTED,
} from "../actions/product-action";

// Import all api's
import { getProduct } from "../api/products-api";

// Here's the unique part, generator function*, function with asterisk(*)

// Get products
function* getProducts() {
  yield put({ type: SET_LOADING });

  const product = yield call(getProduct);

  yield put({ type: GET_PRODUCT, payload: product });
}

// Export the saga (todo-saga)
export default function* productSaga() {
  yield takeEvery(GET_PRODUCT_REQUESTED, getProducts);
}
