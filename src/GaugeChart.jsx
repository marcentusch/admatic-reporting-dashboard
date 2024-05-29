import * as React from "react";
import Stack from "@mui/material/Stack";
import { Gauge } from "@mui/x-charts/Gauge";
import { getRandomNumber } from "./random";

export default function GaugeChart() {
  return (
    <Stack direction={{ xs: "row", md: "column" }} spacing={{ xs: 1, md: 3 }}>
      <Gauge width={100} height={100} value={getRandomNumber(0, 100)} />
      <Gauge width={100} height={100} value={getRandomNumber(0, 100)} />
      <Gauge width={100} height={100} value={getRandomNumber(0, 100)} />
    </Stack>
  );
}
