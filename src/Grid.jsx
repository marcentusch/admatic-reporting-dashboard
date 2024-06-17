import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import BarGraph from "./BarChart";
import { BasicPie } from "./PieChart";
import { Typography, Divider, Card, CardContent } from "@mui/material";
import { adAccounts } from "./input/adAccounts";

export default function BaseGrid() {
  const [adAccount, setAdAccount] = useState(null);
  const isLoading = adAccount?.campaigns[0] === undefined || null;
  const urlParams = new URLSearchParams(window.location.search);
  const accountId = urlParams.get("id");

  useEffect(() => {
    setAdAccount(adAccounts.find((a) => a.adAccountId === accountId));
  }, []);

  if (isLoading) return <p>loading...</p>;

  const insights = adAccount.campaigns[0].insights.data[0];
  const filteredActions = insights.actions.filter(
    (action) => Number(action.value) <= 500
  );
  const mappedConversions = insights.conversions?.map((conversion, i) => ({
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
      <Grid container my={4} spacing={2}>
        <Grid item xs={6}>
          <BarGraph
            title="Kampagnehandlinger og Værdier"
            actionValues={filteredActions.map((action) => Number(action.value))}
            actionTypes={filteredActions.map((action) => action.action_type)}
          />
        </Grid>
        <Grid item xs={6}>
          <BasicPie data={mappedConversions} title="Fordeling af conversions" />
        </Grid>
      </Grid>
      <Grid container my={2} spacing={2}>
        <Grid item xs={3}>
          <MetricCard title="CTR" value={parseFloat(insights.ctr).toFixed(1)} />
        </Grid>
        <Grid item xs={3}>
          <MetricCard
            title="Frekvens"
            value={parseFloat(insights.frequency).toFixed(1)}
          />
        </Grid>
        <Grid item xs={3}>
          <MetricCard
            title="CPC"
            value={`${parseFloat(insights.cpc).toFixed(1)} DKK`}
          />
        </Grid>
        <Grid item xs={3}>
          <MetricCard
            title="CPM"
            value={`${parseFloat(insights.cpm).toFixed(1)} DKK`}
          />
        </Grid>
        <Grid item xs={6}>
          <MetricCard
            title="CPP"
            value={`${parseFloat(insights.cpp).toFixed(1)} DKK`}
          />
        </Grid>
        <Grid item xs={6}>
          <MetricCard
            title="Inline Link Clicks"
            value={`${parseFloat(insights.inline_link_clicks).toFixed(1)}`}
          />
        </Grid>
      </Grid>
      <Grid container my={4} spacing={2}>
        <Grid item xs={12}>
          <BarGraph
            title="Omkostning pr. Handlingstype"
            actionValues={insights.cost_per_action_type.map((type) =>
              Number(type.value)
            )}
            actionTypes={insights.cost_per_action_type.map(
              (type) => type.action_type
            )}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
