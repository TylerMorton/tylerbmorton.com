import * as React from 'react';

import Head from 'next/head'

// Joy UI Imports
import Appbar from '@/components/Appbar';
import { Box, CssBaseline } from '@mui/joy';
import Sidebar from '@/components/Sidebar';
import { closeSidebar } from '@/components/common/sidebar';

import Post from '../../types/Post';
import { getPostInfoBySubject } from '@/lib/api';
import HeroPost from '../../components/post_components/HeroPost';
import PostList from '@/components/post_components/PostList';

type Props = {
  projectPosts: Post[],
}

export default function Projects({ projectPosts }: Props) {
  React.useEffect(() => {
    closeSidebar();
  }, [])
  return (
    <Box sx={{ display: 'flex', height: '100dvh'}}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CssBaseline />
      <Appbar />
      <Sidebar selected={'/travels'} />
      <PostList title='My Travels' posts={projectPosts}/>
    </Box>
  )
}

export function getStaticProps() {
  const posts = getPostInfoBySubject('projects', [
    'title',
    'date',
    'slug',
    'excerpt',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  console.log(posts[0])
  return {
    props: {
      projectPosts: posts
    }
  }
}
