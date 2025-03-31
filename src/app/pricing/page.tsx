import { Metadata } from "next";
import { JoinStartupProgramForm } from "../../components/join_startup_program_form";
import SubscriptionPlans from "../../components/subscription_plans";

export const metadata: Metadata = {
    title: 'Pricing',
}

export default function PricingPage() {
    return (
        <main className="flex flex-col min-h-[100dvh] mt-[3.5rem] bg-[hsl(var(--primary)/5%)]">
            <h1 className="font-medium text-3xl text-center my-8">
                Pricing
            </h1>
            <SubscriptionPlans />
            <div id="startup_program" className="py-8 mx-4">
                <JoinStartupProgramForm />
            </div>
        </main>
    )
}