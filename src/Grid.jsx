import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import BarGraph from "./BarChart";
import BasicLineChart from "./LineChart";
import BasicPie from "./PieChart";
import SideBarChart from "./SideBarChart";
import { Typography, Divider } from "@mui/material";
import GaugeChart from "./GaugeChart";

export default function BaseGrid() {
  const [campaigns, setCampaigns] = useState([]);
  const path = window.location.pathname;
  const parts = path.split("/");
  const accountId = parts[parts.length - 1];

  useEffect(() => {
    const importModule = async () => {
      try {
        const { campaigns } = await import(`./input/${accountId}-campaigns.js`);
        setCampaigns(campaigns);
      } catch (error) {
        console.error(
          `Failed to load campaigns for account ${accountId}:`,
          error
        );
      }
    };

    importModule();
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h5" gutterBottom>
        Din hjemmesides besøg og hvor de kommer fra
      </Typography>
      <Divider />
      <Grid container my={2} spacing={2}>
        <Grid item xs={7}>
          <BarGraph />
        </Grid>
        <Grid item xs={5}>
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
        <Grid item xs={6}>
          <SideBarChart />
        </Grid>
        <Grid item xs={2}>
          <GaugeChart />
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
      {campaigns.adAccountName}
    </Box>
  );
}
