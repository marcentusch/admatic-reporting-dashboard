import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import colors from './colors';
import { generateRandomData } from './random';

export default function BarGraph() {
  return (
    <BarChart
        colors={[colors.blue, colors.darkBlue, colors.lightBlue]}
        series={[
          { data: generateRandomData(4, 1, 100) },
          { data: generateRandomData(4, 1, 100) },
          { data: generateRandomData(4, 1, 100) },
          { data: generateRandomData(4, 1, 100) },
      ]}
      height={290}
      xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
    />
  );
}
