import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import BarGraph from "./BarChart";
import BasicLineChart from "./LineChart";
import BasicPie from "./PieChart";
import SideBarChart from "./SideBarChart";
import { Typography, Divider } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BaseGrid() {
  const rowMargin = 2;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h5" gutterBottom>
        Din hjemmesides besøg og hvor de kommer fra
      </Typography>
      <Divider />
      <Grid container my={2} spacing={2}>
        <Grid item xs={8}>
          <BarGraph />
        </Grid>
        <Grid item xs={4}>
          <BasicLineChart />
        </Grid>
      </Grid>

      <Typography variant="h5" gutterBottom>
        Målbare henvendelser fra din hjemmeside
      </Typography>
      <Divider />
      <Grid container my={2} spacing={2}>
        <Grid item xs={4}>
          <BasicPie />
        </Grid>
        <Grid item xs={8}>
          <SideBarChart />
        </Grid>
      </Grid>

      <Typography variant="h5" gutterBottom>
        Dine annoncer (Google Ads), placeringer (SEO) og virksomhedprofil på
        Google
      </Typography>
      <Divider />
      <Grid container my={2} spacing={2}>
        <Grid item xs={8}>
          <BarGraph />
        </Grid>
        <Grid item xs={4}>
          <BasicPie />
        </Grid>
      </Grid>
    </Box>
  );
}
