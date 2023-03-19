import React from 'react';
import {Box, Sheet, Typography} from '@mui/joy';
import MyImage from '../MyImage';

function Bio() {
  return (
    <Box sx={{ 
      display: 'flex',
      alignItems: 'center',
      '--Card-radius': (theme) => theme.vars.radius.sm,
      }}>
    <Sheet
      variant='outlined'
      sx={{
        flex: 1,
        mx: 'auto',
        my: 1,
        py: 3,
        px: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 2,
        borderRadius: 'sm',
        boxShadow: 'lg',
      }}
    >
      <MyImage />
      <Typography level='h4' component='h4' textAlign={'center'}>
        About me
      </Typography>
      <Typography level='body1' component='h1'>
        {`My name is Tyler Morton. I am a student of Computer Science \
       at the University of California, Santa Cruz and aspiring Software Enginner. \
       I was born and raised in San Diego and am currently living in Santa Cruz. \
        When I'm not programming or researching new technology trends I'm touching grass \
        either by travelling to unique places, climbing up rock faces, or summiting mountains.
        I decided to build this site first and for most as a fun project where I can record my \
        progress as a developer, and second as a way to share my interests and non-technical pursuits.
      `}
      </Typography>
    </Sheet>
  </Box>
  )
}


export default Bio;