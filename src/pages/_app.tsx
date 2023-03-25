
import React from 'react';
import '../styles/globals.css'

// Next Imports
import type { AppProps } from 'next/app'

// Mui Joy Imports
import { CssVarsProvider, extendTheme } from '@mui/joy'

import { SidebarContext } from '../components/common/sidebar'
import { openSidebar as oSidebar } from '../components/common/sidebar';
import { closeSidebar as cSidebar } from '../components/common/sidebar';


export default function App({ Component, pageProps }: AppProps) {
  React.useContext(SidebarContext);
  const [sidebarToggle, setSidebarToggle] = React.useState(false);
  const openSidebar = () => { oSidebar(); setSidebarToggle(true); }
  const closeSidebar = () => { cSidebar(); setSidebarToggle(false) };

  const theme = extendTheme({
    components: {
      JoyTypography: {
        styleOverrides: {
          root: ({ ownerState, theme }) => ({
            ...(ownerState.color === 'primary' && {
              color: '#9A60E1',
              [theme.getColorSchemeSelector('dark')]: {
                color: '#e535ab',
              },
            }),
          }),
        },
      },
      JoyListItemButton: {
        styleOverrides: {
          root: ({ ownerState, theme }) => ({
            ...(ownerState.selected === true && {
              color: '#9A60E1',
              [theme.getColorSchemeSelector('dark')]: {
                color: '#e535ab',
              },
            }),
          }),
        },
      },
    }
  })

  return (
    <CssVarsProvider theme={theme}>
      <SidebarContext.Provider value={{ sidebarToggle, openSidebar, closeSidebar }}>
        <Component {...pageProps} />
      </SidebarContext.Provider>
    </CssVarsProvider>
  )
}
