import { notFound } from 'next/navigation'
import { allClients } from 'app/components/clients'
import { baseUrl } from 'app/sitemap'
import MapComponent from 'app/components/Map';
import { CustomMDX } from 'app/components/mdx';
import { getClientProfileByName } from 'app/clients/content';
import { getClientLocationData } from '../utils';

export default function Client({ params }) {
    const client = allClients.find(c => c.name === decodeURIComponent(params.name));
    if (!client) {
        return notFound();
    }

    const profile = getClientProfileByName(client.name);

    const locationData = getClientLocationData(client);

    const current = client.when.endDate ? false : true;
    
    return (
        <section className="page-breakout">
            <div className="page-shell">
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                      '@context': 'https://schema.org',
                      '@type': 'WebPage',
                                            name: `About my work with ${client.name}`,
                      image: `${baseUrl}${client.image}`,
                      url: `${baseUrl}/clients/${client.name}`,
                      publisher: {
                        '@type': 'ProfilePage',
                        name: 'Spatial Paralysis',
                      },
                    }),
                  }}
            />
            <h1 className="title text-center font-semibold text-2xl">
                {client.name}
            </h1>
            <article className="prose page-prose">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                    <div className="p-2 sm:p-4">
                        <div className="flex flex-col justify-center items-center">
                            <img
                                src={`${client.image}`}
                                alt={`${client.name} Logo`}
                                className="align-center max-w-full h-auto"
                            />
                            <span className="text-center mt-2 mb-4">📍 {client.where}</span>
                        </div>
                        <div className="h-[320px] sm:h-[420px] md:h-[500px]">
                            <MapComponent geojson={locationData} projection='EPSG:4326' isInteractive={true} />
                        </div>
                    </div>
                    <div className="p-2 sm:p-4 text-left sm:text-justify break-words">
                        {current ? (
                            <p>I have been working with <a href={client.url} target="blank">{client.name}</a> since {client.when.startDate.toLocaleDateString('en-NZ', { year: 'numeric', month: 'long' })}.</p>
                        ) : (
                            <p>I worked for <a href={client.url} target="blank">{client.name}</a> between {client.when.toString()}.</p>
                        )}
                        {profile ? <CustomMDX source={profile.content} /> : null}
                    </div>
                </div>
            </article>
            </div>
        </section>
    )
}