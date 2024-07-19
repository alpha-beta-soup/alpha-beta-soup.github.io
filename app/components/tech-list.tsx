import Link from 'next/link'
import { reduceEachLeadingCommentRange } from 'typescript';

type Tech = {
    title: string;
    url: string;
    image?: string;
}

export function Techs() {
    let allTechs : Tech[] = [{
        title: 'JavaScript',
        url: 'https://ecma-international.org/publications-and-standards/standards/ecma-262/',
        image: '/images/tools/js.png',
    }, {
        title: 'TypeScript',
        url: 'https://www.typescriptlang.org/',
        image: '/images/tools/ts.svg',
    }, {
        title: 'Python',
        url: 'https://www.python.org/',
        image: '/images/tools/python.png',
    }, {
        title: 'PostGIS',
        url: 'https://postgis.net/',
        image: '/images/tools/postgresql.svg',
    }, {
        title: 'NetworkX',
        url: 'https://networkx.org/',
        image: '/images/tools/networkx.svg',
    }, {
        title: 'Mapbox',
        url: 'https://www.mapbox.com/',
        image: '/images/tools/mapbox.svg',
    }, {
        title: 'Git',
        url: 'https://git-scm.com/',
        image: '/images/tools/git.png',
    }, {
        title: 'GRASS GIS',
        url: 'https://grass.osgeo.org/',
        image: '/images/tools/grass.png',
    }, {
        title: 'pgRouting',
        url: 'https://pgrouting.org/',
        image: '/images/tools/pgrouting.png'
    }, {
        title: 'terra',
        url: 'https://rspatial.github.io/terra/reference/terra-package.html',
        image: '/images/tools/terra.png'
    }, {
        title: 'R',
        url: 'https://www.r-project.org/',
        image: '/images/tools/R.png'
    }, {
        title: 'OpenStreetMap',
        url: 'https://www.openstreetmap.org',
        image: '/images/tools/osm.svg'
    }, {
        title: 'SnakeMake',
        url: 'https://snakemake.readthedocs.io/en/stable/',
        image: '/images/tools/snakemake.svg'
    }, {
        title: 'QGIS',
        url: 'https://qgis.org/',
        image: '/images/tools/qgis.svg'
    }, {
        title: 'H3',
        url: 'https://h3geo.org/',
        image: '/images/tools/h3.svg'
    }]

    return (
        <div className="flex flex-wrap justify-center gap-2"> 
            {allTechs
                .map((tech) => {
                    return (
                        <Link
                            key={tech.title}
                            className="flex flex-col items-center space-y-2 mb-4"
                            href={tech.url}
                            target="_blank"
                        >
                            <div className="w-full flex flex-col items-center space-y-1">
                                <div className="flex items-center h-12 w-auto justify-center">
                                    <img
                                        title={tech.title}
                                        src={tech.image}
                                        alt={`${tech.title} Logo`}
                                        className="max-h-12 w-auto"
                                    />
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}