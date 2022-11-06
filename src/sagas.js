import { spawn } from "redux-saga/effects";

// Sagas
import productSaga from "./sagas/product-sagas";

// Export the root saga
export default function* rootSaga() {
  yield spawn(productSaga);
}
