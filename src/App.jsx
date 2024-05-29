import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Copyright from './Copyright';
import BaseGrid from './Grid';

export default function App() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Admatic Rapportering
        </Typography>
        <Box sx={{ my: 8}}>
       <BaseGrid/> 

        </Box>
        <Copyright />
      </Box>
    </Container>
  );
}
