import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BlogPosts } from 'app/components/posts'
import { getAllBlogCategories, getBlogPostsByCategory } from 'app/blog/utils'

export function generateStaticParams() {
  return getAllBlogCategories().map((category) => ({
    category: category.slug,
  }))
}

export function generateMetadata({ params }) {
  let category = getAllBlogCategories().find((entry) => entry.slug === params.category)

  if (!category) {
    return
  }

  return {
    title: `Category: ${category.name}`,
    description: `Blog posts in the ${category.name} category.`,
  }
}

export default function BlogCategoryPage({ params }) {
  let category = getAllBlogCategories().find((entry) => entry.slug === params.category)

  if (!category) {
    notFound()
  }

  let posts = getBlogPostsByCategory(category.slug)

  return (
    <section>
      <div className="mb-3 flex items-center justify-between gap-4">
        <Link
          href="/blog"
          className="text-sm text-neutral-600 underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:decoration-neutral-700 dark:hover:text-neutral-100"
        >
          All posts
        </Link>
        <Link
          href={`/rss/category/${category.slug}`}
          className="text-sm text-neutral-600 underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:decoration-neutral-700 dark:hover:text-neutral-100"
        >
          RSS for {category.name}
        </Link>
      </div>
      <h1 className="font-semibold text-2xl tracking-tighter">Category: {category.name}</h1>
      <p className="mt-2 mb-8 text-sm text-neutral-600 dark:text-neutral-400">
        {posts.length} post{posts.length === 1 ? '' : 's'} filed under this category.
      </p>
      <BlogPosts posts={posts} />
    </section>
  )
}
