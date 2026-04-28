import { BlogPosts } from 'app/components/posts'

export default function NotFound() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        404: Not Found
      </h1>
      <p className="mb-4">Dear <a href="https://en.wikipedia.org/wiki/Anthony_of_Padua" target="_blank" rel="noopener noreferrer">St. Anthony</a>, please come around. This page is lost and cannot be found.</p>

      <figure>
        <img src="/images/pages/404.jpg" alt="404 Not Found" className="mb-2 w-full rounded-lg"/>
        <figcaption className="mb-8 text-sm text-gray-500">"Saint Anthony of Padua" by Francisco de Zurbarán, 1627–1630</figcaption>
      </figure>
      <div className="my-8">
        <h2 className="mb-4 text-xl font-semibold tracking-tighter">You may have been looking for one of my blog posts:</h2>
        <BlogPosts />
      </div>
    </section>
  )
}
