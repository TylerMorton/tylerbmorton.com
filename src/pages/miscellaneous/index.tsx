import * as React from 'react';

// Joy UI Imports
import { Box, CssBaseline } from '@mui/joy';

import { Smile } from 'react-feather';

// Custom Imports
import Appbar from '../../components/Appbar';
import { SidebarContext } from '../../components/common/sidebar';
//import Post from '../../types/Post';
import { getPostInfoBySubject } from '../../lib/api';
import ApplicationMain from '../../components/ApplicationMain';
//import PostList from '../../components/post_components/PostList';
import Construction from '../../components/post_components/Construction';
import Header from '../../components/Head';
/*
type Props = {
  projectPosts: Post[],
}
*/

export default function Projects(/*{ projectPosts }: Props*/) {
  const { closeSidebar } = React.useContext(SidebarContext);
  React.useEffect(() => {
    closeSidebar();
  }, [])
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100dvh' }}>
     <Header /> 
      <CssBaseline />
      <Appbar />
      <ApplicationMain slug='miscellaneous'>
        { /*<PostList title={'Miscellaneous'} icon={<Smile />} posts={projectPosts} />*/}
        <Construction title={'Miscellaneous'} icon={<Smile />} />
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
