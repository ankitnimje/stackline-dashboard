import React, { useMemo } from "react";
import MaterialReactTable from "material-react-table";

import { Container } from "./RetailSalesTable.styled";

export default function RetailSalesTable({ productInfo }) {
  const priceFormatter = (value) => {
    const formattedValue = parseFloat(value)
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, "$&,");
    return ` $${formattedValue}`;
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: "weekEnding", //access nested data with dot notation
        header: "Week Ending",
      },
      {
        accessorKey: "retailSales",
        header: "Retail Sales",
        Cell: ({ cell }) => {
          return <div> {priceFormatter(cell.getValue())} </div>;
        },
      },
      {
        accessorKey: "wholesaleSales", //normal accessorKey
        header: "Wholesale Sales",
        Cell: ({ cell }) => {
          return <div> {priceFormatter(cell.getValue())} </div>;
        },
      },
      {
        accessorKey: "unitsSold",
        header: "Units Sold",
      },
      {
        accessorKey: "retailerMargin",
        header: "Retailer Margin",
        Cell: ({ cell }) => {
          return <div> {priceFormatter(cell.getValue())} </div>;
        },
      },
    ],
    []
  );

  return (
    <Container>
      {productInfo && (
        <MaterialReactTable
          columns={columns}
          data={productInfo}
          enableTopToolbar={false}
        />
      )}
    </Container>
  );
}
