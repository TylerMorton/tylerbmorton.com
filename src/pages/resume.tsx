import * as React from 'react';

// Joy UI Imports
import { Box, CssBaseline, Sheet } from '@mui/joy';

import { FileText } from 'react-feather';

import Appbar from '../components/Appbar';
import ApplicationMain from '../components/ApplicationMain';
import { SidebarContext } from '../components/common/sidebar';
import ListTitle from '../components/post_components/ListTitle';
import Footer from '../components/footer';
import Header from '../components/Head';


export default function Projects() {
  const { closeSidebar } = React.useContext(SidebarContext);

  React.useEffect(() => {
    closeSidebar();
  }, [])

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100dvh'
    }}>
      <Header />
      <CssBaseline />
      <Appbar />
      <ApplicationMain slug={'travels'}>
        <Box
          component='main'
          sx={(theme) => ({
            px: {
              xs: 4,
              md: 12,
              lg: 30,
            },
            py: { xs: `calc(${theme.spacing(0)} + var(--Header-height))` },
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            minWidth: 0,
            height: '100dvh',
            overflowY: 'auto',
            gap: 1,
          })
          }
        >
          <ListTitle icon={<FileText />} text={'My Resume'} />
          <Sheet variant="outlined" sx={{
            p: 1,
            my: 1,
            py: 3,
            height: '1020px',
            borderRadius: '10px',
            boxShadow: 'lg'
          }}>
            <iframe src="/resume.pdf" height={'1000px'} width={'100%'} />
          </Sheet>
        </Box>
      </ApplicationMain>
      <Footer />
    </Box>
  )
}

