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
import { BeatLoader } from "react-spinners";

import ProductInfo from "./ProductInfo";
import RetailSalesGraph from "./RetailSalesGraph";
import RetailSalesTable from "./RetailSalesTable";

export default function DetailedAnalysis() {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: GET_PRODUCT_REQUESTED });
  }, []);

  if (product.loading)
    return (
      <div
        style={{
          textAlign: "center",
          height: "100vh",
        }}
      >
        <BeatLoader />
      </div>
    );

  return (
    <Container>
      <LeftSection>
        <ProductInfo productInfo={product?.product} />
      </LeftSection>
      <RightSection>
        <RetailSalesGraph productInfo={product?.product} />
        <RetailSalesTable productInfo={product?.product?.sales} />
      </RightSection>
    </Container>
  );
}
