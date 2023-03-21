import React from 'react';

import { Box } from "@mui/system";

import Post from "@/types/Post";
import Sidebar from './Sidebar';
import PostList from './post_components/PostList'

interface Props {
  title: string
  posts: Post[]
}

export default function ApplicationMain({title, posts}: Props) {
  return (
    <Box sx={{height:'100%', display: 'flex'}}>
      <Sidebar selected={'/travels'} />
      <PostList title='Music' posts={posts} />
    </Box>
  );
}