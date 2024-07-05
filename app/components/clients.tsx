import Link from 'next/link'
import { DateRange } from '../blog/utils'; 

type Client = {
    name: string;
    when: DateRange;
    url: string;
    image?: string;
}

export function Clients() {
    let allClients : Client[] = [{
        name: 'ActiveXchange',
        when: new DateRange('2019-01-08', '2021-06-30'),
        url: 'https://activexchange.org/',
        image: 'images/clients/ActiveXchange-logo.webp',
    }, {
        name: 'Landcare Research',
        when: new DateRange('2019-01-15'),
        url: 'https://www.landcareresearch.co.nz/',
        image: 'images/clients/LandcareResearch-logo.png',
    }, {
        name: 'CartonCloud',
        when: new DateRange('2020-08-01', '2020-10-30'),
        url: 'https://www.cartoncloud.com/',
        image: 'images/clients/CartonCloud-logo.svg',
    }, {
        name: 'Cartisan',
        when: new DateRange('2019-01-08', '2021-06-30'),
        url: 'https://www.cartisan.io/',
        image: 'images/clients/Cartisan-logo.png',
    }, {
        name: 'Signal Public Safety',
        when: new DateRange('2024-05-01'),
        url: 'https://www.getsignal.info/',
        image: 'images/clients/Signal-logo.png',
    }, {
        name: 'Crank Media Intelligence',
        when: new DateRange('2018-08-15', '2018-12-16'),
        url: 'https://crankmedia.com/',
        image: 'images/clients/Crank-logo.gif',
    }, {
        name: 'MetOcean Solutions',
        when: new DateRange('2015-03-01', '2018-12-31'),
        url: 'https://www.metocean.co.nz/',
        image: 'images/clients/MetOcean-logo.png',
    }, {
        name: 'Sealord Group',
        when: new DateRange('2018-08-01', '2018-09-29'),
        url: 'https://www.sealord.com/',
        image: 'images/clients/Sealord-logo.png',
    }]

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                            href={client.url}
                            target="_blank"
                        >
                            <div className="w-full flex flex-col items-center space-y-1">
                                <div className="flex items-center h-12 w-auto justify-center">
                                    <img
                                        src={client.image}
                                        alt={`${client.name} Logo`}
                                        className="max-h-12 w-auto"
                                    />
                                </div>
                                <p className="font-bold text-neutral-900 dark:text-neutral-100">
                                    {client.name}
                                </p>
                                <p className="text-neutral-600 dark:text-neutral-400 tabular-nums tracking-tight">
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