import Image from "next/image";

export function BrandsSection() {
    return (
        <section id="brands" className="mx-auto max-w-screen-md px-4 mb-[3.5rem]">
            <div className="mb-5 mx-auto space-y-5 py-6 px-4 text-center">
                <h2 className="mx-auto mb-2 max-w-4xl text-2xl/relaxed">
                    Brands that trust us
                </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
                <div className="relative w-48 h-6 grayscale hover:grayscale-0 transition-all duration-300">
                    <Image
                        src="/companies/share_delivery.png"
                        alt="Share Delivery"
                        fill
                        className="object-contain"
                    />
                </div>
                <div className="relative w-48 h-6 grayscale hover:grayscale-0 transition-all duration-300">
                    <Image
                        src="/companies/mojo.png"
                        alt="Mojo"
                        fill
                        className="object-contain"
                    />
                </div>
                <div className="relative w-48 h-6 grayscale hover:grayscale-0 transition-all duration-300">
                    <Image
                        src="/companies/inkspot.png"
                        alt="Inkspot"
                        fill
                        className="object-contain"
                    />
                </div>
                <div className="relative w-48 h-6 grayscale hover:grayscale-0 transition-all duration-300">
                    <Image
                        src="/companies/startup_leiria.png"
                        alt="Startup Leiria"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
        </section>
    );
} 