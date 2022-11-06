import React from "react";
import { Provider } from "react-redux";
import store from "../../store";

import { Container } from "./styled";

import Header from "../Header";
import ProductAnalysis from "../ProductAnalysis";
import DetailedAnalysis from "../ProductAnalysis/DetailedAnalysis";

export default function App() {
  return (
    <Provider store={store}>
      <Container>
        <Header />
        {/* <ProductAnalysis /> */}
        <DetailedAnalysis />
      </Container>
    </Provider>
  );
}

// https://api.jsonserve.com/og_duG
