import Link from 'next/link'
import { BlogPost, formatDate, getBlogPosts, sortBlogPosts } from 'app/blog/utils'

export function BlogPosts({ posts }: { posts?: BlogPost[] }) {
  let allBlogs = sortBlogPosts(posts ?? getBlogPosts())

  return (
    <div>
      {allBlogs.map((post) => (
          <Link
            key={post.slug}
            className="group relative mb-4 flex flex-col space-y-1"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row md:items-end md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <div className="flex-1 border-b border-transparent pb-0.5 transition-colors duration-150 md:group-hover:border-neutral-300 md:group-focus-visible:border-neutral-300 dark:md:group-hover:border-neutral-700 dark:md:group-focus-visible:border-neutral-700">
                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                  {post.metadata.title}
                </p>
              </div>
            </div>
            {post.metadata.summary && (
              <div className="pointer-events-none absolute left-full top-1/2 z-10 hidden w-[24rem] max-w-xl -translate-y-1/2 rounded-md border border-neutral-200 bg-white/95 p-3 text-sm leading-relaxed text-neutral-600 shadow-sm transition-opacity duration-150 md:ml-6 md:group-hover:block md:group-focus-visible:block dark:border-neutral-800 dark:bg-neutral-950/95 dark:text-neutral-300">
                {post.metadata.summary}
              </div>
            )}
          </Link>
        ))}
    </div>
  )
}
