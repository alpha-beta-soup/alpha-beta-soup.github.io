import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BlogPosts } from 'app/components/posts'
import { getAllBlogTags, getBlogPostsByTag } from 'app/blog/utils'

export function generateStaticParams() {
  return getAllBlogTags().map((tag) => ({
    tag: tag.slug,
  }))
}

export function generateMetadata({ params }) {
  let tag = getAllBlogTags().find((entry) => entry.slug === params.tag)

  if (!tag) {
    return
  }

  return {
    title: `Tagged: ${tag.name}`,
    description: `Blog posts tagged ${tag.name}.`,
  }
}

export default function BlogTagPage({ params }) {
  let tag = getAllBlogTags().find((entry) => entry.slug === params.tag)

  if (!tag) {
    notFound()
  }

  let posts = getBlogPostsByTag(tag.slug)

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
      <h1 className="font-semibold text-2xl tracking-tighter">Tagged: {tag.name}</h1>
      <p className="mt-2 mb-8 text-sm text-neutral-600 dark:text-neutral-400">
        {posts.length} post{posts.length === 1 ? '' : 's'} filed under this tag.
      </p>
      <BlogPosts posts={posts} />
    </section>
  )
}