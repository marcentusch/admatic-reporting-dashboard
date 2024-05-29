import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import colors from './colors';

export default function BarGraph() {
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomData(length, min, max) {
    const randomData = [];
    for (let i = 0; i < length; i++) {
        randomData.push(getRandomNumber(min, max));
    }
    return randomData;
}
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
