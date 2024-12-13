import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";

const features_bg = [
    {
        name: "Customer-facing dashboard",
        descriptionNode:
            <p className="pointer-events-none max-w-lg text-muted-foreground">
                Increase trust of your customers by providing access to data of their users.
            </p>,
        href: "/blog/feature-customer-facing-dashboard",
        cta: "Learn more",
        backgroundNode: <img src='dashboard.png' className="w-[calc(100%-3rem)] mx-6 border rounded-[0.25rem] [mask-image:linear-gradient(to_bottom,white,transparent)]" />,
    },
    {
        name: "Embedded analytics",
        descriptionNode:
            <p className="pointer-events-none max-w-lg text-muted-foreground">
                Centralize your reports from Looker Studio, Google Sheets, PDF files, and more in a single safe place.
            </p>,
        href: "/blog/feature-embedded-analytics",
        cta: "Learn more",
        backgroundNode: <img src='embedded_analytics.png' className="w-[calc(100%-3rem)] mx-6 border rounded-[0.25rem] [mask-image:linear-gradient(to_bottom,white,transparent)]" />,
    },
    {
        name: "Monitoring",
        descriptionNode:
            <p className="pointer-events-none max-w-lg text-muted-foreground">
                Be alerted of spikes and drops in feature usage metrics.
            </p>,
        href: "/blog/feature-monitoring",
        cta: "Learn more",
        backgroundNode: <img src='features_monitoring.png' className="w-[calc(100%-3rem)] mx-6 border rounded-[0.25rem] [mask-image:linear-gradient(to_bottom,white,transparent)]" />,
    },
    {
        name: "Self-service data exploration",
        descriptionNode:
            <p className="pointer-events-none max-w-lg text-muted-foreground">
                Analyze how different segments use specific features.
            </p>,
        href: "/blog/feature-self-service-data-exploration",
        cta: "Learn more",
        backgroundNode: <img src='features_usage.png' className="w-[calc(100%-3rem)] mx-6 border rounded-[0.25rem] [mask-image:linear-gradient(to_bottom,white,transparent)]" />,
    }
];

const features = [
    {
        name: "User-flow diagram",
        descriptionNode:
            <p className="pointer-events-none max-w-lg text-muted-foreground">
                Analyze the user flow to understand user behavior and decrease churn rate by improving your product.
            </p>,
        href: "/blog/feature-user-flow-diagram",
        cta: "Learn more",
        backgroundNode: <img src='features_flow.png' className="w-[calc(100%-3rem)] mx-6 border rounded-[0.25rem] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
    },
    {
        name: "Scalable to any number of users",
        descriptionNode:
            <p className="pointer-events-none max-w-lg text-muted-foreground">
                Pay much less with dataset-based subscription price.
            </p>,
        href: "/blog/feature-scalable-to-any-number-of-users",
        cta: "Learn more",
    },
    {
        name: "Custom tracking",
        descriptionNode:
            <p className="max-w-lg text-muted-foreground">
                Determine feature attributes of your choice, including custom and automatically populated dimensions.
            </p>,
        href: "/blog/feature-custom-tracking",
        cta: "Learn more",
    },
    {
        name: "Reliable Reports",
        descriptionNode:
            <p className="pointer-events-none max-w-lg text-muted-foreground">
                Analyze billions of records without Data Sampling limits.
            </p>,
        href: "/blog/feature-reliable-reports",
        cta: "Learn more",
    }
];

export function FeaturesSection() {
    return (
        <>
            <BentoGrid>
                {
                    features_bg.map((feature) => (
                        <BentoCard key={feature.name} {...feature} />
                    ))
                }
            </BentoGrid>
            <BentoGrid className="mt-[5px]">
                {
                    features.map((feature) => (
                        <BentoCard key={feature.name} {...feature} />
                    ))
                }
            </BentoGrid>
        </>
    );
}