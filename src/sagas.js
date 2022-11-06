import { spawn } from "redux-saga/effects";

// Sagas
import todoSaga from "./sagas/todo-sagas";

// Export the root saga
export default function* rootSaga() {
  console.log("Hello From Redux-Saga!");

  yield spawn(todoSaga);
}
