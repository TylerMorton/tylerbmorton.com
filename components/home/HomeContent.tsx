
import React from 'react';

// Joy UI Imports
import { Box } from '@mui/joy';

// Next Imports

// Custom Imports
import Banner from './Banner';
import Bio from './text_contents/Bio';
import Inspiration from './text_contents/Inspiration';
import Footer from '../footer';

function HomeContent() {
  return (
    <Box
      component='main'
      sx={(theme) => ({
        px: {
          xs: 2,
          md: 6,
        },
        overflowY: 'auto',
        py: { xs: `calc(${theme.spacing(0)} + var(--Header-height))` },
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        minWidth: 0,
        height: '100dvh',
        gap: 1,
      })
      }
    >
      <Banner />
      <Bio />
      <Inspiration />
      <Footer />
    </Box>
  )
}

export default HomeContent;