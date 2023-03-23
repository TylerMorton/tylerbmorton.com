import { Box, Typography } from '@mui/joy';
import React from 'react';
import Copyright from './Copyright';

function Footer() {
  return(
    <Box sx={{mx: 1, my: 1, px: 1, py: 1}}>
      <Typography>
      This is a footer
      </Typography>
      <Copyright />
    </Box>
  );
}


export default Footer;


