import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import colors from "./colors";
import { getRandomNumber } from "./random";

export default function BasicPie() {
  return (
    <PieChart
      colors={[colors.blue, colors.lightBlue, colors.darkBlue]}
      series={[
        {
          data: [
            { id: 0, value: getRandomNumber(1, 100), label: "series A" },
            { id: 1, value: getRandomNumber(1, 100), label: "series B" },
            { id: 2, value: getRandomNumber(1, 100), label: "series C" },
          ],
        },
      ]}
      width={400}
      height={200}
    />
  );
}
