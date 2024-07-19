import Link from 'next/link'
import { Client, DateRange } from 'app/clients/utils';


const ActiveXchangeComponent : React.ReactElement = (
    <section>
        <p>I developed the SportsEye single page web app, using a third-party authentication provider for secure user management. Users were organised into groups (such as sports clubs, or site administrators) which determined the data and theme used by the application. In this way, the same app could be used by a large number of different sports organisations.</p>
        <p>This was built in React, with Redux and Mapbox GL JS.</p>
        <p>In <a href="https://www.ausleisure.com.au/news/activexchanges-sportseye-platform-secures-major-sport-recreation-and-play-industry-innovation-award/" target="blank">July 2019</a>, the SportsEye platform secured a major sport, recreation and play industry innovation award.</p>
    </section>
)

export const allClients : Client[] = [{
    name: 'ActiveXchange',
    when: new DateRange('2019-01-08', '2021-06-30'),
    where: 'Australia',
    url: 'https://activexchange.org/',
    image: '/images/clients/ActiveXchange-logo.webp',
    component: (ActiveXchangeComponent)
}, {
    name: 'Landcare Research',
    when: new DateRange('2019-01-15'),
    where: 'Palmerston North, New Zealand',
    url: 'https://www.landcareresearch.co.nz/',
    image: '/images/clients/LandcareResearch-logo.png',
}, {
    name: 'CartonCloud',
    when: new DateRange('2020-08-01', '2020-10-30'),
    url: 'https://www.cartoncloud.com/',
    where: 'Gold Coast, Australia',
    image: '/images/clients/CartonCloud-logo.svg',
}, {
    name: 'Cartisan',
    when: new DateRange('2019-01-08', '2021-06-30'),
    where: 'Australia',
    url: 'https://www.cartisan.io/',
    image: '/images/clients/Cartisan-logo.png',
    component: (ActiveXchangeComponent)
}, {
    name: 'Signal Public Safety',
    when: new DateRange('2024-05-01'),
    where: 'Wellington, New Zealand',
    url: 'https://www.getsignal.info/',
    image: '/images/clients/Signal-logo.png',
}, {
    name: 'Crank Media Intelligence',
    when: new DateRange('2018-08-15', '2018-12-16'),
    where: 'United States of America',
    url: 'https://crankmedia.com/',
    image: '/images/clients/Crank-logo.gif',
}, {
    name: 'MetOcean Solutions',
    when: new DateRange('2015-03-01', '2018-12-31'),
    where: 'Raglan, New Zealand',
    url: 'https://www.metocean.co.nz/',
    image: '/images/clients/MetOcean-logo.png',
}, {
    name: 'Sealord Group',
    when: new DateRange('2014-08-01', '2014-09-29'),
    where: 'New Zealand',
    url: 'https://www.sealord.com/',
    image: '/images/clients/Sealord-logo.png',
}, {
    name: 'NZ ISCR',
    when: new DateRange('2013-12-01', '2015-03-31'),
    where: 'Wellington, New Zealand',
    url: 'https://ir.wgtn.ac.nz/handle/123456789/30540',
    image: '/images/clients/ISCR-logo.png'
}, {
    name: 'Victoria University of Wellington',
    when: new DateRange('2013-03-01', '2015-03-31'),
    where: 'Wellington, New Zealand',
    url: 'https://vuw.ac.nz',
    image: '/images/clients/VUW-logo.png'
}]

export function Clients() {
    return (
        <div className="flex flex-wrap justify-center gap-2"> 
            {allClients
                .sort((a, b) => {
                    if (
                        a.when.startDate > b.when.startDate
                    ) {
                        return -1
                    }
                    return 1
                })
                .map((client) => {
                    const dateRange = client.when.toString()
                    return (
                        <Link
                            key={client.name}
                            className="flex flex-col items-center space-y-1 mb-4"
                            href={`/clients/${encodeURIComponent(client.name)}`}
                        >
                            <div className="w-full flex flex-col items-center space-y-1">
                                <div className="flex items-center h-12 w-auto justify-center">
                                    <img
                                        src={client.image}
                                        alt={`${client.name} Logo`}
                                        className="max-h-12 w-auto"
                                    />
                                </div>
                                <p className="font-bold text-center text-neutral-900 dark:text-neutral-100">
                                    {client.name}
                                </p>
                                <p className="text center text-neutral-600 dark:text-neutral-400 tabular-nums tracking-tight">
                                    {dateRange}
                                </p>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}