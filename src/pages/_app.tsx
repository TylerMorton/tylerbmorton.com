import '../styles/globals.css'
import type { AppProps } from 'next/app'

import React from 'react';

import { CssVarsProvider } from '@mui/joy'
import { SidebarContext } from '../components/common/sidebar'
import { openSidebar as oSidebar } from '../components/common/sidebar';
import { closeSidebar as cSidebar } from '../components/common/sidebar';

export default function App({ Component, pageProps }: AppProps) {
  React.useContext(SidebarContext);
  const [sidebarToggle, setSidebarToggle] = React.useState(false);
  const openSidebar = () => {oSidebar();setSidebarToggle(true);}
  const closeSidebar = () => {cSidebar(); setSidebarToggle(false)};

  return (
  <CssVarsProvider>
    <SidebarContext.Provider value={{sidebarToggle, openSidebar, closeSidebar}}>
    <Component {...pageProps} />
    </SidebarContext.Provider>
  </CssVarsProvider>
  )
}
