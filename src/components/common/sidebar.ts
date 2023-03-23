import React from 'react';

interface SidebarContextType {
  closeSidebar: () => void
  openSidebar: () => void
  sidebarToggle: boolean
}

export const SidebarContext = React.createContext<SidebarContextType>({
  closeSidebar: () => {},
  openSidebar: () => {},
  sidebarToggle: false
});

export const openSidebar = () => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.setProperty('--SideNavigation-slideIn', '1');
  }
};

export const closeSidebar = () => {
  if (typeof document !== 'undefined') {
    document.documentElement.style.removeProperty('--SideNavigation-slideIn');
    document.body.style.removeProperty('overflow');
  }
};