import React from 'react';
import {Box, Sheet, Typography } from '@mui/joy';
import { TypeAnimation } from 'react-type-animation';

const scale = 10

const textAnim = [
  'Welcome to my site.', 1000 * scale,
  'I hope you are having a great moring.', 75 * scale,
  'I hope you are having a great morning.', 3000 * scale,
  'I hope you are having a great day.', 30000 * scale,
  'I hope you are having a great evening.', 3000 * scale,
  'I hope you are having a great night.', 30000 * scale,
]


function Banner() {

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
    <Sheet
      sx={{
        backgroundColor: 'transparent',
        width: '100%',
        mx: 'auto',
        mt: 10,
        mb: 2,
        py: 3,
        px: 2,
        display: 'flex',
        flexDirection: 'column',
        height: '500px',
        gap: 2,
        borderRadius: 'sm',
        justifyContent: 'center',
      }}
    >
      <Typography level='h2' component='h4' textAlign={'center'}>
      <TypeAnimation 
        sequence={textAnim}
        speed={25}
        wrapper='span'
        cursor={false}
        repeat={Infinity}
      /> 
      </Typography>
    </Sheet>
  </Box>
  )
}


export default Banner;