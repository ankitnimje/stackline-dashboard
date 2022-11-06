import React from "react";

import { Container } from "./styled";

import Header from "../Header";
import ProductAnalysis from "../ProductAnalysis";
import DetailedAnalysis from "../ProductAnalysis/DetailedAnalysis";

export default function App() {
  return (
    <Container>
      <Header />
      {/* <ProductAnalysis /> */}
      <DetailedAnalysis />
    </Container>
  );
}

// https://api.jsonserve.com/og_duG
