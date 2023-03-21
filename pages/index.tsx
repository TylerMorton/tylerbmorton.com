import * as React from 'react';

import Head from 'next/head'

// Joy UI Imports
import HomeContent from '@/components/home/HomeContent';
import Appbar from '@/components/Appbar';
import { Box, CssBaseline } from '@mui/joy';
import Sidebar from '@/components/Sidebar';
import { closeSidebar } from '@/components/common/sidebar';


export default function Home() {
  React.useEffect(() => {
    closeSidebar();
  }, [])

  return (
    <Box sx={{ display: 'flex', height: '100dvh'}}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CssBaseline />
      <Appbar />
      <Sidebar selected={'/'} />
      <HomeContent />
    </Box>
  )
}
