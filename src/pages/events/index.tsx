import * as React from 'react';

// Joy UI Imports
import { Box, CssBaseline } from '@mui/joy';

import Appbar from '../../components/Appbar';
//import PostList from '../../components/post_components/PostList';
//import Post from '../../types/Post';
import { getPostInfoBySubject } from '../../lib/api';
import ApplicationMain from '../../components/ApplicationMain';
import { SidebarContext } from '../../components/common/sidebar';
import { Sunset } from 'react-feather';
import Construction from '../../components/post_components/Construction';
import Header from '../../components/Head';

/*
type Props = {
  projectPosts: Post[],
}*/

export default function Projects(/*{ projectPosts }: Props*/) {
  const {closeSidebar} = React.useContext(SidebarContext);
  React.useEffect(() => {
    closeSidebar();
  }, [])
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100dvh'}}>
      <Header />
      <CssBaseline />
      <Appbar />
      <ApplicationMain slug='events'>
        {/*<PostList title={'Events'} icon={<Sunset />} posts={projectPosts} />*/}
        <Construction title={'Events'} icon={<Sunset />} />
      </ApplicationMain>
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
  return {
    props: {
      projectPosts: posts
    }
  }
}
