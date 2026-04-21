import { notFound } from 'next/navigation'
import {
  getBlogCategoryBySlug,
  getBlogPostsByCategory,
} from 'app/blog/utils'
import { buildRssFeed } from 'app/rss/utils'

export function GET(
  request: Request,
  { params }: { params: { category: string } }
) {
  let category = getBlogCategoryBySlug(params.category)

  if (!category) {
    notFound()
  }

  return buildRssFeed({
    title: `Spatial Paralysis – ${category.name}`,
    description: `RSS feed for posts in the ${category.name} category.`,
    link: `/blog/category/${category.slug}`,
    posts: getBlogPostsByCategory(category.slug),
  })
}
