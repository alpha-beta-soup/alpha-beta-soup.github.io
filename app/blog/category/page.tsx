import Link from 'next/link'
import { getAllBlogCategories, getBlogPostsByCategory } from 'app/blog/utils'

export const metadata = {
  title: 'Categories',
  description: 'Browse all blog post categories.',
}

export default function BlogCategoriesPage() {
  let categories = getAllBlogCategories()
    .map((category) => ({
      ...category,
      count: getBlogPostsByCategory(category.slug).length,
    }))
    .sort((a, b) => {
      if (b.count !== a.count) return b.count - a.count
      return a.name.localeCompare(b.name)
    })

  return (
    <section>
      <div className="mb-3">
        <Link
          href="/blog"
          className="text-sm text-neutral-600 underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:decoration-neutral-700 dark:hover:text-neutral-100"
        >
          All posts
        </Link>
      </div>
      <h1 className="font-semibold text-2xl tracking-tighter mb-8">Categories</h1>
      <div className="flex flex-wrap justify-between gap-x-4 gap-y-2">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/blog/category/${category.slug}`}
            className="group inline-flex items-baseline gap-1.5"
          >
            <span className="text-neutral-900 dark:text-neutral-100 group-hover:underline decoration-neutral-300 dark:decoration-neutral-700 underline-offset-4">
              {category.name}
            </span>
            <span className="text-xs tabular-nums text-neutral-400 dark:text-neutral-600">
              {category.count}
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
