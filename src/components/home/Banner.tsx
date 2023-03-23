import React from 'react';
import { Box, Sheet, Typography } from '@mui/joy';
import { TypeAnimation } from 'react-type-animation';

const scale = 10

function timeSpecifier() {
  const date = new Date();
  const hour = date.getHours();
  if (hour >= 7 && hour < 5) {
    return 'night';
  }
  if (hour >= 5 && hour < 12) {
    return 'morning';
  }
  if (hour >= 12 && hour < 3) {
    return 'afternoon';
  }
  return 'evening';
}

const welcomeText = [
  'Welcome to my site.', 1000 * scale,
  `I hope you are having a great ${timeSpecifier()}.`, 1000
];

function Banner() {
  timeSpecifier();
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Sheet
        sx={{
          backgroundColor: 'transparent',
          width: '100%',
          mx: 'auto',
          mt: 10,
          mb: 2,
          pb: 3,
          px: 2,
          display: 'flex',
          flexDirection: 'column',
          height: '550px',
          gap: 2,
          borderRadius: 'sm',
          justifyContent: 'center',
        }}
      >
        <Typography sx={{color: '#ebebef'}} zIndex={2} level='h2' component='h4' textAlign={'center'}>
          <TypeAnimation
            sequence={welcomeText}
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