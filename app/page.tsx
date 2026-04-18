import { BlogPosts } from 'app/components/posts'
import { Clients } from 'app/components/clients'
import { Techs } from 'app/components/tech-list'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Spatial Paralysis
      </h1>
      <div className="mb-8">
        <p className="mb-4">
          {`I'm a Kiwi geogapher/developer. I'm available for contract work in the following areas:`}
        </p>
        <ul className="mb-4">
            <li>
              <span className="mr-2">🌐</span>
              Web development
            </li>
            <li>
              <span className="mr-2">🗺️</span> 
              Data visualisation (esp. geospatial)
            </li>
            <li>
              <span className="mr-2">📊</span>
              Spatial data analysis
            </li>
        </ul>
        <p className="mb-4">You can contract me to work on any geospatial problem, such as adding Mapbox maps to your web applications (I'm a member of the <a href="https://www.mapbox.com/experts?c9ac6f52_page=6" target="#">Mapbox Developer Network</a>), crafting APIs with a spatial data bent, scraping and transforming data, making static or interactive data visualisations, or data analysis in R or Python. If it has a coordinate, or a geometry, or a topology, then I enjoy working with it</p>
        <p className="mb-4">When you hire me, it's a bit like <span className='hashtag'>#shoplocal</span>. You're not helping a CEO afford a new car, you're helping my daughter go to her Irish dancing lessons. I won't overspec, and I won't overcharge. I will understand your problem before working on a solution.</p>
        <p className="mb-4">I don't really do social media; <a href="https://www.artofmanliness.com/character/advice/sunday-firesides-social-media-is-extending-everyones-adolescence/" target="#">I don't think it's good for people</a>. But you can still email me at <a href="mailto:richard.m.law@gmail.com">richard.m.law@gmail.com</a> and we can arrange to talk further. Rest assured you're getting a quietly competent developer with years of experience behind him.</p>
        </div>
      <div className='mb-8'>
        <h2 className="mb-4 text-1xl font-semibold tracking-tighter">Clients</h2>
        <Clients />
      </div>

      <div className='mb-8'>
        <h2 className="mb-4 text-1xl font-semibold tracking-tighter">Recently...</h2>
        <BlogPosts />
      </div>

      <div className='mb-8'>
        <h2 className="mb-4 text-1xl font-semibold tracking-tighter">Tools</h2>
        <Techs />
        <div className="bg-indigo-900 text-center py-4 lg:px-4">
          <a href="https://github.com/manaakiwhenua/raster2dggs" target="#">
            <div className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
              <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">Hey</span>
              <span className="font-semibold mr-2 text-left flex-auto">Try out one of my latest tools</span>
              <svg className="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
