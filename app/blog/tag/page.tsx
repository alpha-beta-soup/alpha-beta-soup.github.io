import Link from 'next/link'
import { getAllBlogTags, getBlogPostsByTag } from 'app/blog/utils'

export const metadata = {
  title: 'Tags',
  description: 'Browse all blog post tags.',
}

export default function BlogTagsPage() {
  let tags = getAllBlogTags()
    .map((tag) => ({
      ...tag,
      count: getBlogPostsByTag(tag.slug).length,
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
      <h1 className="font-semibold text-2xl tracking-tighter mb-8">Tags</h1>
      <div className="flex flex-wrap justify-between gap-x-4 gap-y-2">
        {tags.map((tag) => (
          <Link
            key={tag.slug}
            href={`/blog/tag/${tag.slug}`}
            className="group inline-flex items-baseline gap-1.5"
          >
            <span className="text-neutral-900 dark:text-neutral-100 group-hover:underline decoration-neutral-300 dark:decoration-neutral-700 underline-offset-4">
              {tag.name}
            </span>
            <span className="text-xs tabular-nums text-neutral-400 dark:text-neutral-600">
              {tag.count}
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
