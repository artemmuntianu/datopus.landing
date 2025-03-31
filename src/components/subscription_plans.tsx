'use client'

import { Icons } from "@/components/icons";
import BlurFade from "@/components/magicui/blur-fade";
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";
import * as Tooltip from '@radix-ui/react-tooltip';
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import { HandleScheduleDemo } from "./ui/button-schedule-demo";

interface PlanPrice {
    plan: string,
    period: string,
    currency: string,
    planPrice: number,
    mtuPrice?: number,
}

const BLUR_FADE_DELAY = 0.04;

const prices: PlanPrice[] = [
    {
        plan: 'Collect',
        period: 'mo',
        currency: 'usd',
        planPrice: 19
    },
    {
        plan: 'Collect',
        period: 'mo',
        currency: 'eur',
        planPrice: 19,
    },
    {
        plan: 'Collect',
        period: 'yr',
        currency: 'usd',
        planPrice: 15,
    },
    {
        plan: 'Collect',
        period: 'yr',
        currency: 'eur',
        planPrice: 15,
    },
    {
        plan: 'Optimize',
        period: 'mo',
        currency: 'usd',
        planPrice: 49,
        mtuPrice: 0.0005
    },
    {
        plan: 'Optimize',
        period: 'mo',
        currency: 'eur',
        planPrice: 49,
        mtuPrice: 0.0005
    },
    {
        plan: 'Optimize',
        period: 'yr',
        currency: 'usd',
        planPrice: 39,
        mtuPrice: 0.0005
    },
    {
        plan: 'Optimize',
        period: 'yr',
        currency: 'eur',
        planPrice: 39,
        mtuPrice: 0.0005
    },
    {
        plan: 'Scale',
        period: 'mo',
        currency: 'usd',
        planPrice: 99,
        mtuPrice: 0.0005
    },
    {
        plan: 'Scale',
        period: 'mo',
        currency: 'eur',
        planPrice: 99,
        mtuPrice: 0.0005
    },
    {
        plan: 'Scale',
        period: 'yr',
        currency: 'usd',
        planPrice: 79,
        mtuPrice: 0.0005
    },
    {
        plan: 'Scale',
        period: 'yr',
        currency: 'eur',
        planPrice: 79,
        mtuPrice: 0.0005
    }
];

export default function SubscriptionPlans() {
    const [period, setPeriod] = useState('yr');
    const [currency, setCurrency] = useState('usd');

    const getPlanPrice = (plan: string, period: string, currency: string) => {
        return (
            <>
                {currency == 'usd' ? <span>&#36;</span> : <span>&#8364;</span>}
                {prices.find(x => x.plan == plan && x.period == period && x.currency == currency)!.planPrice}
            </>
        )
    }

    const getMTUPrice = (plan: string, period: string, currency: string) => {
        return (
            <>
                {currency == 'usd' ? <span>&#36;</span> : <span>&#8364;</span>}
                {prices.find(x => x.plan == plan && x.period == period && x.currency == currency)!.mtuPrice}
            </>
        )
    }

    return (
        <Tooltip.Provider>
            <div className="mx-auto px-4 mb-4 max-w-screen-xl w-full">
                <div className="grid grid-cols-[auto_1fr] min-[950px]:grid-cols-[1fr_auto_1fr]">
                    <label htmlFor="toggle-period" className="justify-self-center items-center p-2 rounded-md cursor-pointer text-gray-800 col-[1] min-[950px]:col-[2]">
                        <input id="toggle-period" type="checkbox" className="hidden peer" defaultChecked={period == 'yr'} onChange={e => setPeriod(e.target.checked ? 'yr' : 'mo')} />
                        <span className="px-4 py-2 rounded-l-md border bg-white peer-checked:bg-transparent">Monthly</span>
                        <span className="px-4 py-2 rounded-r-md border bg-transparent peer-checked:bg-white" style={{ borderLeft: "none" }}>Annual (-20%)</span>
                    </label>
                    <label htmlFor="toggle-currency" className="justify-self-end items-center p-2 rounded-md cursor-pointer text-gray-800 col-[2] min-[950px]:col-[3]">
                        <input id="toggle-currency" type="checkbox" className="hidden peer" defaultChecked={currency == 'eur'} onChange={e => setCurrency(e.target.checked ? 'eur' : 'usd')} />
                        <span className="px-4 py-2 rounded-l-md border bg-white peer-checked:bg-transparent">&#36;</span>
                        <span className="px-4 py-2 rounded-r-md border bg-transparent peer-checked:bg-white" style={{ borderLeft: "none" }}>&#8364;</span>
                    </label>
                </div>
            </div>
            <div className="grid grid-cols-1 mx-auto px-4 mb-4 max-w-screen-xl gap-3 min-[950px]:grid-cols-3">
                <BlurFade delay={BLUR_FADE_DELAY + 2 * 0.05} className="bg-white flex flex-col p-5 rounded-xl shadow-md">
                    <section className="flex flex-col gap-3 h-full pb-5">
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-col gap-4">
                                <div className="flex justify-between">
                                    <div>
                                        <div>
                                            <span className="align-baseline text-4xl font-semibold text-gray-900">{getPlanPrice('Collect', period, currency)}</span>
                                            <span className="align-baseline text-sm text-gray-600">/month</span>
                                        </div>
                                        <div>
                                            <span className="align-baseline text-sm text-gray-600">&nbsp;</span>
                                        </div>
                                    </div>
                                    <span className="align-baseline text-xl font-semibold text-primary">Collect</span>
                                </div>
                                <p className="min-h-[50px] font-semibold">Supercharged Google Analytics</p>
                            </div>
                        </div>
                        <div className="grid gap-2 text-gray-600">
                            <div className="flex items-center gap-2">
                                <div>
                                    <span className="text-gray-900">Datasources</span>
                                    <ul className="ml-6">
                                        <li>{Icons.google_analytics({ className: "size-4 inline" })} Google Analytics</li>
                                        <li>&nbsp;</li>
                                    </ul>
                                </div>
                            </div>
                            <hr />
                            <div className="flex items-center gap-2">
                                <span className="text-gray-900">Our <b>Collect</b> plan includes:</span>
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
                    <div className="text-center text-sm mt-2 text-gray-600">&nbsp;</div>
                </BlurFade>
                <BlurFade delay={BLUR_FADE_DELAY + 3 * 0.05} className="bg-white flex flex-col p-5 rounded-xl shadow-md">
                    <section className="flex flex-col gap-3 h-full pb-5">
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-col gap-4">
                                <div className="flex justify-between">
                                    <div>
                                        <div>
                                            <span className="align-baseline text-4xl font-semibold text-gray-900">{getPlanPrice('Optimize', period, currency)}</span>
                                            <span className="align-baseline text-sm text-gray-600">/month</span>
                                        </div>
                                        <Tooltip.Root delayDuration={0}>
                                            <Tooltip.Trigger>
                                                <div className="flex items-baseline gap-1">
                                                    <span className="align-baseline text-sm font-semibold text-gray-600">{getMTUPrice('Optimize', period, currency)}</span>
                                                    <span className="align-baseline text-sm text-gray-600">/ MTU</span>
                                                    <QuestionMarkCircledIcon className="size-3 inline" />
                                                </div>
                                            </Tooltip.Trigger>
                                            <Tooltip.Content side="bottom">
                                                <div className="bg-white border-black border-[1px] border-solid rounded p-4">
                                                    MTU - Monthly Tracked Users<br />
                                                    10,000 MTU = $5
                                                </div>
                                                <Tooltip.Arrow />
                                            </Tooltip.Content>
                                        </Tooltip.Root>
                                    </div>
                                    <span className="align-baseline text-xl font-semibold text-primary">Optimize</span>
                                </div>
                                <p className="min-h-[50px] font-semibold">Modern analytics, for web apps and websites</p>
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
                                <span className="text-gray-900">Everything in <b>Collect</b>, and:</span>
                            </div>
                            <div className="flex items-center gap-2">
                                {Icons.check({ className: "size-4 text-[#ffa500]" })}
                                <span>1,000 MTUs included</span>
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
                    <div className="text-center text-sm mt-2 text-gray-600">30-day free trial</div>
                </BlurFade>
                <BlurFade delay={BLUR_FADE_DELAY + 4 * 0.05} className="bg-white flex flex-col p-5 rounded-xl shadow-md">
                    <section className="flex flex-col gap-3 h-full pb-5">
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-col gap-4">
                                <div className="flex justify-between">
                                    <div>
                                        <div>
                                            <span className="align-baseline text-4xl font-semibold text-gray-900">{getPlanPrice('Scale', period, currency)}</span>
                                            <span className="align-baseline text-sm text-gray-600">/month</span>
                                        </div>
                                        <Tooltip.Root delayDuration={0}>
                                            <Tooltip.Trigger>
                                                <div className="flex items-baseline gap-1">
                                                    <span className="align-baseline text-sm font-semibold text-gray-600">{getMTUPrice('Scale', period, currency)}</span>
                                                    <span className="align-baseline text-sm text-gray-600">/ MTU</span>
                                                    <QuestionMarkCircledIcon className="size-3 inline" />
                                                </div>
                                            </Tooltip.Trigger>
                                            <Tooltip.Content side="bottom">
                                                <div className="bg-white border-black border-[1px] border-solid rounded p-4">
                                                    MTU - Monthly Tracked Users<br />
                                                    10,000 MTU = $5
                                                </div>
                                                <Tooltip.Arrow />
                                            </Tooltip.Content>
                                        </Tooltip.Root>
                                    </div>
                                    <span className="align-baseline text-xl font-semibold text-primary">Scale</span>
                                </div>
                                <p className="min-h-[50px] font-semibold">Company-level analytics, for multi-tenant web apps</p>
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
                                <span className="text-gray-900">Everything in <b>Optimize</b>, and:</span>
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
                    <div className="text-center">
                        <Button className="min-w-[50%] inline-flex" variant="outline" onClick={HandleScheduleDemo}>
                            Contact us
                        </Button>
                        <div className="text-center text-sm mt-2 text-gray-600">&nbsp;</div>
                    </div>
                </BlurFade>
            </div>
        </Tooltip.Provider>
    )
}