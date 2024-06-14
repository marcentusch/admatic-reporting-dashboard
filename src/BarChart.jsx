import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import colors from "./colors";
import { Typography } from "@mui/material";

const BarGraph = ({ actionValues, actionTypes }) =>
  !actionValues || !actionTypes ? null : (
    <>
      <Typography variant="h6" align="center" gutterBottom>
        Kampagnehandlinger og Værdier
      </Typography>
      <BarChart
        colors={[colors.blue, colors.darkBlue, colors.lightBlue, colors.green]}
        series={[{ data: actionValues }]}
        xAxis={[{ data: actionTypes, scaleType: "band" }]}
        height={290}
        margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
      />
    </>
  );

export default BarGraph;
