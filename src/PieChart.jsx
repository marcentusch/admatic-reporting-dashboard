import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import colors from "./colors";
import { Typography } from "@mui/material";

export const BasicPie = ({ data, title }) =>
  data.length == 0 ? null : (
    <>
      <Typography variant="h6" align="center" gutterBottom>
        {title}
      </Typography>
      <PieChart
        colors={[colors.blue, colors.lightBlue, colors.darkBlue, colors.green]}
        series={[
          {
            data,
          },
        ]}
        width={600}
        height={200}
      />
    </>
  );
