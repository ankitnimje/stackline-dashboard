import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GET_PRODUCTS,
  GET_PRODUCT_REQUESTED,
} from "../../actions/product-action";

import {
  Container,
  LeftSection,
  RightSection,
} from "./DetailedAnalysis.styled";

import ProductInfo from "./ProductInfo";
import RetailSalesGraph from "./RetailSalesGraph";
import RetailSalesTable from "./RetailSalesTable";

export default function DetailedAnalysis() {
  const product = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: GET_PRODUCT_REQUESTED });
  }, []);

  // console.log({ product });

  return (
    <Container>
      <LeftSection>
        <ProductInfo productInfo={product.product} />
      </LeftSection>
      <RightSection>
        <RetailSalesGraph productInfo={product.product} />
        <RetailSalesTable />
      </RightSection>
    </Container>
  );
}
