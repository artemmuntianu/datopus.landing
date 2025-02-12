import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";

const features_bg = [
    {
        name: "Self-service Data Exploration",
        descriptionNode:
            <p className="pointer-events-none max-w-lg font-light">
                Analyze how different user segments use specific features.
            </p>,
        href: "/platform/feature-self-service-data-exploration",
        cta: "Learn more",
        backgroundNode: <img src='features_usage.png' className="w-[calc(100%-3rem)] mx-6 border rounded-[0.25rem] [mask-image:linear-gradient(to_bottom,white,transparent)]" />,
    },
    {
        name: "User Journeys",
        descriptionNode:
            <p className="pointer-events-none max-w-lg font-light">
                Analyze the user flow to understand user behavior and decrease churn rate by improving your product.
            </p>,
        href: "/platform/feature-user-flow-diagram",
        cta: "Learn more",
        backgroundNode: <img src='features_flow.png' className="w-[calc(100%-3rem)] mx-6 border rounded-[0.25rem] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
    },
    {
        name: "Customer-facing Dashboards",
        descriptionNode:
            <p className="pointer-events-none max-w-lg font-light">
                Increase trust of your customers by providing them access to data of their users.
            </p>,
        href: "/platform/feature-customer-facing-dashboard",
        cta: "Learn more",
        backgroundNode: <img src='dashboard.png' className="w-[calc(100%-3rem)] mx-6 border rounded-[0.25rem] [mask-image:linear-gradient(to_bottom,white,transparent)]" />,
    },
    {
        name: "Embedded Analytics",
        descriptionNode:
            <p className="pointer-events-none max-w-lg font-light">
                Centralize your reports from Looker Studio, Google Sheets, PDF files, and more in a single safe place.
            </p>,
        href: "/platform/feature-embedded-analytics",
        cta: "Learn more",
        backgroundNode: <img src='embedded_analytics.png' className="w-[calc(100%-3rem)] mx-6 border rounded-[0.25rem] [mask-image:linear-gradient(to_bottom,white,transparent)]" />,
    },
    {
        name: "Monitoring & Alerting",
        descriptionNode:
            <p className="pointer-events-none max-w-lg font-light">
                Be alerted of spikes and drops in feature usage metrics.
            </p>,
        href: "/platform/feature-monitoring",
        cta: "Learn more",
        backgroundNode: <img src='features_monitoring.png' className="w-[calc(100%-3rem)] mx-6 border rounded-[0.25rem] [mask-image:linear-gradient(to_bottom,white,transparent)]" />,
    },
    {
        name: "Scalable to Any Number of Users",
        descriptionNode:
            <p className="pointer-events-none max-w-lg font-light">
                Pay much less with dataset-based subscription price.
            </p>,
        href: "/platform/feature-scalable-to-any-number-of-users",
        cta: "Learn more",
    }
];

const features = [
    {
        name: "Event Autocapture for Google Analytics",
        descriptionNode:
            <p className="max-w-lg font-light">
                Autocapture lets you track all events in your website or app automatically right into your Google Analytics account, no coding required. You don&apos;t have to chase your developers to track events!
            </p>,
        href: "/platform/feature-event-autocapture",
        cta: "Learn more",
    },
    {
        name: "Company-level Analytics for B2B SaaS",
        descriptionNode:
            <p className="max-w-lg font-light">
                Track, monitor, and analyze the data of each individual company that uses your SaaS platform.
            </p>,
        href: "/platform/feature-company-level-analytics",
        cta: "Learn more",
    }
];

export function FeaturesSection() {
    return (
        <>
            <BentoGrid>
                {
                    features.map((feature) => (
                        <BentoCard key={feature.name} {...feature} />
                    ))
                }
            </BentoGrid>
            <BentoGrid className="mt-[5px]">
                {
                    features_bg.map((feature) => (
                        <BentoCard key={feature.name} {...feature} />
                    ))
                }
            </BentoGrid>
        </>
    );
}