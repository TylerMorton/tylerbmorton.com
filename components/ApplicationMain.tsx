import React from 'react';

import { Box } from "@mui/system";

import Post from "@/types/Post";
import Sidebar from './Sidebar';
import PostList from './post_components/PostList'

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