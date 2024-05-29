import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import colors from "./colors";

export default function BasicPie() {
  return (
    <PieChart
      colors={[colors.blue, colors.lightBlue, colors.darkBlue]}
      series={[
        {
          data: [
            { id: 0, value: 10, label: "series A" },
            { id: 1, value: 15, label: "series B" },
            { id: 2, value: 20, label: "series C" },
          ],
        },
      ]}
      width={400}
      height={200}
    />
  );
}
