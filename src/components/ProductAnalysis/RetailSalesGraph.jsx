import React from "react";

import { Container, RetailTitle } from "./RetailSalesGraph.styled";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import _ from "lodash";
import moment from "moment";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        display: false,
      },
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      position: "top",
    },
  },
};

const labels = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

export default function RetailSales({ productInfo }) {
  productInfo?.sales?.forEach((d) => {
    d.dateObj = moment(d.weekEnding);
  });

  function buildData(data, keyName) {
    let result = [];
    _.forEach(data, (val, key) => {
      let totalRetailCounts = val.reduce((acc, curr) => {
        return acc + curr.retailSales;
      }, 0);
      let totalMarginCounts = val.reduce((acc, curr) => {
        return acc + curr.retailerMargin;
      }, 0);
      result.push({
        [keyName]: key,
        retailCount: totalRetailCounts,
        marginCount: totalMarginCounts,
      });
    });
    return result;
  }

  function groupAndBuild(data, dateMethod, groupKey) {
    let groupedData = _.groupBy(data, (d) => {
      return d.dateObj[dateMethod]();
    });
    return buildData(groupedData, groupKey);
  }

  const retailSalesMonthlyData = groupAndBuild(
    productInfo.sales,
    "month",
    "month",
    "sales"
  );

  const retailMarginMonthlyData = groupAndBuild(
    productInfo.sales,
    "month",
    "month",
    "margin"
  );

  const data = {
    labels,
    datasets: [
      {
        label: "Retail Sales",
        data: retailSalesMonthlyData?.map((sale) => {
          return sale.retailCount;
        }),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        lineTension: 0.2,
      },
      {
        label: "Retail Margin",
        data: retailMarginMonthlyData?.map((sale) => {
          return sale.marginCount;
        }),
        borderColor: "#818589",
        backgroundColor: "#818589",
        lineTension: 0.2,
      },
    ],
  };

  return (
    <Container>
      <RetailTitle>Retail Sales</RetailTitle>
      <Line options={options} data={data} />
    </Container>
  );
}
