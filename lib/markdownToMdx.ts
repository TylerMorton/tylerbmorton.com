import { remark } from 'remark'
import remarkMdx from 'remark-mdx';

export default async function markdownToMdx(markdown: string) {
  const result = await remark().use(remarkMdx).process(markdown);
  return result.toString();
}

