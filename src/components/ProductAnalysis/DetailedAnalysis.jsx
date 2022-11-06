import React from "react";

import {
  Container,
  LeftSection,
  RightSection,
} from "./DetailedAnalysis.styled";

import ProductInfo from "./ProductInfo";
import RetailSalesGraph from "./RetailSalesGraph";
import RetailSalesTable from "./RetailSalesTable";

export default function DetailedAnalysis() {
  return (
    <Container>
      <LeftSection>
        <ProductInfo />
      </LeftSection>
      <RightSection>
        <RetailSalesGraph />
        <RetailSalesTable />
      </RightSection>
    </Container>
  );
}
