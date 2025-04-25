import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export const whatWeCanDo = [
    {
        title: "Chat with your data",
        subtitle: "Instantly query your analytics in plain language. Ask Data lets you get answers, build charts, and uncover insights without writing a single SQL query.",
        href: "https://app.datopus.io/auth/sign-up",
        id: "chat-data"
    },
    {
        title: "Watch real user sessions",
        subtitle: "Rewind user journeys exactly as they happened — spot bugs, UX friction, and confusing flows in seconds.",
        href: "https://app.datopus.io/auth/sign-up",
        id: "watch-sessions"
    },
    {
        title: "Discover which features users truly value",
        subtitle: "See which features get the most engagement and which are being ignored.",
        href: "https://app.datopus.io/auth/sign-up",
        id: "feature-engagement"
    },
    {
        title: "Identify why users drop off",
        subtitle: "Analyze user journeys and funnels to pinpoint exactly where and why people leave.",
        href: "https://app.datopus.io/auth/sign-up",
        id: "drop-off-analysis"
    },
    {
        title: "Let us handle the tracking",
        subtitle: "Autotracking automatically captures and tags every user action with the specific feature in which it occurred.",
        href: "https://app.datopus.io/auth/sign-up",
        id: "autotracking"
    },
    {
        title: "Act on insights",
        subtitle: "Replace gut feelings with clear, actionable insights from real user behavior.",
        href: "https://app.datopus.io/auth/sign-up",
        id: "data-driven"
    }
];

export function WhatWeCanDoSection() {
    return (
        <div className="container mx-auto px-4 py-16 space-y-24">
            {/* Feature 1 */}
            <section id="chat-data" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="text-4xl">{whatWeCanDo[0].title}</h2>
                    <p className="text-lg text-neutral-600">{whatWeCanDo[0].subtitle}</p>
                    <div className="py-6">
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="text-neutral-700">💬</div>
                                <div>
                                    <h3>Natural language queries</h3>
                                    <p className="text-sm text-neutral-600">Ask questions in plain English</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="text-neutral-700">📊</div>
                                <div>
                                    <h3>Instant visualizations</h3>
                                    <p className="text-sm text-neutral-600">Get charts and graphs automatically</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link
                        href={whatWeCanDo[0].href}
                        className="px-6 py-3 bg-primary text-white rounded-lg inline-flex items-center gap-2"
                    >
                        Start free trial
                        <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                </div>
                <div className="bg-neutral-100 rounded-xl p-6">
                    <div className="bg-white rounded-lg shadow-md p-4">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="text-2xl text-neutral-700">💬</div>
                            <div className="flex-1">
                                <div className="w-full px-4 py-2 border rounded-lg">Ask anything about your data...</div>
                            </div>
                        </div>
                        <div className="bg-neutral-50 rounded-lg p-4">
                            <section id="detailed-metrics" className="grid grid-cols-2 gap-6">
                                <div className="rounded-lg bg-white p-6 shadow-sm">
                                    <h3 className="mb-4 text-lg">User Demographics</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <span>18-24</span>
                                            <div className="h-2 w-1/4 rounded bg-neutral-300"></div>
                                            <span>25%</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span>25-34</span>
                                            <div className="h-2 w-2/5 rounded bg-neutral-400"></div>
                                            <span>40%</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span>35-44</span>
                                            <div className="h-2 w-1/5 rounded bg-neutral-500"></div>
                                            <span>20%</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span>45+</span>
                                            <div className="h-2 w-[15%] rounded bg-neutral-600"></div>
                                            <span>15%</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-lg bg-white p-6 shadow-sm">
                                    <h3 className="mb-4 text-lg">Platform Usage</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <span>Mobile</span>
                                            <div className="h-2 w-2/5 rounded bg-neutral-300"></div>
                                            <span>60%</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span>Desktop</span>
                                            <div className="h-2 w-1/3 rounded bg-neutral-400"></div>
                                            <span>30%</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span>Tablet</span>
                                            <div className="h-2 w-[10%] rounded bg-neutral-500"></div>
                                            <span>10%</span>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature 2 */}
            <section id="watch-sessions" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                    <div className="bg-neutral-100 rounded-xl p-6">
                        <div className="bg-white rounded-lg h-[300px] flex flex-col">
                            <div className="flex-1 flex">
                                <div className="w-2/3 flex flex-col">
                                    <div className="flex-1 flex items-center justify-center">
                                        <div className="text-center space-y-4">
                                            <div className="text-4xl text-neutral-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-neutral-400">
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <polygon points="10 8 16 12 10 16 10 8"></polygon>
                                                </svg>
                                            </div>
                                            <p className="text-neutral-600">User Session Recording</p>
                                        </div>
                                    </div>
                                    <div className="border-t px-4 py-2">
                                        <div className="flex items-center">
                                            <div className="flex items-center gap-2">
                                                <button className="hover:bg-neutral-100 p-1 rounded">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-600">
                                                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                                    </svg>
                                                </button>
                                                <button className="hover:bg-neutral-100 p-1 rounded">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-600">
                                                        <rect x="6" y="4" width="4" height="16"></rect>
                                                        <rect x="14" y="4" width="4" height="16"></rect>
                                                    </svg>
                                                </button>
                                                <span className="text-sm text-neutral-500">00:37 / 02:14</span>
                                            </div>
                                        </div>
                                        <div className="mt-2">
                                            <div className="h-1 bg-neutral-200 rounded overflow-hidden">
                                                <div className="h-full bg-primary w-[28%]"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-1/3 border-l">
                                    <div className="flex border-b">
                                        <button className="py-2 px-3 text-sm font-medium border-b-2 border-primary">Console</button>
                                        <button className="py-2 px-3 text-sm font-medium text-neutral-500">Network</button>
                                    </div>
                                    <div className="h-[220px]">
                                        {/* Network tab */}
                                        <div className="hidden p-2 h-full overflow-auto">
                                            <div className="text-xs space-y-2">
                                                <div className="p-2 border-b border-neutral-100">
                                                    <div className="flex justify-between mb-1">
                                                        <span className="font-medium text-blue-600">/api/user/profile</span>
                                                        <span className="text-green-600">200</span>
                                                    </div>
                                                    <div className="flex justify-between text-neutral-500">
                                                        <span>GET</span>
                                                        <span>243ms</span>
                                                    </div>
                                                </div>
                                                <div className="p-2 border-b border-neutral-100">
                                                    <div className="flex justify-between mb-1">
                                                        <span className="font-medium text-blue-600">/api/analytics/events</span>
                                                        <span className="text-green-600">200</span>
                                                    </div>
                                                    <div className="flex justify-between text-neutral-500">
                                                        <span>POST</span>
                                                        <span>187ms</span>
                                                    </div>
                                                </div>
                                                <div className="p-2 border-b border-neutral-100">
                                                    <div className="flex justify-between mb-1">
                                                        <span className="font-medium text-blue-600">/api/assets/image.png</span>
                                                        <span className="text-green-600">200</span>
                                                    </div>
                                                    <div className="flex justify-between text-neutral-500">
                                                        <span>GET</span>
                                                        <span>89ms</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Console tab (hidden by default) */}
                                        <div className=" p-2 h-full overflow-auto">
                                            <div className="text-xs space-y-2 font-mono text-neutral-500">
                                                <div className="p-1">
                                                    <span>00:12</span> <span className="text-neutral-500">›</span> <span>User clicked on &quot;Sign Up&quot; button</span>
                                                </div>
                                                <div className="p-1">
                                                    <span>00:18</span> <span className="text-neutral-500">⚠</span> <span>Warning: Form validation failed</span>
                                                </div>
                                                <div className="p-1">
                                                    <span>00:25</span> <span className="text-neutral-500">›</span> <span>Auth token received</span>
                                                </div>
                                                <div className="p-1">
                                                    <span>00:31</span> <span className="text-neutral-500">✖</span> <span>Error: Failed to load user preferences</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="order-1 md:order-2 space-y-6">
                    <h2 className="text-4xl">{whatWeCanDo[1].title}</h2>
                    <p className="text-lg text-neutral-600">{whatWeCanDo[1].subtitle}</p>
                    <div className="py-6">
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="text-neutral-700">🎥</div>
                                <div>
                                    <h3>Full session playback</h3>
                                    <p className="text-sm text-neutral-600">Watch exactly what users did and saw</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="text-neutral-700">🔍</div>
                                <div>
                                    <h3>Technical details</h3>
                                    <p className="text-sm text-neutral-600">Console logs & network requests</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link
                        href={whatWeCanDo[1].href}
                        className="px-6 py-3 bg-primary text-white rounded-lg inline-flex items-center gap-2"
                    >
                        Start free trial
                        <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                </div>
            </section>

            {/* Feature 3 */}
            <section id="feature-engagement" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="text-4xl">{whatWeCanDo[2].title}</h2>
                    <p className="text-lg text-neutral-600">{whatWeCanDo[2].subtitle}</p>
                    <div className="py-6">
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="text-neutral-700">⭐</div>
                                <div>
                                    <h3>Feature Usage Analytics</h3>
                                    <p className="text-sm text-neutral-600">Track engagement metrics in real-time</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="text-neutral-700">📈</div>
                                <div>
                                    <h3>Engagement Trends</h3>
                                    <p className="text-sm text-neutral-600">Spot growing and declining usage patterns</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link
                        href={whatWeCanDo[2].href}
                        className="px-6 py-3 bg-primary text-white rounded-lg inline-flex items-center gap-2"
                    >
                        Start free trial
                        <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                </div>
                <div className="bg-neutral-100 rounded-xl p-6">
                    <div className="bg-white rounded-lg p-4">
                        <h3 className="text-lg mb-4">Feature Usage Statistics</h3>
                        <div className="overflow-x-auto">
                            <table className="min-w-full text-sm">
                                <thead className="bg-neutral-50">
                                    <tr>
                                        <th className="px-4 py-2 text-left font-medium text-neutral-600">Feature</th>
                                        <th className="px-4 py-2 text-left font-medium text-neutral-600">Device</th>
                                        <th className="px-4 py-2 text-right font-medium text-neutral-600">Users</th>
                                        <th className="px-4 py-2 text-right font-medium text-neutral-600">Views</th>
                                        <th className="px-4 py-2 text-right font-medium text-neutral-600">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-neutral-100">
                                    <tr>
                                        <td className="px-4 py-2 align-middle">Page: /auth</td>
                                        <td className="px-4 py-2 align-middle">Mobile</td>
                                        <td className="px-4 py-2 align-middle text-right">1,245</td>
                                        <td className="px-4 py-2 align-middle text-right">5,832</td>
                                        <td className="px-4 py-2 align-middle text-right">15,478</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 align-middle">Filter</td>
                                        <td className="px-4 py-2 align-middle">Mobile</td>
                                        <td className="px-4 py-2 align-middle text-right">876</td>
                                        <td className="px-4 py-2 align-middle text-right">3,265</td>
                                        <td className="px-4 py-2 align-middle text-right">9,853</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 align-middle">Breadcrumb</td>
                                        <td className="px-4 py-2 align-middle">Desktop</td>
                                        <td className="px-4 py-2 align-middle text-right">543</td>
                                        <td className="px-4 py-2 align-middle text-right">2,187</td>
                                        <td className="px-4 py-2 align-middle text-right">6,543</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature 4 */}
            <section id="drop-off-analysis" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                    <div className="bg-neutral-100 rounded-xl p-6">
                        <div className="bg-white rounded-lg p-4">
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <h3>User Journey Funnel</h3>
                                    <div className="flex items-center gap-2">
                                        <span>Last 30 days</span>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="h-8 bg-primary/50 rounded-lg w-full"></div>
                                    <div className="h-8 bg-primary/40 rounded-lg w-4/5"></div>
                                    <div className="h-8 bg-primary/30 rounded-lg w-3/5"></div>
                                    <div className="h-8 bg-primary/20 rounded-lg w-2/5"></div>
                                    <div className="h-8 bg-primary/10 rounded-lg w-1/5"></div>
                                </div>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="text-center">
                                        <div>85%</div>
                                        <div className="text-sm text-neutral-600">Conversion</div>
                                    </div>
                                    <div className="text-center">
                                        <div>15%</div>
                                        <div className="text-sm text-neutral-600">Drop-off</div>
                                    </div>
                                    <div className="text-center">
                                        <div>2.5min</div>
                                        <div className="text-sm text-neutral-600">Avg. Time</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="order-1 md:order-2 space-y-6">
                    <h2 className="text-4xl">{whatWeCanDo[3].title}</h2>
                    <p className="text-lg text-neutral-600">{whatWeCanDo[3].subtitle}</p>
                    <div className="py-6">
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="text-neutral-700">🔍</div>
                                <div>
                                    <h3>Funnel Analysis</h3>
                                    <p className="text-sm text-neutral-600">Identify exact drop-off points</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="text-neutral-700">🚩</div>
                                <div>
                                    <h3>Exit Insights</h3>
                                    <p className="text-sm text-neutral-600">Understand why users abandon journeys</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link
                        href={whatWeCanDo[3].href}
                        className="px-6 py-3 bg-primary text-white rounded-lg inline-flex items-center gap-2"
                    >
                        Start free trial
                        <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                </div>
            </section>

            {/* Feature 5 */}
            <section id="autotracking" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="text-4xl">{whatWeCanDo[4].title}</h2>
                    <p className="text-lg text-neutral-600">{whatWeCanDo[4].subtitle}</p>
                    <div className="py-6">
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="text-neutral-700">⚡</div>
                                <div>
                                    <h3>Automatic Event Tracking</h3>
                                    <p className="text-sm text-neutral-600">No manual instrumentation required</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="text-neutral-700">🏷️</div>
                                <div>
                                    <h3>Smart Tagging</h3>
                                    <p className="text-sm text-neutral-600">Contextual event categorization</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link
                        href={whatWeCanDo[4].href}
                        className="px-6 py-3 bg-primary text-white rounded-lg inline-flex items-center gap-2"
                    >
                        Start free trial
                        <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                </div>
                <div className="bg-neutral-100 rounded-xl p-6">
                    <div className="bg-white rounded-lg p-4">
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-3 bg-neutral-50 rounded-lg">
                                <div className="text-xs text-neutral-400">○</div>
                                <span>Button Click: "Start Trial"</span>
                                <span className="ml-auto text-sm text-neutral-500">2s ago</span>
                            </div>
                            <div className="flex items-center gap-4 p-3 bg-neutral-50 rounded-lg">
                                <div className="text-xs text-neutral-400">○</div>
                                <span>Page View: "/features"</span>
                                <span className="ml-auto text-sm text-neutral-500">5s ago</span>
                            </div>
                            <div className="flex items-center gap-4 p-3 bg-neutral-50 rounded-lg">
                                <div className="text-xs text-neutral-400">○</div>
                                <span>Form Submit: "Contact"</span>
                                <span className="ml-auto text-sm text-neutral-500">30s ago</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature 6 */}
            <section id="data-driven" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                    <div className="bg-neutral-100 rounded-xl p-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="rounded-lg bg-white p-6 shadow-sm">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-neutral-600">Active Users</span>
                                    <i className="text-neutral-800" data-fa-i2svg=""><svg className="svg-inline--fa fa-users" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="users" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"></path></svg></i>
                                </div>
                                <p className="mt-2 text-2xl">12,847</p>
                                <p className="mt-1 text-sm text-neutral-600">+12.3% vs last month</p>
                            </div>
                            <div className="rounded-lg bg-white p-6 shadow-sm">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-neutral-600">Conversion Rate</span>
                                    <i className="text-neutral-800" data-fa-i2svg=""><svg className="svg-inline--fa fa-percent" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="percent" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M374.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-320 320c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l320-320zM128 128A64 64 0 1 0 0 128a64 64 0 1 0 128 0zM384 384a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"></path></svg></i>
                                </div>
                                <p className="mt-2 text-2xl">3.2%</p>
                                <p className="mt-1 text-sm text-neutral-600">+1.8% vs last month</p>
                            </div>
                            <div className="rounded-lg bg-white p-6 shadow-sm">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-neutral-600">Total Revenue</span>
                                    <i className="text-neutral-800" data-fa-i2svg=""><svg className="svg-inline--fa fa-arrow-trend-up" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-trend-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32H544c17.7 0 32 14.3 32 32V288c0 17.7-14.3 32-32 32s-32-14.3-32-32V205.3L342.6 374.6c-12.5 12.5-32.8 12.5-45.3 0L192 269.3 54.6 406.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0L320 306.7 466.7 160H384z"></path></svg></i>
                                </div>
                                <p className="mt-2 text-2xl">$847,293</p>
                                <p className="mt-1 text-sm text-neutral-600">+23.5% vs last month</p>
                            </div>
                            <div className="rounded-lg bg-white p-6 shadow-sm">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-neutral-600">Avg. Session</span>
                                    <i className="text-neutral-800" data-fa-i2svg=""><svg className="svg-inline--fa fa-clock" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="clock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"></path></svg></i>
                                </div>
                                <p className="mt-2 text-2xl">4m 32s</p>
                                <p className="mt-1 text-sm text-neutral-600">-0.5% vs last month</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="order-1 md:order-2 space-y-6">
                    <h2 className="text-4xl">{whatWeCanDo[5].title}</h2>
                    <p className="text-lg text-neutral-600">{whatWeCanDo[5].subtitle}</p>
                    <div className="py-6">
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="text-neutral-700">📊</div>
                                <div>
                                    <h3>Real-time analytics</h3>
                                    <p className="text-sm text-neutral-600">Make decisions based on live data</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="text-neutral-700">🎯</div>
                                <div>
                                    <h3>Actionable insights</h3>
                                    <p className="text-sm text-neutral-600">Clear recommendations for improvement</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="text-neutral-700">🔄</div>
                                <div>
                                    <h3>Continuous improvement</h3>
                                    <p className="text-sm text-neutral-600">Measure impact of changes over time</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link
                        href={whatWeCanDo[5].href}
                        className="px-6 py-3 bg-primary text-white rounded-lg inline-flex items-center gap-2"
                    >
                        Start free trial
                        <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                </div>
            </section>
        </div>
    );
} 