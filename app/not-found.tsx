import { BlogPosts } from 'app/components/posts'

export default function NotFound() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        404: Not Found
      </h1>
      <p className="mb-4">Sorry about that!</p>
      <p>Here are some posts I've written recently. Maybe you were looking for one of these?</p>

      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
