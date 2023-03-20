import type Author from './Author'

type PostType = {
  slug: string
  title: string
  date: string
  coverImage: string
  excerpt: string
  ogImage: {
    url: string
  }
  content: string
}

export type subjectPost = 'projects' | 'events' | 'travels';

export default PostType