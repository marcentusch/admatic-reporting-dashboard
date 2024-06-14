import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import BarGraph from "./BarChart";
import { BasicPie } from "./PieChart";
import SideBarChart from "./SideBarChart";
import { Typography, Divider, Card, CardContent } from "@mui/material";
import GaugeChart from "./GaugeChart";

export default function BaseGrid() {
  const [adAccount, setAdAccount] = useState(null);
  const isLoading = adAccount?.campaigns[0] === undefined || null;
  const path = window.location.pathname;
  const parts = path.split("/");
  const accountId = parts[parts.length - 1];

  useEffect(() => {
    const importModule = async () => {
      try {
        const { campaigns } = await import(`./input/${accountId}-campaigns.js`);
        setAdAccount(campaigns);
      } catch (error) {
        console.error(
          `Failed to load campaigns for account ${accountId}:`,
          error
        );
      }
    };

    importModule();
  }, []);

  if (isLoading) return <p>loading...</p>;

  const insights = adAccount.campaigns[0].insights.data[0];
  const filteredActions = insights.actions.filter(
    (action) => Number(action.value) <= 500
  );
  const mappedConversions = insights.conversions.map((conversion, i) => ({
    id: Number(i),
    value: Number(conversion.value),
    label: conversion.action_type,
  }));

  const MetricCard = ({ title, value }) => (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h4">{value}</Typography>
      </CardContent>
    </Card>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h5" gutterBottom>
        Virksomhed: {adAccount.adAccountName}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Kampagne: {adAccount.campaigns[0].name}
      </Typography>
      <Divider />
      <Grid container my={2} spacing={2}>
        <Grid item xs={3}>
          <MetricCard title="Visninger" value={insights.impressions} />
        </Grid>
        <Grid item xs={3}>
          <MetricCard title="Rækkevidde" value={insights.reach} />
        </Grid>
        <Grid item xs={3}>
          <MetricCard title="Klik" value={insights.clicks} />
        </Grid>
        <Grid item xs={3}>
          <MetricCard title="Forbrug" value={`${insights.spend} DKK`} />
        </Grid>
      </Grid>
      <Grid container my={2} spacing={2}>
        <Grid item xs={6}>
          <BarGraph
            actionValues={filteredActions.map((action) => Number(action.value))}
            actionTypes={filteredActions.map((action) => action.action_type)}
          />
        </Grid>
        <Grid item xs={6}>
          <BasicPie data={mappedConversions} title="Fordeling af conversions" />
        </Grid>
      </Grid>
    </Box>
  );
}
