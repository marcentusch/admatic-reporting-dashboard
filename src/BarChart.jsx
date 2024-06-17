import React, { useState } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import colors from "./colors";
import { Typography, FormControlLabel, Switch } from "@mui/material";

const BarGraph = ({ title, actionValues, actionTypes }) => {
  const [isVertical, setIsVertical] = useState(true);

  const handleSwitchChange = () => {
    setIsVertical(!isVertical);
  };
  const combinedData = actionValues.map((value, index) => ({
    value: value,
    type: actionTypes[index],
  }));

  const chartSetting = {
    xAxis: [
      {
        label: "Kost (DKK)",
      },
    ],
    width: 600,
    height: 500,
  };
  return !actionValues || !actionTypes ? null : (
    <>
      <FormControlLabel
        control={<Switch checked={isVertical} onChange={handleSwitchChange} />}
        label="Skift Layout"
      />
      <Typography variant="h6" align="center" gutterBottom>
        {title}
      </Typography>
      {isVertical ? (
        <BarChart
          colors={[
            colors.blue,
            colors.darkBlue,
            colors.lightBlue,
            colors.green,
          ]}
          series={[{ data: actionValues }]}
          xAxis={[{ data: actionTypes, scaleType: "band" }]}
          height={290}
          margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
        />
      ) : (
        <BarChart
          colors={[
            colors.blue,
            colors.darkBlue,
            colors.lightBlue,
            colors.green,
          ]}
          dataset={combinedData}
          yAxis={[{ scaleType: "band", dataKey: "type" }]}
          series={[{ dataKey: "value" }]}
          layout="horizontal"
          grid={{ vertical: true }}
          {...chartSetting}
        />
      )}
    </>
  );
};
export default BarGraph;
