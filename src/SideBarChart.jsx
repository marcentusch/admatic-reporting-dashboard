import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import colors from './colors';
import { getRandomNumber } from './random';

const chartSetting = {
  xAxis: [
    {
      label: 'DKK ',
    },
  ],
  width: 500,
  height: 400,
};

const months = ['Jan', 'Fev', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

const dataset = months.map(month => ({
    london: getRandomNumber(1, 150),
    paris: getRandomNumber(1, 150),
    newYork: getRandomNumber(1, 150),
    seoul: getRandomNumber(1, 350),
    month: month,
}));

const valueFormatter = (value) => `${value}`;

export default function SideBarChart() {
  return (
    <BarChart
      dataset={dataset}
      yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[{ dataKey: 'seoul', label: 'Sales', valueFormatter, color: colors.blue}]}
      layout="horizontal"
      grid={{ vertical: true }}
      {...chartSetting}
    />
  );
}
