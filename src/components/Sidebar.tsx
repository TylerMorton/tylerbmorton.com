import * as React from 'react';

import Router from 'next/router';

// Mui Joy Imports
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListSubheader from '@mui/joy/ListSubheader';
import SideBarListItem from './SideBarListItem';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';

import { Home, HardDrive, Map, Globe, Sunset, MoreHorizontal,  Headphones, Coffee } from 'react-feather';
import { SidebarContext } from './common/sidebar';

interface Props {
  selected: string
}

export default function Sidebar({selected}: Props) {
  const {closeSidebar} = React.useContext(SidebarContext);
  const buttonHandler = (str: string) => {
    if (str === selected) {
      closeSidebar();
      return;
    }
    Router.push(str);
  }
  return (
    <>
      <Box
        className="Sidebar-overlay"
        sx={{
          position: 'fixed',
          zIndex: 9998,
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          bgcolor: 'background.body',
          opacity: 'calc(var(--SideNavigation-slideIn, 0) - 0.2)',
          transition: 'opacity 0.4s',
          transform:'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--FirstSidebar-width, 0px)))',
        }}
        onClick={() => closeSidebar()}
      />
      <Sheet
        className="Sidebar"
        sx={{
          position: 'fixed',
          transform: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--FirstSidebar-width, 0px)))',
          borderRight: '1px solid',
          borderColor: 'divider',
          transition: 'transform 0.4s',
          zIndex: 9999,
          height: '100dvh',
          p: 2,
          py: 3,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <List
          sx={{
            '--ListItem-radius': '8px',
            '--ListItem-minHeight': '32px',
            '--List-gap': '4px',
          }}
        >
          <ListSubheader role="presentation" sx={{ color: 'text.primary' }}>
            Menu
          </ListSubheader>
          <SideBarListItem icon={<Home />} text={'Home'} onClick={() => {buttonHandler('/')}} />
          <SideBarListItem icon={<HardDrive />} text={'My Projects'} onClick={() => {buttonHandler('/projects')}} />
          <SideBarListItem icon={<Map/>} text={'My Travels'} onClick={() => {buttonHandler('/travels')}} />
          <SideBarListItem icon={<Sunset/>} text={'Events'} onClick={() => {buttonHandler('/events')}} />
          <SideBarListItem icon={<Headphones/>} text={'Music'} onClick={() => {buttonHandler('/music')}} />
          <SideBarListItem icon={<Coffee/>} text={'Food & Drink'} onClick={() => {buttonHandler('/food-drink')}} />
          <SideBarListItem icon={<Globe/>} text={'Language'} onClick={() => {buttonHandler('/travels')}} />
          <SideBarListItem icon={<MoreHorizontal/>} text={'Miscellaneous'} onClick={() => {buttonHandler('/travels')}} />
        </List>
        <Box sx={{ pl: 1, mt: 'auto', display: 'flex', alignItems: 'center' }}>
          <div>
            <Typography fontWeight="lg" level="body2">
              Tyler Morton
            </Typography>
            <Typography level="body2">tbmorton@ucsc.edu</Typography>
          </div>
          <IconButton variant="plain" sx={{ ml: 'auto' }}>
            <i data-feather="log-out" />
          </IconButton>
        </Box>
      </Sheet>
    </>
  );
}