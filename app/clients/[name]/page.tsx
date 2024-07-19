import { notFound } from 'next/navigation'
import { allClients } from 'app/components/clients'
import { baseUrl } from 'app/sitemap'

export default function Client({ params }) {
    const client = allClients.find(c => c.name === decodeURIComponent(params.name));
    console.log({client, params})
    if (!client) {
        return notFound();
    }

    return (
        <section>
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                      '@context': 'https://schema.org',
                      '@type': 'WebPage',
                      name: `About my work with {client.name}`,
                      image: `${baseUrl}${client.image}`,
                      url: `${baseUrl}/clients/${client.name}`,
                      publisher: {
                        '@type': 'ProfilePage',
                        name: 'Spatial Paralysis',
                      },
                    }),
                  }}
            />
            <h1 className="title text-center font-semibold text-2xl tracking-tighter">
                {client.name}
            </h1>
            <article className="prose">
                <div className="flex items-center h-12 w-auto justify-center">
                    <img
                        src={`${client.image}`}
                        alt={`${client.name} Logo`}
                        className="max-h-12 w-auto"
                    />
                </div>
                <p>📍 {client.where}</p>
                <p>I worked for <a href={client.url} target="blank">{client.name}</a> between {client.when.toString()}.</p>
                {client.component}
            </article>
        </section>
    )
}