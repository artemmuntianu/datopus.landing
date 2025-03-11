import { Icons } from "@/components/icons";
import BlurFade from "@/components/magicui/blur-fade";
import { InfoCircledIcon, QuestionMarkCircledIcon, QuestionMarkIcon } from "@radix-ui/react-icons";
import * as Tooltip from '@radix-ui/react-tooltip';
import { Metadata } from "next";
import Link from "next/link";
import { Button } from "../../components/ui/button";

const BLUR_FADE_DELAY = 0.04;

export const metadata: Metadata = {
    title: 'Pricing',
}

export default function PricingPage() {
    return (
        <Tooltip.Provider>

            <main className="flex flex-col min-h-[100dvh] mt-[3.5rem] [background-image:linear-gradient(to_bottom,hsl(var(--primary)/10%),transparent)] [background-size:100%_50rem] [background-repeat:no-repeat]">
                <BlurFade delay={BLUR_FADE_DELAY}>
                    <h1 className="font-medium text-3xl text-center my-8">
                        Pricing
                    </h1>
                </BlurFade>
                <div className="max-[950px]:grid-cols-1 mx-auto px-4 mb-4 grid max-w-screen-xl gap-3 grid-cols-3">
                    <BlurFade delay={BLUR_FADE_DELAY + 2 * 0.05} className="bg-white flex flex-col p-5 rounded-xl shadow-md">
                        <section className="flex flex-col gap-3 h-full pb-5">
                            <div className="flex flex-col gap-3">
                                <div className="flex flex-col gap-4">
                                    <div className="flex justify-between">
                                        <div>
                                            <div>
                                                <span className="align-baseline text-2xl font-semibold text-gray-900">$19</span>
                                                <span className="align-baseline text-sm text-gray-600">/month</span>
                                            </div>
                                            <div>
                                                <span className="align-baseline text-2xl font-semibold text-gray-900">&nbsp;</span>
                                            </div>
                                        </div>
                                        <span className="align-baseline text-xl font-semibold text-primary">Pro</span>
                                    </div>
                                    <p className="min-h-[30px] text-gray-600">Supercharged Google Analytics</p>
                                </div>
                            </div>
                            <div className="grid gap-2 text-gray-600">
                                <div className="flex items-center gap-2">
                                    <div>
                                        <span className="text-gray-900">Datasource</span>
                                        <ul className="ml-6">
                                            <li>{Icons.google_analytics({ className: "size-4 inline" })} Google Analytics</li>
                                            <li>&nbsp;</li>
                                        </ul>
                                    </div>
                                </div>
                                <hr />
                                <div className="flex items-center gap-2">
                                    <span className="text-gray-900">Our <b>Pro</b> plan includes:</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    {Icons.magicRect({ className: "size-4 text-[#ffa500]" })}
                                    <span>White glove service</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    {Icons.check({ className: "size-4 text-[#ffa500]" })}
                                    <span>Auto-track user actions</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    {Icons.check({ className: "size-4 text-[#ffa500]" })}
                                    <span>Dashboards</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    {Icons.check({ className: "size-4 text-[#ffa500]" })}
                                    <span>External reports</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    {Icons.check({ className: "size-4 text-[#ffa500]" })}
                                    <span>No user, session or event limits</span>
                                </div>
                            </div>
                        </section>
                        <div className="flex justify-center">
                            <Button className="min-w-[50%]" variant="default" asChild>
                                <Link href="https://app.datopus.io/auth/sign-up">Start free trial</Link>
                            </Button>
                        </div>
                        <div className="text-center text-sm mt-2 text-gray-600">14-day free trial</div>
                    </BlurFade>
                    <BlurFade delay={BLUR_FADE_DELAY + 3 * 0.05} className="bg-white flex flex-col p-5 rounded-xl shadow-md">
                        <section className="flex flex-col gap-3 h-full pb-5">
                            <div className="flex flex-col gap-3">
                                <div className="flex flex-col gap-4">
                                    <div className="flex justify-between">
                                        <div>
                                            <div>
                                                <span className="align-baseline text-2xl font-semibold text-gray-900">$49</span>
                                                <span className="align-baseline text-sm text-gray-600">/month</span>
                                            </div>
                                            <Tooltip.Root delayDuration={0}>
                                                <Tooltip.Trigger>
                                                    <div className="flex items-baseline gap-1">
                                                        <span className="align-baseline text-2xl font-semibold text-gray-900">$0.0005</span>
                                                        <span className="align-baseline text-sm text-gray-600">/ extra MTU</span>
                                                        <QuestionMarkCircledIcon className="size-4 inline" />
                                                    </div>
                                                </Tooltip.Trigger>
                                                <Tooltip.Content>
                                                    <div className="bg-white border-black border-[1px] border-solid rounded p-4">
                                                        MTU - Monthly Tracked Users<br />
                                                        10,000 MTU = $5
                                                    </div>
                                                    <Tooltip.Arrow />
                                                </Tooltip.Content>
                                            </Tooltip.Root>
                                        </div>
                                        <span className="align-baseline text-xl font-semibold text-primary">Premium B2C</span>
                                    </div>
                                    <p className="min-h-[30px] text-gray-600">Modern analytics, for web apps and websites</p>
                                </div>
                            </div>
                            <div className="grid gap-2 text-gray-600">
                                <div className="flex items-center gap-2">
                                    <div>
                                        <span className="text-gray-900">Datasources</span>
                                        <ul className="ml-6">
                                            <li>{Icons.google_analytics({ className: "size-4 inline" })} Google Analytics</li>
                                            <li>{Icons.google_bigquery({ className: "size-4 inline" })} Google Big Query</li>
                                        </ul>
                                    </div>
                                </div>
                                <hr />
                                <div className="flex items-center gap-2">
                                    <span className="text-gray-900">Everything in <b>Pro</b>, and:</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    {Icons.check({ className: "size-4 text-[#ffa500]" })}
                                    <span>1,000 MTU included</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    {Icons.check({ className: "size-4 text-[#ffa500]" })}
                                    <span>Event-level reports</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    {Icons.check({ className: "size-4 text-[#ffa500]" })}
                                    <span>User-level reports</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    {Icons.check({ className: "size-4 text-[#ffa500]" })}
                                    <span>Feature-level reports</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    {Icons.check({ className: "size-4 text-[#ffa500]" })}
                                    <span>Advanced dashboards</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    {Icons.check({ className: "size-4 text-[#ffa500]" })}
                                    <span>Monitoring & alerting</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    {Icons.check({ className: "size-4 text-[#ffa500]" })}
                                    <span>24 months data retention</span>
                                </div>
                            </div>
                        </section>
                        <div className="flex justify-center">
                            <Button className="min-w-[50%]" variant="default" asChild>
                                <Link href="https://app.datopus.io/auth/sign-up">Start free trial</Link>
                            </Button>
                        </div>
                        <div className="text-center text-sm mt-2 text-gray-600">14-day free trial</div>
                    </BlurFade>
                    <BlurFade delay={BLUR_FADE_DELAY + 4 * 0.05} className="bg-white flex flex-col p-5 rounded-xl shadow-md">
                        <section className="flex flex-col gap-3 h-full pb-5">
                            <div className="flex flex-col gap-3">
                                <div className="flex flex-col gap-4">
                                    <div className="flex justify-between">
                                        <div>
                                            <div>
                                                <span className="align-baseline text-2xl font-semibold text-gray-900">$99</span>
                                                <span className="align-baseline text-sm text-gray-600">/month</span>
                                            </div>
                                            <Tooltip.Root delayDuration={0}>
                                                <Tooltip.Trigger>
                                                    <div className="flex items-baseline gap-1">
                                                        <span className="align-baseline text-2xl font-semibold text-gray-900">$0.0005</span>
                                                        <span className="align-baseline text-sm text-gray-600">/ extra MTU</span>
                                                        <QuestionMarkCircledIcon className="size-4 inline" />
                                                    </div>
                                                </Tooltip.Trigger>
                                                <Tooltip.Content>
                                                    <div className="bg-white border-black border-[1px] border-solid rounded p-4">
                                                        MTU - Monthly Tracked Users<br />
                                                        10,000 MTU = $5
                                                    </div>
                                                    <Tooltip.Arrow />
                                                </Tooltip.Content>
                                            </Tooltip.Root>
                                        </div>
                                        <span className="align-baseline text-xl font-semibold text-primary">Premium B2B</span>
                                    </div>
                                    <p className="min-h-[30px] text-gray-600">Company-level analytics, for multi-tenant web apps</p>
                                </div>
                            </div>
                            <div className="grid gap-2 text-gray-600">
                                <div className="flex items-center gap-2">
                                    <div>
                                        <span className="text-gray-900">Datasources</span>
                                        <ul className="ml-6">
                                            <li>{Icons.google_analytics({ className: "size-4 inline" })} Google Analytics</li>
                                            <li>{Icons.google_bigquery({ className: "size-4 inline" })} Google Big Query</li>
                                        </ul>
                                    </div>
                                </div>
                                <hr />
                                <div className="flex items-center gap-2">
                                    <span className="text-gray-900">Everything in <b>Premium B2C</b>, and:</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    {Icons.check({ className: "size-4 text-[#ffa500]" })}
                                    <span>1,000 MTU included</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    {Icons.check({ className: "size-4 text-[#ffa500]" })}
                                    <span>Company-level reports</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    {Icons.check({ className: "size-4 text-[#ffa500]" })}
                                    <span>Customer-facing dashboard</span>
                                </div>
                            </div>
                        </section>
                        <div className="flex justify-center">
                            <Button className="min-w-[50%]" variant="default" asChild>
                                <Link href="https://app.datopus.io/auth/sign-up">Start free trial</Link>
                            </Button>
                        </div>
                        <div className="text-center text-sm mt-2 text-gray-600">14-day free trial</div>
                    </BlurFade>
                </div>
            </main>
        </Tooltip.Provider>
    )
}