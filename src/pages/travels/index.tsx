import * as React from 'react';


// Joy UI Imports
import { Box, CssBaseline } from '@mui/joy';

import Appbar from '../../components/Appbar';
import PostList from '../../components/post_components/PostList';
import Post from '../../types/Post';
import { getPostInfoBySubject } from '../../lib/api';
import ApplicationMain from '../../components/ApplicationMain';
import { SidebarContext } from '../../components/common/sidebar';
import { Map } from 'react-feather';
import Header from '../..components/Head';

type Props = {
  travelPosts: Post[],
}

export default function Projects({ travelPosts }: Props) {
  const {closeSidebar} = React.useContext(SidebarContext);
  React.useEffect(() => {
    closeSidebar();
  }, [])
  return (
    <Box sx={{ display: 'flex',  flexDirection: 'column', height: '100dvh'}}>
      <Header />
      <CssBaseline />
      <Appbar />
      <ApplicationMain slug={'travels'}>
        <PostList title={'My Travels'} icon={<Map size={'40px'}/>} posts={travelPosts}/>
      </ApplicationMain>
    </Box>
  )
}

export function getStaticProps() {
  const posts = getPostInfoBySubject('travels', [
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
      travelPosts: posts
    }
  }
}
