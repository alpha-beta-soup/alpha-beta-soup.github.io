import { BlogPosts } from 'app/components/posts'
import { Clients } from 'app/components/clients'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Spatial Paralysis
      </h1>
      <div className="mb-8">
        <p className="mb-4">
          {`I'm a Kiwi geogapher/developer. I'm available for contract work in the following areas:`}
          <ul>
            <li>
              <span className="mr-2">🌐</span>
              Development of interactive map viewers
            </li>
            <li>
              <span className="mr-2">🗺️</span> 
              Visualising geospatial data
            </li>
            <li>
              <span className="mr-2">📊</span>
              Spatial data analysis
            </li>
          </ul>
        </p>
        <p>I don't do social media (not even LinkedIn); I'm private by nature. But you can still email me at <a href="mailto:richard.m.law@gmail.com">richard.m.law@gmail.com</a> and we can arrange to talk further.</p>
        </div>
      <div className='mb-8'>
        <h2 className="mb-4 text-1xl font-semibold tracking-tighter">Clients</h2>
        <Clients />
      </div>

      <div className='mb-8'>
        <h2 className="mb-4 text-1xl font-semibold tracking-tighter">Recently...</h2>
        <BlogPosts />
      </div>
    </section>
  )
}
