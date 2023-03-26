import React from 'react';
import { Box, Sheet, Typography } from '@mui/joy';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown } from 'react-feather';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { bounceIn } from 'react-animations';
const bounceAnimation = keyframes`${bounceIn}`;

const BounceDiv = styled.div`
    animation: 3s ease ${bounceAnimation};
    animation-iteration-count: infinite;`;

const scale = 10;

const welcomeText = [
  'Welcome to my website.', 1000 * scale,
  'Welcome to my journal.', 1000 * scale,
  'Welcome to my blog.', 1000 * scale,
  'Welcome to my space.', 1000 * scale,
];

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
        <Typography sx={{color: '#ebebef', my: 'auto'}} zIndex={2} level='h2' component='h4' textAlign={'center'}>
          <TypeAnimation
            sequence={welcomeText}
            speed={25}
            wrapper='span'
            cursor={false}
            repeat={Infinity}
          />
        </Typography>
        <Box>
        <Sheet sx={{
          ml: 'auto',
          mr: '20px',
          height: '50px',
          width: '50px',
          borderRadius: '50%',
          display:'flex',
          alignItems: 'center',
          justifyContent: 'center'
          }}>
            <BounceDiv>
            <ArrowDown />
            </BounceDiv>
        </Sheet>
      </Box>
      </Sheet>
    </Box>
  )
}


export default Banner;