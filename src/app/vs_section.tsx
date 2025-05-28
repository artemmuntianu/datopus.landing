export function VSSection() {
    return (
        <section className="flex flex-col items-center">
            <div className="overflow-x-auto w-full">
                <table className="min-w-full bg-transparent rounded-xl text-lg table-fixed">
                    <colgroup>
                        <col className="w-1/3" />
                        <col className="w-1/6" />
                        <col className="w-1/3" />
                    </colgroup>
                    <thead>
                        <tr>
                            <th className="py-4 px-6 md:text-2xl text-sm font-bold text-center border-b w-1/3">Datopus</th>
                            <th className="py-4 px-6 text-primary md:text-xl text-sm font-bold text-center border-b w-1/6">VS</th>
                            <th className="py-4 px-6 text-muted-foreground md:text-2xl text-sm font-bold text-center border-b w-1/3">Other platforms</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-4 px-6 md:text-lg text-sm text-center font-semibold w-1/3">Easy Plug&amp;Run</td>
                            <td className="py-4 px-6 md:text-lg text-sm text-center font-light bg-gray-100 w-1/6">Setup</td>
                            <td className="py-4 px-6 md:text-lg text-sm text-center font-semibold text-muted-foreground w-1/3">Complex</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="py-4 px-6 md:text-lg text-sm text-center font-semibold w-1/3">Cheaper</td>
                            <td className="py-4 px-6 md:text-lg text-sm text-center font-light bg-gray-100 w-1/6">Pricing</td>
                            <td className="py-4 px-6 md:text-lg text-sm text-center font-semibold text-muted-foreground w-1/3">Expensive</td>
                        </tr>
                        <tr>
                            <td className="py-4 px-6 md:text-lg text-sm text-center font-semibold w-1/3">You own data</td>
                            <td className="py-4 px-6 md:text-lg text-sm text-center font-light bg-gray-100 w-1/6">Data Ownership</td>
                            <td className="py-4 px-6 md:text-lg text-sm text-center font-semibold text-muted-foreground w-1/3">Vendor owns data</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="py-4 px-6 md:text-lg text-sm text-center font-semibold w-1/3">B2B SaaS oriented</td>
                            <td className="py-4 px-6 md:text-lg text-sm text-center font-light bg-gray-100 w-1/6">Purpose</td>
                            <td className="py-4 px-6 md:text-lg text-sm text-center font-semibold text-muted-foreground w-1/3">General purpose</td>
                        </tr>
                        <tr>
                            <td className="py-4 px-6 md:text-lg text-sm text-center font-semibold w-1/3">Advanced tracking</td>
                            <td className="py-4 px-6 md:text-lg text-sm text-center font-light bg-gray-100 w-1/6">Tracking</td>
                            <td className="py-4 px-6 md:text-lg text-sm text-center font-semibold text-muted-foreground w-1/3">Usual tracking</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="py-4 px-6 md:text-lg text-sm text-center font-semibold w-1/3">Augments Google ecosystem</td>
                            <td className="py-4 px-6 md:text-lg text-sm text-center font-light bg-gray-100 w-1/6">Ecosystem</td>
                            <td className="py-4 px-6 md:text-lg text-sm text-center font-semibold text-muted-foreground w-1/3">No ecosystem</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}