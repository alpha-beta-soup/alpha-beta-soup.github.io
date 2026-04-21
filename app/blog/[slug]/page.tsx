import { notFound } from 'next/navigation'
import Link from 'next/link'
import { CustomMDX } from 'app/components/mdx'
import { formatDate, getBlogPosts, slugifyTag, sortBlogPosts } from 'app/blog/utils'
import { baseUrl } from 'app/sitemap'

export async function generateStaticParams() {
  let posts = getBlogPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug)
  if (!post) {
    return
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default function Blog({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  let publishedLabel = formatDate(post.metadata.publishedAt, false, {
    showWeekday: true,
  })
  let publishedYearMatch = publishedLabel.match(/^(.*?)(\d{4})(.*)$/)

  return (
    <section className="page-breakout">
      <div className="page-shell">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'Richard Law',
            },
          }),
        }}
      />
      <h1 className="title font-semibold text-2xl tracking-tighter">
        {post.metadata.title}
      </h1>
      {post.metadata.subtitle && (
        <p className="text-lg text-neutral-500 dark:text-neutral-400 mt-1 tracking-tight">
          {post.metadata.subtitle}
        </p>
      )}
      <div className="mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {publishedYearMatch ? (
            <>
              {publishedYearMatch[1]}
              <span className="[font-variant-caps:all-small-caps]">ad</span>{' '}
              {publishedYearMatch[2]}
              {publishedYearMatch[3]}
            </>
          ) : (
            publishedLabel
          )}
        </p>
        {post.metadata.tags && post.metadata.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {post.metadata.tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog/tag/${slugifyTag(tag)}`}
                className="rounded-full border border-neutral-200 px-2.5 py-1 text-xs text-neutral-600 dark:border-neutral-800 dark:text-neutral-300"
              >
                {tag}
              </Link>
            ))}
          </div>
        )}
      </div>
      <article className="prose page-prose">
        <CustomMDX source={post.content} />
      </article>
      {post.metadata.tags && post.metadata.tags.length > 0 && (() => {
        const related = sortBlogPosts(
          getBlogPosts().filter((p) =>
            p.slug !== post.slug &&
            p.metadata.tags?.some((t) => post.metadata.tags!.includes(t))
          )
        )
        return related.length > 0 ? (
          <div className="mt-12 border-t border-neutral-200 dark:border-neutral-800 pt-8">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-4">
              Related posts
            </h2>
            <ul className="space-y-3">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/blog/${r.slug}`}
                    className="group flex items-baseline justify-between gap-4"
                  >
                    <span className="text-neutral-900 dark:text-neutral-100 group-hover:underline underline-offset-2">
                      {r.metadata.title}
                    </span>
                    <span className="shrink-0 text-xs text-neutral-400 dark:text-neutral-500">
                      {formatDate(r.metadata.publishedAt, false)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null
      })()}
      </div>
    </section>
  )
}