import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  box-shadow: 1px 1px 1px #d3d3d3;
  height: calc(100% - 30px);
  padding: 1rem;
`;

export const Product = styled.div`
  display: grid;
  justify-items: center;
  margin-bottom: 1rem;
`;

export const ProductTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const SubTitle = styled.div`
  font-size: 1rem;
  text-align: center;
  color: #899499;
`;

export const Tags = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  grid-gap: 5px;
`;

export const Tag = styled.span`
  border: 1px solid #e5e4e2;
  padding: 2px 10px;
  border-radius: 3px;
`;
