import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read about some recent projects, ideas, and experiences.',
}

import Link from 'next/link'

export default function Page() {
  return (
    <section>
      <div className="flex items-baseline justify-between mb-8">
        <h1 className="font-semibold text-2xl tracking-tighter">My Blog</h1>
        <Link
          href="/blog/tag"
          className="text-sm text-neutral-500 underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:decoration-neutral-700 dark:hover:text-neutral-100"
        >
          Browse tags
        </Link>
      </div>
      <BlogPosts />
    </section>
  )
}
