import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";

const features = [
    {
        name: "Customer-facing dashboard",
        descriptionNode:
            <p className="pointer-events-none max-w-lg text-neutral-400">
                Increase trust of your customers by providing access to data of their users
            </p>,
        href: "/",
        cta: "Learn more",
        backgroundNode: <img src='dashboard.png' className="w-[calc(100%-3rem)] mx-6 border rounded-[0.25rem] [mask-image:linear-gradient(to_bottom,white,transparent)]" />,
        className: "row-start-1 row-span-2 col-start-1",
    },
    {
        name: "Data ownership & GDPR compliance",
        descriptionNode:
            <p className="pointer-events-none max-w-lg text-neutral-400">
                Tracked data is saved in your Google Analytics account for free
            </p>,
        href: "/",
        cta: "Learn more",
        className: "row-start-1 col-start-2",
    },
    {
        name: "Monitoring",
        descriptionNode:
            <p className="pointer-events-none max-w-lg text-neutral-400">
                Be alerted of spikes and drops in feature usage metrics
            </p>,
        href: "/",
        cta: "Learn more",
        backgroundNode: <img src='features_monitoring.png' className="w-[calc(100%-3rem)] mx-6 border rounded-[0.25rem] [mask-image:linear-gradient(to_bottom,white,transparent)]" />,
        className: "row-start-4 row-span-2 col-start-1",
    },
    {
        name: "User-flow diagram",
        descriptionNode:
            <p className="pointer-events-none max-w-lg text-neutral-400">
                Analyze the user flow to understand user behavior and decrease churn rate by improving your product
            </p>,
        href: "/",
        cta: "Learn more",
        className: "row-start-4 col-start-2",
    },
    {
        name: "Self-service data exploration",
        descriptionNode:
            <p className="pointer-events-none max-w-lg text-neutral-400">
                Analyze how different segments use specific features
            </p>,
        href: "/",
        cta: "Learn more",
        backgroundNode: <img src='features_usage.png' className="w-[calc(100%-3rem)] mx-6 border rounded-[0.25rem] [mask-image:linear-gradient(to_bottom,white,transparent)]" />,
        className: "row-start-5 row-span-2 col-start-2",
    },
    {
        name: "Embedded analytics",
        descriptionNode:
            <p className="pointer-events-none max-w-lg text-neutral-400">
                Centralize your reports from Looker Studio, Google Sheets, PDF files, and more in a single safe place
            </p>,
        href: "/",
        cta: "Learn more",
        backgroundNode: <img src='embedded_analytics.png' className="w-[calc(100%-3rem)] mx-6 border rounded-[0.25rem] [mask-image:linear-gradient(to_bottom,white,transparent)]" />,
        className: "row-start-2 row-span-2 col-start-2",
    },
    {
        name: "Scalable to any number of users",
        descriptionNode:
            <p className="pointer-events-none max-w-lg text-neutral-400">
                Pay much less with dataset-based subscription price. YES, there is no payment for MAU (Monthly Active Users)
            </p>,
        href: "/",
        cta: "Learn more",
        className: "row-start-3 col-start-1",
    },
    {
        name: "Custom tracking",
        descriptionNode:
            <p className="max-w-lg text-neutral-400">
                Determine up to 10 feature characteristics of your choice. Includes
                &nbsp;<a href='https://support.google.com/analytics/table/13948007' target="_blank" className="text-primary underline-offset-4 hover:underline">standard</a>&nbsp; 
                (user, device, traffic, geography, attribution) and
                &nbsp;<a href='https://support.google.com/analytics/answer/14240153' target="_blank" className="text-primary underline-offset-4 hover:underline">custom</a>&nbsp;
                Google Analytics dimensions.
            </p>,
        href: "/",
        cta: "Learn more",
        className: "row-start-6 col-start-1",
    }
];

export async function FeaturesSection() {
    return (
        <BentoGrid className="grid-rows-6 grid-cols-2">
            {features.map((feature) => (
                <BentoCard key={feature.name} {...feature} />
            ))}
        </BentoGrid>
    );
}