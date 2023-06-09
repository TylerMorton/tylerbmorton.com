import * as React from 'react';

// Joy UI Imports
import { Box, CssBaseline } from '@mui/joy';

import Appbar from '../../components/Appbar';
import { SidebarContext } from '../../components/common/sidebar';
import Post from '../../types/Post';
import { getPostInfoBySubject } from '../../lib/api';
import ApplicationMain from '../../components/ApplicationMain';
import PostList from '../../components/post_components/PostList';
import { HardDrive } from 'react-feather';
import Header from '../../components/Head';

type Props = {
  projectPosts: Post[],
}

export default function Projects({ projectPosts }: Props) {
  const { closeSidebar } = React.useContext(SidebarContext);
  React.useEffect(() => {
    closeSidebar();
  }, [])
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100dvh' }}>
     <Header />
      <CssBaseline />
      <Appbar />
      <ApplicationMain slug='projects'>
        <PostList title={'My Projects'} icon={<HardDrive size={'40px'}/>} posts={projectPosts} />
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
