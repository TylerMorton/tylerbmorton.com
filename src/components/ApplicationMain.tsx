import React from 'react';

import { Box } from "@mui/system";

import Sidebar from './Sidebar';

interface Props {
  slug: string
  children: React.ReactElement | React.ReactElement[]
}

export default function ApplicationMain({slug, children}: Props) {
  return (
    <>
      <Box sx={{height:'100%', display: 'flex'}}>
      <Sidebar selected={`/${slug}`} />
      {children}
    </Box>
    </>
  );
}