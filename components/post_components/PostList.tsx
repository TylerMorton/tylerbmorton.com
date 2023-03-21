
import React from 'react';

// Joy UI Imports
import { Box, Typography } from '@mui/joy';

// Next Imports

// Custom Imports
import Inspiration from '../home/text_contents/Inspiration';
import Footer from '../footer';
import Post from '../../types/Post';
import HeroPost from './HeroPost';
import ListTitle from './ListTitle';

interface Props {
  title: string
  posts: Post[]
}

function PostList({title, posts}: Props) {
  return (
    <Box
      component='main'
      sx={(theme) => ({
        px: {
          xs: 2,
          md: 6,
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
      <ListTitle text={title} />
      <Inspiration />
      {posts.map((post) => (
        <HeroPost key={post.slug} {...post} />
      ))}
      <Footer />
    </Box>
  )
}

export default PostList;