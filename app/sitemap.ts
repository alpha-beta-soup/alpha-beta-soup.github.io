import { getAllBlogCategories, getAllBlogTags, getBlogPosts } from 'app/blog/utils'

export const baseUrl = 'https://spatialparalysis.xyz'

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let tags = getAllBlogTags().map((tag) => ({
    url: `${baseUrl}/blog/tag/${tag.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  let categories = getAllBlogCategories().map((category) => ({
    url: `${baseUrl}/blog/category/${category.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  let routes = ['', '/blog', '/blog/tag', '/blog/category'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs, ...tags, ...categories]
}
