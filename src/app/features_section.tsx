import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";

const features_bg = [
    {
        name: "Customer-facing dashboard",
        descriptionNode:
            <p className="pointer-events-none max-w-lg text-muted-foreground font-segoe">
                Increase trust of your customers by providing access to data of their users.
            </p>,
        href: "/blog/feature-customer-facing-dashboard",
        cta: "Learn more",
        backgroundNode: <img src='dashboard.png' className="w-[calc(100%-3rem)] mx-6 border rounded-[0.25rem] [mask-image:linear-gradient(to_bottom,white,transparent)]" />,
        className: "row-start-1 col-start-1",
    },
    {
        name: "Embedded analytics",
        descriptionNode:
            <p className="pointer-events-none max-w-lg text-muted-foreground font-segoe">
                Centralize your reports from Looker Studio, Google Sheets, PDF files, and more in a single safe place.
            </p>,
        href: "/blog/feature-embedded-analytics",
        cta: "Learn more",
        backgroundNode: <img src='embedded_analytics.png' className="w-[calc(100%-3rem)] mx-6 border rounded-[0.25rem] [mask-image:linear-gradient(to_bottom,white,transparent)]" />,
        className: "row-start-1 col-start-2",
    },
    {
        name: "Monitoring",
        descriptionNode:
            <p className="pointer-events-none max-w-lg text-muted-foreground font-segoe">
                Be alerted of spikes and drops in feature usage metrics.
            </p>,
        href: "/blog/feature-monitoring",
        cta: "Learn more",
        backgroundNode: <img src='features_monitoring.png' className="w-[calc(100%-3rem)] mx-6 border rounded-[0.25rem] [mask-image:linear-gradient(to_bottom,white,transparent)]" />,
        className: "row-start-2 col-start-1",
    },
    {
        name: "Self-service data exploration",
        descriptionNode:
            <p className="pointer-events-none max-w-lg text-muted-foreground font-segoe">
                Analyze how different segments use specific features.
            </p>,
        href: "/blog/feature-self-service-data-exploration",
        cta: "Learn more",
        backgroundNode: <img src='features_usage.png' className="w-[calc(100%-3rem)] mx-6 border rounded-[0.25rem] [mask-image:linear-gradient(to_bottom,white,transparent)]" />,
        className: "row-start-2 col-start-2",
    }
];

const features = [
    {
        name: "Scalable to any number of users",
        descriptionNode:
            <p className="pointer-events-none max-w-lg text-muted-foreground font-segoe">
                Pay much less with dataset-based subscription price.
            </p>,
        href: "/blog/feature-scalable-to-any-number-of-users",
        cta: "Learn more",
        className: "row-start-1 col-start-1",
    },
    {
        name: "Data ownership & GDPR compliance",
        descriptionNode:
            <p className="pointer-events-none max-w-lg text-muted-foreground font-segoe">
                Tracked data is saved in your Google Analytics account for free.
            </p>,
        href: "/blog/feature-data-ownership-gdpr-compliance",
        cta: "Learn more",
        className: "row-start-1 col-start-2",
    },
    {
        name: "Custom tracking",
        descriptionNode:
            <p className="max-w-lg text-muted-foreground font-segoe">
                Determine feature characteristics of your choice. Includes
                &nbsp;<a href='https://support.google.com/analytics/table/13948007' target="_blank" className="text-primary underline-offset-4 hover:underline">standard</a>&nbsp;
                (user, device, traffic, geography, attribution) and
                &nbsp;<a href='https://support.google.com/analytics/answer/14240153' target="_blank" className="text-primary underline-offset-4 hover:underline">custom</a>&nbsp;
                Google Analytics dimensions.
            </p>,
        href: "/blog/feature-custom-tracking",
        cta: "Learn more",
        className: "row-start-2 col-start-1",
    },
    {
        name: "User-flow diagram",
        descriptionNode:
            <p className="pointer-events-none max-w-lg text-muted-foreground font-segoe">
                Analyze the user flow to understand user behavior and decrease churn rate by improving your product.
            </p>,
        href: "/blog/feature-user-flow-diagram",
        cta: "Learn more",
        className: "row-start-2 col-start-2",
    },
    {
        name: "Reliable Reports",
        descriptionNode:
            <p className="pointer-events-none max-w-lg text-muted-foreground font-segoe">
                Analyze billions of records without Data Sampling limits.
            </p>,
        href: "/blog/feature-reliable-reports",
        cta: "Learn more",
        className: "row-start-3 col-start-1",
    }
];

export function FeaturesSection() {
    return (
        <>
            <BentoGrid className="grid-rows-2 grid-cols-2">
                {
                    features_bg.map((feature) => (
                        <BentoCard key={feature.name} {...feature} />
                    ))
                }
            </BentoGrid>
            <BentoGrid className="grid-rows-3 grid-cols-2 mt-4">
                {
                    features.map((feature) => (
                        <BentoCard key={feature.name} {...feature} />
                    ))
                }
            </BentoGrid>
        </>
    );
}