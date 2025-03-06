import BlurFade from "@/components/magicui/blur-fade";
import { JoinAffiliateProgramForm } from "../../components/join_affiliate_program_form";
import { Metadata } from "next";

const BLUR_FADE_DELAY = 0.04;

export const metadata: Metadata = {
    title: 'Affiliate Program',
}

export default function AffiliatePage() {
    return (
        <main className="flex flex-col min-h-[100dvh] mt-[3.5rem] [background-image:linear-gradient(to_bottom,hsl(var(--primary)/10%),transparent)] [background-size:100%_50rem] [background-repeat:no-repeat]">
            <BlurFade delay={BLUR_FADE_DELAY + 1 * BLUR_FADE_DELAY}>
                {/* Hero Section */}
                <section className="flex flex-col space-y-4 bg-blue-600 text-white py-20 px-4 text-center">
                    <h1 className="text-4xl font-bold">Earn a lifetime salary by sharing Datopus</h1>
                    <p className="mt-4 text-lg">Become an ambassador for Datopus, the most modern analytics platform on the market. Earn 50% of your affiliates&apos; payments. Right now.</p>
                    <JoinAffiliateProgramForm />
                </section>
                {/* Benefits */}
                <div className="bg-[hsl(var(--primary)/5%)]">
                    <section className="max-w-screen-xl mx-auto w-full pt-16 px-4">
                        <h2 className="text-3xl font-semibold text-center">Why Partner with Datopus?</h2>
                        <div className="grid md:grid-cols-2 gap-6 mt-8">
                            <div className="p-6 bg-white rounded-lg shadow-md text-center">
                                <h3 className="text-xl font-bold">Tailored for Analytics Experts</h3>
                                <p className="mt-2">Perfect for professionals setting up web analytics for clients.</p>
                            </div>
                            <div className="p-6 bg-white rounded-lg shadow-md text-center">
                                <h3 className="text-xl font-bold">High Commissions</h3>
                                <p className="mt-2">Earn one-time payment of <code>$20</code> and <code>50%</code> for every payment you generate and offer <code>1 free month</code> of Datopus to all your affiliates.</p>
                            </div>
                        </div>
                    </section>
                    {/* How It Works */}
                    <section className="max-w-screen-xl mx-auto w-full py-16 px-4">
                        <h2 className="text-3xl font-semibold text-center">How It Works</h2>
                        <div className="grid md:grid-cols-3 gap-6 mt-8">
                            <div className="p-6 bg-white rounded-lg shadow-md text-center">
                                <h3 className="text-xl font-bold">1. Sign Up</h3>
                                <p className="mt-2">Apply and get approved as an analytics partner. Get personalized referal link.</p>
                            </div>
                            <div className="p-6 bg-white rounded-lg shadow-md text-center">
                                <h3 className="text-xl font-bold">2. Implement Analytics</h3>
                                <p className="mt-2">Help your clients integrate Datopus analytics on their web apps.</p>
                            </div>
                            <div className="p-6 bg-white rounded-lg shadow-md text-center">
                                <h3 className="text-xl font-bold">3. Get Paid</h3>
                                <p className="mt-2">Earn commissions for every successful client referral.</p>
                            </div>
                        </div>
                    </section>
                </div>
                {/* Call to Action */}
                <section className="flex flex-col space-y-4 bg-blue-600 text-white py-20 px-4 text-center">
                    <h2 className="text-3xl font-semibold">Start Earning Today</h2>
                    <p className="mt-4 text-lg">Sign up now and become a Datopus analytics implementation partner.</p>
                    <JoinAffiliateProgramForm />
                </section>
            </BlurFade>
        </main>
    )
}