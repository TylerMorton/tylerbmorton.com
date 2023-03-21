import fs from 'fs';
import {join} from 'path';
import matter from 'gray-matter'
import { subjectPost } from '@/types/Post';
import markdownToMdx from './markdownToMdx';
import { serialize } from 'next-mdx-remote/serialize';

const postPath = join(process.cwd(), '_posts')
const subject = ['projects', 'events', 'travels'];


function getAllSubjects(): string[] {
  const dirContents = fs.readdirSync(postPath);
  return dirContents.filter((slug)=> subject.includes(slug) !== undefined);
}

export function getSlugsBySubject(subject: subjectPost): string[] {
  const subjectPath = join(postPath, subject);
  return fs.readdirSync(subjectPath).map((fname) => fname.replace(/\.md/, ''));
}

function getAllSlugPaths(): string[] {
  const subjectDirs = getAllSubjects();
  let slugs: string[] = [];
  let subjectPath: string;
  for (const i of subjectDirs) {
    subjectPath = join(postPath, i)
    slugs = slugs.concat(
      fs.readdirSync(subjectPath).map((spath) => join(subjectPath, spath))
    );
  }
  return slugs;
}

function getSlugPathsBySubject(subject: subjectPost): string[] {
  const subjectPath = join(postPath, subject);
  return getSlugsBySubject(subject).map((slug) => join(subjectPath, `${slug}.md`));
}

export function getPostBySlug(slug: string, fields: string[]) {
  const fullpath = getAllSlugPaths().find((slugs) => slugs.includes(slug));
  if (fullpath === undefined) {
    throw Error('get post by slug error');
  }
  return getPostBySlugPath(fullpath, fields);
}

// Note: argument expects full path
async function getPostBySlugPath(fullPath: string, fields: string[]) {
  const slug = (fullPath.match(/[^/]+?.md/) || [''])[0];
  const realSlug = slug.replace(/\.md/, '');
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const {data, content} = matter(fileContents);
  const source = await markdownToMdx(content);
  type Items = {
    [key: string]: string
  }

  const items: Items = {}
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }
    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })
  const mdxSource = await serialize(source, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  })
  return {
      source: mdxSource,
      frontMatter: items,
  }
}

function getDataBySlugPath(fullPath: string, fields: string[]) {
  const slug = (fullPath.match(/[^/]+?.md/) || [''])[0];
  const realSlug = slug.replace(/\.md/, '');
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const {data, content} = matter(fileContents);
  type Items = {
    [key: string]: string
  }

  console.log(data);
  const items: Items = {}
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }
    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })
  return items;
}

export function getAllPosts(fields: string[]) {
  const slugPaths = getAllSlugPaths();
  const posts = slugPaths.map(async (slug) => await getPostBySlugPath(slug, fields));
  return posts;
}

export function getPostBySubject(subject: subjectPost, fields: string[]) {
  const slugPaths = getSlugPathsBySubject(subject);
  const posts = slugPaths.map(async (slug) => await getPostBySlugPath(slug, fields));
  return posts;
}

export function getPostInfoBySubject(subject: subjectPost, fields: string[]) {
  const slugPaths = getSlugPathsBySubject(subject);
  const posts = slugPaths.map((slug) => getDataBySlugPath(slug, fields));
  return posts;
}





