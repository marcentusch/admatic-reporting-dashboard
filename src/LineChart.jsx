import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import colors from './colors';
import { generateRandomData } from './random';

export default function BasicLineChart() {
  // Generate random xAxis data with 6 values between 1 and 10
  const xAxisData = generateRandomData(6, 1, 10);


  const seriesData = generateRandomData(6, 1, 10);

  return (
    <LineChart
    colors={[colors.blue, colors.lightBlue, colors.darkBlue]}
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[{ data: seriesData }]}      width={500}
      height={300}
    />
  );
}
