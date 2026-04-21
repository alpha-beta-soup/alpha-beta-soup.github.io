import { getBlogPosts, sortBlogPosts } from 'app/blog/utils'
import { buildRssFeed } from 'app/rss/utils'

export async function GET() {
  return buildRssFeed({
    title: 'Spatial Paralysis – Blog',
    description: 'RSS feed for my personal projects and professional portfolio.',
    link: '/blog',
    posts: sortBlogPosts(getBlogPosts()),
  })
}
