
// Next Imports
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'

// Mui Joy Imports
import { Box, CssBaseline, Typography } from '@mui/joy';

// MDX Imports
import { MDXRemote } from 'next-mdx-remote'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'

import { getPostBySlug, getSlugsBySubject } from '../../lib/api'
import PostBody from '../../components/post_components/PostBody'
import Appbar from '../../components/Appbar'
import Sidebar from '../../components/sidebar/Sidebar'
import PostTitle from '../../components/post_components/PostTitle'
import { Items } from '../../types/Post'
import Header from '../../components/Head';

const components = {
  p: PostBody,
}

interface Props {
  source: MDXRemoteSerializeResult<Record<string, unknown>>,
  frontMatter: Items
}


export default function Post({ source, frontMatter }: Props) {
  const router = useRouter()
  //const title = `${frontMatter.title} | Next.js Blog Example with ${CMS_NAME}`
  if (!router.isFallback && !frontMatter?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Box sx={{ display: 'flex', height: '100dvh' }}>
      <Header />
      <CssBaseline />
      <Appbar />
      <Sidebar selected='' />
      {router.isFallback ? (
        <Typography>Loading...</Typography>
      ) : (
        <Box
          component='main'
          sx={(theme) => ({
            px: {
              xs: 4,
              md: 6,
            },
            pt: { xs: `calc(${theme.spacing(0)} + var(--Header-height))` },
            pb: '20px',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            minWidth: 0,
            height: '100dvh',
            gap: 1,
          })
          }
        >
          <PostTitle text={frontMatter.title} />
          <Box>
            <MDXRemote {...source} components={components} />
          </Box>
        </Box>
      )}
    </Box>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = await getPostBySlug(`projects/${params.slug}`, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])

  return {
    props: {
      source: post.source,
      frontMatter: post.frontMatter,
    },
  }
}

export async function getStaticPaths() {
  const slugs = getSlugsBySubject('projects');
  return {
    paths: slugs.map(slugName => {
      return {
        params: {
          slug: slugName
        },
      }
    }),
    fallback: false,
  }
}