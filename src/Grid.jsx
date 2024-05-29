import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import BarGraph from './BarChart';
import BasicLineChart from './LineChart';
import BasicPie from './PieChart';
import SideBarChart from './SideBarChart';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BaseGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
            <BarGraph/>
        </Grid>
        <Grid item xs={4}>
            <BasicLineChart/>
        </Grid>
        <Grid item xs={4}>
          <BasicPie/>
        </Grid>
        <Grid item xs={8}>
            <SideBarChart/>
        </Grid>
      </Grid>
    </Box>
  );
}