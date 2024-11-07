import BlurFade from "@/components/magicui/blur-fade";
import { Icons } from "@/components/icons";
import { ButtonScheduleDemo } from "../../components/ui/button-schedule-demo";

const BLUR_FADE_DELAY = 0.04;

export default function PricingPage() {
    return (
        <main className="flex flex-col min-h-[100dvh] mt-[3.5rem] [background-image:linear-gradient(to_bottom,hsl(var(--primary)/10%),transparent)] [background-size:100%_50rem] [background-repeat:no-repeat]">
            <BlurFade delay={BLUR_FADE_DELAY}>
                <h1 className="font-medium text-3xl text-center my-8">
                    Pricing
                </h1>
            </BlurFade>
            <div className="max-[950px]:grid-cols-1 mx-auto px-4 mb-4 grid max-w-screen-xl gap-3 grid-cols-3">
                <BlurFade delay={BLUR_FADE_DELAY + 2 * 0.05} className="bg-white border border-gray-200 dark:border-gray-800 flex flex-col p-5 rounded-2xl">
                    <section className="flex flex-col gap-5 h-full pb-5">
                        <div className="flex flex-col gap-5">
                            <p className="min-h-[40px] text-sm text-gray-600 dark:text-gray-400">For individuals getting started with product analytics</p>
                            <div className="flex flex-col">
                                <h3 className="flex items-center font-semibold text-gray-900 dark:text-gray-100">Starter</h3>
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
                                <span>10,000 users/mo limited</span>
                            </div>
                        </div>
                    </section>
                    <ButtonScheduleDemo />
                </BlurFade>
                <BlurFade delay={BLUR_FADE_DELAY + 3 * 0.05} className="bg-white border border-gray-200 dark:border-gray-800 flex flex-col p-5 rounded-2xl">
                    <section className="flex flex-col gap-5 h-full pb-5">
                        <div className="flex flex-col gap-5">
                            <p className="min-h-[40px] text-sm text-gray-600 dark:text-gray-400 max-w-[230px]">For B2C business</p>
                            <div className="flex flex-col">
                                <h3 className="flex items-center font-semibold text-gray-900 dark:text-gray-100">B2C</h3>
                                <p>
                                    <span className="align-baseline text-2xl font-semibold text-gray-900 dark:text-gray-100">$49</span>
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
                                <span>Unlimited monitors</span>
                            </div>
                            <div className="flex items-center gap-2">
                                {Icons.check({ className: "size-4" })}
                                <span>24 months data retention</span>
                            </div>
                            <div className="flex items-center gap-2">
                                {Icons.check({ className: "size-4" })}
                                <div>
                                    Datasources:
                                    <ul className="list-disc ml-6">
                                        <li>1 included</li>
                                        <li>No extra</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    <ButtonScheduleDemo />
                </BlurFade>
                <BlurFade delay={BLUR_FADE_DELAY + 4 * 0.05} className="bg-white border border-gray-200 dark:border-gray-800 flex flex-col p-5 rounded-2xl">
                    <section className="flex flex-col gap-5 h-full pb-5">
                        <div className="flex flex-col gap-5">
                            <p className="min-h-[40px] text-sm text-gray-600 dark:text-gray-400 max-w-[230px]">For B2B business</p>
                            <div className="flex flex-col">
                                <h3 className="flex items-center font-semibold text-gray-900 dark:text-gray-100">B2B</h3>
                                <p>
                                    <span className="align-baseline text-2xl font-semibold text-gray-900 dark:text-gray-100">$99</span>
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
                                <span>Unlimited monitors</span>
                            </div>
                            <div className="flex items-center gap-2">
                                {Icons.check({ className: "size-4" })}
                                <span>24 months data retention</span>
                            </div>
                            <div className="flex items-center gap-2">
                                {Icons.check({ className: "size-4" })}
                                <div>
                                    Datasources:
                                    <ul className="list-disc ml-6">
                                        <li>10 included</li>
                                        <li>$10 each extra</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                {Icons.check({ className: "size-4" })}
                                <span>Customer-facing dashboard</span>
                            </div>
                        </div>
                    </section>
                    <ButtonScheduleDemo />
                </BlurFade>
            </div>
        </main>
    )
}