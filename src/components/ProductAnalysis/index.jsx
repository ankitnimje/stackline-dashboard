import React from "react";

import ProductLineItem from "./ProductLineItem";
import { Container } from "./styled";
import data from "../../assets/stackline_frontend_assessment_data_2021.json";

export default function ProductAnalysis() {
  console.log({ data });

  return (
    <Container>
      {data?.map((item) => {
        return (
          <>
            <ProductLineItem data={item} />
            <ProductLineItem data={item} />
            <ProductLineItem data={item} />
            <ProductLineItem data={item} />
          </>
        );
      })}
    </Container>
  );
}
