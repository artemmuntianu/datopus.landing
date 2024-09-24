import {
    BellIcon,
    CalendarIcon,
    FileTextIcon,
    GlobeIcon,
    InputIcon,
} from "@radix-ui/react-icons";

import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";

const features = [
    {
        Icon: FileTextIcon,
        name: "Customer-facing dashboard",
        description: "Increase trust of your customers by providing access to data of their users",
        href: "/",
        cta: "Learn more",
        background: <img className="absolute -right-20 -top-20 opacity-60" />,
        className: "row-start-1 row-span-2 col-start-1",
    },
    {
        Icon: FileTextIcon,
        name: "Data ownership & GDPR compliance",
        description: "Tracked data is saved in your Google Analytics account for free",
        href: "/",
        cta: "Learn more",
        background: <img className="absolute -right-20 -top-20 opacity-60" />,
        className: "row-start-1 col-start-2",
    },
    {
        Icon: FileTextIcon,
        name: "Monitoring",
        description: "Be alerted of spikes and drops in feature usage metrics",
        href: "/",
        cta: "Learn more",
        background: <img className="absolute -right-20 -top-20 opacity-60" />,
        className: "row-start-4 row-span-2 col-start-1",
    },
    {
        Icon: FileTextIcon,
        name: "User-flow diagram",
        description: "Analyze the user flow to understand user behavior and improve your product by decreasing churn rate",
        href: "/",
        cta: "Learn more",
        background: <img className="absolute -right-20 -top-20 opacity-60" />,
        className: "row-start-5 col-start-2",
    },
    {
        Icon: FileTextIcon,
        name: "Self-service data exploration",
        description: "Analyze how different segments use specific features",
        href: "/",
        cta: "Learn more",
        background: <img className="absolute -right-20 -top-20 opacity-60" />,
        className: "row-start-4 col-start-2",
    },
    {
        Icon: FileTextIcon,
        name: "Embedded analytics",
        description: "Centralize your reports from Looker Studio, Google Sheets, PDF files, and more in a single safe place",
        href: "/",
        cta: "Learn more",
        background: <img className="absolute -right-20 -top-20 opacity-60" />,
        className: "row-start-2 row-span-2 col-start-2",
    },
    {
        Icon: FileTextIcon,
        name: "Scalable to any number of users",
        description: "Pay much less with dataset-based subscription price. Yes, there is no payment for MAU (Monthly Active Users)",
        href: "/",
        cta: "Learn more",
        background: <img className="absolute -right-20 -top-20 opacity-60" />,
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