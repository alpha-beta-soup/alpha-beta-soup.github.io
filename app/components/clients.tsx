import Link from 'next/link'
import { Client } from 'app/clients/utils';
import { getClients } from 'app/clients/content';

// TODO this should all be MDX content 
export const allClients: Client[] = getClients()

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