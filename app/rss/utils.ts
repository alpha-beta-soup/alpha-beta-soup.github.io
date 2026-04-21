import { BlogPost } from 'app/blog/utils'
import { baseUrl } from 'app/sitemap'

type BuildRssFeedOptions = {
  title: string
  description: string
  link: string
  posts: BlogPost[]
}

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export function buildRssFeed({ title, description, link, posts }: BuildRssFeedOptions) {
  const itemsXml = posts
    .map(
      (post) =>
        `<item>
          <title>${escapeXml(post.metadata.title)}</title>
          <link>${baseUrl}/blog/${post.slug}</link>
          <description>${escapeXml(post.metadata.summary || '')}</description>
          <pubDate>${new Date(post.metadata.publishedAt).toUTCString()}</pubDate>
        </item>`
    )
    .join('\n')

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
        <title>${escapeXml(title)}</title>
        <link>${baseUrl}${link}</link>
        <description>${escapeXml(description)}</description>
        ${itemsXml}
    </channel>
  </rss>`

  return new Response(rssFeed, {
    headers: {
      'Content-Type': 'text/xml',
    },
  })
}
