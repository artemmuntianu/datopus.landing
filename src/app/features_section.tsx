import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";

const features = [
    {
        name: "Customer-facing dashboard",
        description: "Increase trust of your customers by providing access to data of their users",
        href: "/",
        cta: "Learn more",
        background: <img src='dashboard.png' className="w-[calc(100%-3rem)] mx-6 border rounded-[0.25rem] [mask-image:linear-gradient(to_bottom,white,transparent)]" />,
        className: "row-start-1 row-span-2 col-start-1",
    },
    {
        name: "Data ownership & GDPR compliance",
        description: "Tracked data is saved in your Google Analytics account for free",
        href: "/",
        cta: "Learn more",
        background: <img />,
        className: "row-start-1 col-start-2",
    },
    {
        name: "Monitoring",
        description: "Be alerted of spikes and drops in feature usage metrics",
        href: "/",
        cta: "Learn more",
        background: <img src='features_monitoring.png' className="w-[calc(100%-3rem)] mx-6 border rounded-[0.25rem] [mask-image:linear-gradient(to_bottom,white,transparent)]" />,
        className: "row-start-4 row-span-2 col-start-1",
    },
    {
        name: "User-flow diagram",
        description: "Analyze the user flow to understand user behavior and improve your product by decreasing churn rate",
        href: "/",
        cta: "Learn more",
        background: <img />,
        className: "row-start-5 col-start-2",
    },
    {
        name: "Self-service data exploration",
        description: "Analyze how different segments use specific features by leveraging built-in and custom properties",
        href: "/",
        cta: "Learn more",
        background: <img />,
        className: "row-start-4 col-start-2",
    },
    {
        name: "Embedded analytics",
        description: "Centralize your reports from Looker Studio, Google Sheets, PDF files, and more in a single safe place",
        href: "/",
        cta: "Learn more",
        background: <img src='embedded_analytics.png' className="w-[calc(100%-3rem)] mx-6 border rounded-[0.25rem] [mask-image:linear-gradient(to_bottom,white,transparent)]" />,
        className: "row-start-2 row-span-2 col-start-2",
    },
    {
        name: "Scalable to any number of users",
        description: "Pay much less with dataset-based subscription price. YES, there is no payment for MAU (Monthly Active Users)",
        href: "/",
        cta: "Learn more",
        background: <img />,
        className: "row-start-3 col-start-1",
    },
];

export async function FeaturesSection() {
    return (
        <BentoGrid className="grid-rows-5 grid-cols-2">
            {features.map((feature) => (
                <BentoCard key={feature.name} {...feature} />
            ))}
        </BentoGrid>
    );
}