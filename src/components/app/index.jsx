import React from "react";
import { Provider } from "react-redux";
import store from "../../store";

import { Container } from "./styled";

import Header from "../Header";
import DetailedAnalysis from "../ProductAnalysis/DetailedAnalysis";

export default function App() {
  return (
    <Provider store={store}>
      <Container>
        <Header />
        <DetailedAnalysis />
      </Container>
    </Provider>
  );
}
