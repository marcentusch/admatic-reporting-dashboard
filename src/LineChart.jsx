import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import colors from "./colors";
import { generateRandomData } from "./random";

export default function BasicLineChart() {
  return (
    <LineChart
      colors={[colors.blue, colors.lightBlue, colors.darkBlue]}
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[{ data: generateRandomData(6, 1, 10) }]}
      width={500}
      height={300}
    />
  );
}
