import React from "react";

import { Container } from "./ProductLineItem.styled";

export default function ProductLineItem({ data }) {
  return (
    <Container>
      <img src={data?.image} alt="car" width="100" height="100" />
    </Container>
  );
}
