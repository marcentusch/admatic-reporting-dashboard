import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Copyright from "./Copyright";
import BaseGrid from "./Grid";
import AdmaticLogo from "./AdmaticLogo";
import CircularProgress from "@mui/material/CircularProgress";

export default function App() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 0 }}>
        {loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <CircularProgress size="7rem" />
          </Box>
        ) : (
          <>
            <AdmaticLogo />
            <Typography variant="h4" component="h1" sx={{ mb: 0 }}>
              Admatic Rapportering
            </Typography>
            <Box sx={{ my: 8 }}>
              <BaseGrid />
            </Box>
            <Copyright />
          </>
        )}
      </Box>
    </Container>
  );
}
