import { IconButton, Sheet, Typography } from '@mui/joy';
import React from 'react';
import ColorSchemeToggle from './colorSchemeToggle';
import { Menu } from 'react-feather';
import { SidebarContext } from './common/sidebar';
import Socials from './Socials';
function Appbar() {
  const {openSidebar} = React.useContext(SidebarContext)

  return (
    <Sheet
      sx={{
        display: { xs: 'flex' },
        alignItems: 'center',
        position: 'fixed',
        mb: 1,
        top: 0,
        width: '100vw',
        height: 'var(--Header-height)',
        zIndex: 9995,
        py: 1,
        px: 2,
        gap: 1,
        boxShadow: 'sm',
      }}
    >
      <IconButton 
        color='neutral'
        variant='outlined'
        aria-label='menu'
        onClick={() => openSidebar()}
      >
        <Menu />
      </IconButton>
      <Typography
        component={'h4'}
        level='h4'
        color='primary'
        sx={{ mr: 'auto', ml: 1 }}>
        TM
      </Typography>
      <Socials />
      <ColorSchemeToggle />
    </Sheet>
  );
}



export default Appbar;


