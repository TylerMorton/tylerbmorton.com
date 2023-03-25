import * as React from 'react';

// Next Imports
import Image from 'next/image';

// Joy UI Imports
import { Box, CssBaseline } from '@mui/joy';

import HomeImage from '../../public/homepic.jpeg'

import HomeContent from '../components/home/HomeContent';
import Appbar from '../components/Appbar';
import ApplicationMain from '../components/ApplicationMain';
import { SidebarContext } from '../components/common/sidebar';
import Header from '../components/Head';


export default function Home() {
  const { closeSidebar } = React.useContext(SidebarContext);
  React.useEffect(() => {
    closeSidebar();
  }, [])

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100dvh' }}>
      <Header />
      <CssBaseline />
      <Box
        sx={{
          position: 'fixed',
          height: '100vh',
          width: '100vw',
          overflow: 'hidden',
          zIndex: -1,
        }}>
        <Image
          priority={true}
          alt={'a nice evening image of berlin'}
          src={HomeImage}
          fill
          placeholder='empty'
          objectFit='cover'
        />
      </Box>
      <Appbar />
      <ApplicationMain slug={''} >
        <HomeContent />
      </ApplicationMain>
    </Box>
  )
}
