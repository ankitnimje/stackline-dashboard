import React, { useMemo } from "react";
import MaterialReactTable from "material-react-table";

import { Container } from "./RetailSalesTable.styled";

export default function RetailSalesTable({ productInfo }) {
  const columns = useMemo(
    () => [
      {
        accessorKey: "weekEnding", //access nested data with dot notation
        header: "Week Ending",
      },
      {
        accessorKey: "retailSales",
        header: "Retail Sales",
      },
      {
        accessorKey: "wholesaleSales", //normal accessorKey
        header: "Wholesale Sales",
      },
      {
        accessorKey: "unitsSold",
        header: "Units Sold",
      },
      {
        accessorKey: "retailerMargin",
        header: "Retailer Margin",
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
