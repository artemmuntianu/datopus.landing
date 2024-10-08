import BlurFade from "@/components/magicui/blur-fade";
import { Icons } from "@/components/icons";

const BLUR_FADE_DELAY = 0.04;

export default function PricingPage() {
    return (
        <main className="flex flex-col min-h-[100dvh] mt-[3.5rem] [background-image:linear-gradient(to_bottom,hsl(var(--primary)/10%),transparent)] [background-size:auto_50rem] [background-repeat:no-repeat]">
            <BlurFade delay={BLUR_FADE_DELAY}>
                <h1 className="font-medium text-3xl text-center my-8">
                    Pricing
                </h1>
            </BlurFade>
            <div className="max-[950px]:grid-cols-1 mx-auto px-4 mb-4 grid max-w-screen-lg gap-3 grid-cols-3">
                <BlurFade delay={BLUR_FADE_DELAY + 2 * 0.05}>
                    <section className="relative flex h-fit flex-col gap-5 rounded-2xl border p-5 bg-white border-gray-200 dark:border-gray-800">
                        <div className="flex flex-col gap-5">
                            <p className="min-h-[40px] text-sm text-gray-600 dark:text-gray-400">For individuals getting started with product analytics</p>
                            <div className="flex flex-col">
                                <h3 className="flex items-center font-semibold text-gray-900 dark:text-gray-100">Startup</h3>
                                <p>
                                    <span className="align-baseline text-2xl font-semibold text-gray-900 dark:text-gray-100">$0</span>
                                    <span className="align-baseline text-sm text-gray-600 dark:text-gray-400">/month</span>
                                </p>
                            </div>
                        </div>
                        <div className="grid gap-3">
                            <div className="min-h-5 hidden block">
                            </div>
                            <div className="min-h-5 hidden block">
                            </div>
                        </div>
                        <div className="grid gap-3.5 text-sm text-gray-600 dark:text-gray-400">
                            <div className="flex items-center gap-2">
                                {Icons.magicRect({ className: "size-4" })}
                                <span>Beautiful out of the box</span>
                            </div>
                            <div className="flex items-center gap-2">
                                {Icons.check({ className: "size-4" })}
                                <span>Access to all features</span>
                            </div>
                            <div className="flex items-center gap-2">
                                {Icons.check({ className: "size-4" })}
                                <span>One datasource limited</span>
                            </div>
                            <div className="flex items-center gap-2">
                                {Icons.check({ className: "size-4" })}
                                <span>1,000 users limited</span>
                            </div>
                        </div>
                    </section>
                </BlurFade>
                <BlurFade delay={BLUR_FADE_DELAY + 3 * 0.05}>
                    <section className="relative flex h-fit flex-col gap-5 rounded-2xl border p-5 bg-white">
                        <div className="flex flex-col gap-5">
                            <p className="min-h-[40px] text-sm text-gray-600 dark:text-gray-400 max-w-[230px]">For B2C business</p>
                            <div className="flex flex-col">
                                <h3 className="flex items-center font-semibold text-gray-900 dark:text-gray-100">B2C</h3>
                                <p>
                                    <span className="align-baseline text-2xl font-semibold text-gray-900 dark:text-gray-100">$29</span>
                                    <span className="align-baseline text-sm text-gray-600 dark:text-gray-400">/month</span>
                                </p>
                            </div>
                        </div>
                        <div className="grid auto-rows-fr gap-3">
                            <div className="min-h-5 hidden block">
                            </div>
                            <div className="min-h-5 hidden block">
                            </div>
                        </div>
                        <div className="grid auto-rows-fr gap-3.5 text-sm text-gray-600 dark:text-gray-400">
                            <div className="flex items-center gap-2">
                                {Icons.magicRect({ className: "size-4" })}
                                <span>Beautiful out of the box</span>
                            </div>
                            <div className="flex items-center gap-2">
                                {Icons.magicRect({ className: "size-4" })}
                                <span>No user, session or event limits</span>
                            </div>
                            <div className="flex items-center gap-2">
                                {Icons.check({ className: "size-4" })}
                                <span>Help with integration</span>
                            </div>
                            <div className="flex items-center gap-2">
                                {Icons.check({ className: "size-4" })}
                                <span>Access to all features</span>
                            </div>
                            <div className="flex items-center gap-2">
                                {Icons.check({ className: "size-4" })}
                                <span>Unlimited monitors</span>
                            </div>
                            <div className="flex items-center gap-2">
                                {Icons.check({ className: "size-4" })}
                                <span>Data retention: 24 months</span>
                            </div>
                            <div className="flex items-center gap-2">
                                {Icons.check({ className: "size-4" })}
                                <span>Datasources included: 1</span>
                            </div>
                        </div>
                    </section>
                </BlurFade>
                <BlurFade delay={BLUR_FADE_DELAY + 4 * 0.05}>
                    <section className="relative flex h-fit flex-col gap-5 rounded-2xl border p-5 bg-white">
                        <div className="flex flex-col gap-5">
                            <p className="min-h-[40px] text-sm text-gray-600 dark:text-gray-400 max-w-[230px]">For B2B business</p>
                            <div className="flex flex-col">
                                <h3 className="flex items-center font-semibold text-gray-900 dark:text-gray-100">B2B</h3>
                                <p>
                                    <span className="align-baseline text-2xl font-semibold text-gray-900 dark:text-gray-100">$59</span>
                                    <span className="align-baseline text-sm text-gray-600 dark:text-gray-400">/month</span>
                                </p>
                            </div>
                        </div>
                        <div className="grid gap-3">
                            <div className="min-h-5 hidden block">
                            </div>
                            <div className="min-h-5 hidden block">
                            </div>
                        </div>
                        <div className="grid gap-3.5 text-sm text-gray-600 dark:text-gray-400">
                            <div className="flex items-center gap-2">
                                {Icons.magicRect({ className: "size-4" })}
                                <span>Beautiful out of the box</span>
                            </div>
                            <div className="flex items-center gap-2">
                                {Icons.magicRect({ className: "size-4" })}
                                <span>No user, session or event limits</span>
                            </div>
                            <div className="flex items-center gap-2">
                                {Icons.check({ className: "size-4" })}
                                <span>Help with integration</span>
                            </div>
                            <div className="flex items-center gap-2">
                                {Icons.check({ className: "size-4" })}
                                <span>Access to all features</span>
                            </div>
                            <div className="flex items-center gap-2">
                                {Icons.check({ className: "size-4" })}
                                <span>Customer-facing dashboard</span>
                            </div>
                            <div className="flex items-center gap-2">
                                {Icons.check({ className: "size-4" })}
                                <span>Unlimited monitors</span>
                            </div>
                            <div className="flex items-center gap-2">
                                {Icons.check({ className: "size-4" })}
                                <span>Data retention: 24 months</span>
                            </div>
                            <div className="flex items-center gap-2">
                                {Icons.check({ className: "size-4" })}
                                <ul>
                                    <li>Datasources included: 10</li>
                                    <li>
                                        <table className="ml-5">
                                            <tbody>
                                                <tr><td className="text-right">11-100:&nbsp;</td><td>$3 per datasource</td></tr>
                                                <tr><td className="text-right">101-200:&nbsp;</td><td>$2.5 per datasource</td></tr>
                                                <tr><td className="text-right">201-300:&nbsp;</td><td>$2 per datasource</td></tr>
                                                <tr><td className="text-right">301+:&nbsp;</td><td>$1.5 per datasource</td></tr>
                                            </tbody>
                                        </table>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </BlurFade>
            </div>
        </main>
    )
}