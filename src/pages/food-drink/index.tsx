import * as React from 'react';

// Joy UI Imports
import { Box, CssBaseline } from '@mui/joy';

// Custom Imports
//import Post from '../../types/Post';
import Appbar from '../../components/Appbar';
//import PostList from '../../components/post_components/PostList';
import { getPostInfoBySubject } from '../../lib/api';
import ApplicationMain from '../../components/ApplicationMain';
import { SidebarContext } from '../../components/common/sidebar';
import { Coffee } from 'react-feather';
import Construction from '@/src/components/post_components/Construction';
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
      <ApplicationMain  slug='food-drink' >
        {/*<PostList title={'Food & Drink'} icon={<Coffee />} posts={projectPosts} />*/}
        <Construction title={'Food & Drink'} icon={<Coffee />} />
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
