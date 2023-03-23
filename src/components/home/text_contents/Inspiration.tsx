import React from 'react';
import {Box, Sheet, Typography} from '@mui/joy';

function Inspiration() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
    <Sheet
      variant='outlined'
      sx={{
        width: '100',
        mx: 'auto',
        my: 1,
        py: 3,
        px: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        borderRadius: 'sm',
        boxShadow: 'lg',
      }}
    >
      <Typography level='h4' component='h4'>
        Inspiration for the site
      </Typography>
      <Typography level='body1' component='h1'>
        {`I decided to build this site first and for most as a fun project where I can record my \
        progress as a developer, and second as a way to share my interests and non-technical pursuits.
      `}
      </Typography>
    </Sheet>
  </Box>
  )
}


export default Inspiration;