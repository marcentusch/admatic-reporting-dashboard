import * as React from "react";

export default function CafeSundet() {
  return (
    <Box sx={{ my: 0 }}>
      <Typography variant="h4" component="h1" sx={{ mb: 0 }}>
        Cafe Sundet
      </Typography>
      <Box sx={{ my: 8 }}>
        <BaseGrid />
      </Box>
      <Copyright />
    </Box>
  );
}
