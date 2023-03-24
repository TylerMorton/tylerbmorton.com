import { Box, Typography } from '@mui/joy';
import React from 'react';
import Socials from '../Socials';
import Copyright from './Copyright';

function Footer() {
  return(
    <Box sx={{
      bgcolor: (theme) => theme.vars.palette.background.body,
      px: 1, py: 3,
      }}>
      <Box
      sx={{
      borderTop: '2px solid',
      borderBottom: '2px solid',
      borderColor: 'divider',
      my: 3,
      py: 2,
      px: 10,
        display: 'flex'
      }}
      >
      <Typography component={'h2'} level='h5' sx={{mr: 'auto', display: 'flex', alignItems:'center', textAlign: 'center'}}>
      Site Developed By Tyler Morton
      </Typography>
      <Socials />
      </Box>
      <Copyright />
    </Box>
  );
}


export default Footer;


