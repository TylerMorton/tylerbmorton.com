
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
        px: 0,
        overflowY: 'auto',
        py: { xs: `calc(${theme.spacing(0)} + var(--Header-height))` },
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        minWidth: 0,
        height: '100dvh',
        gap: 0,
        overflowX: 'hidden'
      })
      }
    >
      <Box sx={{
        px: {
          xs: 4,
          md: 12,
          lg: 30,
        },
      }}>

      </Box>
      <Banner />
      <Box sx={{
        height: '100',
        width: '100vw',
        position: 'relative',
        bgcolor: (theme) => theme.vars.palette.background.body,
        pt: 10,
        px: {
          xs: 4,
          md: 12,
          lg: 30,
        },
      }}>

      <Bio />
      <Inspiration />
      </Box>
      <Footer />
    </Box>
  )
}

export default HomeContent;