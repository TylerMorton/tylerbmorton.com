
import React from 'react';

// Joy UI Imports
import { Box, Typography } from '@mui/joy';

// Next Imports

// Custom Imports
import Banner from '../home/Banner';
import Bio from '../home/text_contents/Bio';
import Inspiration from '../home/text_contents/Inspiration';
import Footer from '../footer';
import Post from '../../types/Post';
import HeroPost from './HeroPost';
import ListTitle from './ListTitle';

interface Props {
  posts: Post[];
}

function PostList({posts}: Props) {
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
      <ListTitle text='My Projects' />
      <Inspiration />
      <Box
      sx={(theme) => ({
        mt: 5,
        px: {
          xs: 2,
          md: 6,
        },
        py: { xs: `calc(${theme.spacing(0)} + var(--Header-height))` },
        display: 'flex',
        flexDirection: 'column',
        minWidth: 0,
        height: '100dvh',
        gap: 1,
      })}>
        {posts.map((post) => (
          <HeroPost key={post.slug} {...post} />
        ))}
      </Box>
      <Footer />
    </Box>
  )
}

export default PostList;