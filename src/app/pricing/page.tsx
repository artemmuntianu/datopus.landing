import BlurFade from "@/components/magicui/blur-fade";
import { Metadata } from "next";
import SubscriptionPlans from "../../components/subscription_plans";

const BLUR_FADE_DELAY = 0.04;

export const metadata: Metadata = {
    title: 'Pricing',
}

export default function PricingPage() {
    return (
        <main className="flex flex-col min-h-[100dvh] mt-[3.5rem] [background-image:linear-gradient(to_bottom,hsl(var(--primary)/10%),transparent)] [background-size:100%_50rem] [background-repeat:no-repeat]">
            <BlurFade delay={BLUR_FADE_DELAY}>
                <h1 className="font-medium text-3xl text-center my-8">
                    Pricing
                </h1>
            </BlurFade>
            <SubscriptionPlans />
        </main>
    )
}