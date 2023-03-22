
import React, { ReactElement } from 'react';

// Joy UI Imports
import { Box } from '@mui/joy';

// Next Imports

// Custom Imports
import Inspiration from '../home/text_contents/Inspiration';
import Footer from '../footer';
import Post from '../../types/Post';
import HeroPost from './HeroPost';
import ListTitle from './ListTitle';

interface Props {
  title: string
  icon: ReactElement | undefined
  posts: Post[]
}

function PostList({title, icon, posts}: Props) {
  return (
    <Box
      component='main'
      sx={(theme) => ({
        px: {
          xs: 4,
          md: 12,
          lg: 30,
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
      <ListTitle icon={icon} text={title} />
      <Inspiration />
      {posts.sort((post, otherPost) => post.date > otherPost.date ? -1 : 1).map((post) => (
        <HeroPost key={post.slug} {...post} />
      ))}
      <Footer />
    </Box>
  )
}

export default PostList;