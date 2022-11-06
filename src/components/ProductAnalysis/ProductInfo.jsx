import React from "react";

import {
  Container,
  Product,
  ProductTitle,
  SubTitle,
  Tags,
  Tag,
} from "./ProductInfo.styled";

export default function ProductInfo({ productInfo }) {
  return (
    <Container>
      <Product>
        <img
          src={productInfo?.image}
          alt="My Picture"
          height="100%"
          width="80%"
        />
        <ProductTitle>{productInfo?.title}</ProductTitle>
        <SubTitle>{productInfo?.subtitle}</SubTitle>
      </Product>
      <Tags>
        {productInfo?.tags?.map((tag) => (
          <>
            <Tag>{tag}</Tag>
          </>
        ))}
      </Tags>
    </Container>
  );
}
