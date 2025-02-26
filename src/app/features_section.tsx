import { ArrowRightIcon } from "@radix-ui/react-icons";

export const features = [
    {
        title: "Event Autocapture for Google Analytics",
        subtitle: "Autocapture lets you track all events in your web app automatically, no coding required. You don't have to chase your developers to track events!",
        href: "/platform/feature-event-autocapture",
        imgSrc: 'https://datopus.blob.core.windows.net/blog/feature-event-autocapture-1.png',
    },
    {
        title: "User Journeys",
        subtitle: "Analyze the user flow to understand user behavior and decrease churn rate by improving your product.",
        href: "/platform/feature-user-flow-diagram",
        imgSrc: 'features_flow.png'
    },
    {
        title: "Self-service Data Exploration",
        subtitle: "Analyze how different user segments use specific features.",
        href: "/platform/feature-self-service-data-exploration",
        imgSrc: 'features_usage.png',
    },
    {
        title: "Customer-facing Dashboards",
        subtitle: "Increase trust of your customers by providing them access to data of their users.",
        href: "/platform/feature-customer-facing-dashboard",
        imgSrc: 'dashboard.png',
    },
    {
        title: "Embedded Analytics",
        subtitle: "Centralize your reports from Looker Studio, Google Sheets, PDF files, and more in a single safe place.",
        href: "/platform/feature-embedded-analytics",
        imgSrc: 'embedded_analytics.png',
    },
    {
        title: "Monitoring & Alerting",
        subtitle: "Be alerted of spikes and drops in feature usage metrics.",
        href: "/platform/feature-monitoring",
        imgSrc: 'features_monitoring.png',
    },
    {
        title: "Company-level Analytics for B2B SaaS",
        subtitle: "Track, monitor, and analyze the data of each individual company that uses your SaaS platform.",
        href: "/platform/feature-company-level-analytics",
        videoSrc: "https://www.youtube.com/embed/DjiYVJyy2vg"
    }
];

function FeatureTitleAndSubtitle({ feature, className }: { feature: any, className: string }) {
    return (
        <div className={`w-full shrink-0 space-y-8 lg:sticky lg:max-w-lg lg:top-14 ${className}`}>
            <a className="block space-y-4" href={feature.href}>
                <h3 className="text-4xl font-bold">
                    <span>{feature.title}</span>
                </h3>
                <p className="text-3xl font-light line-clamp-3 lg:line-clamp-none">
                    {feature.subtitle}
                </p>
            </a>
            <p className="flex text-sm font-semibold uppercase tracking-widest group-hover:text-primary-500">
                <a className="inline-flex items-center group-hover:text-primary" href={feature.href}>
                    Learn More
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                </a>
            </p>
        </div>
    );
}

function FeatureVizualization(feature: any) {
    let content = null;
    if (feature.imgSrc)
        content = (
            <a href={feature.href}>
                <img src={feature.imgSrc} title={feature.title} alt={feature.title} className="border rounded-md shadow-md h-full w-full object-cover" />
            </a>
        );
    if (feature.videoSrc)
        content = (
            <iframe className="border rounded-md shadow-md w-full" width="600" height="400" src={feature.videoSrc} allow="fullscreen"></iframe>
        );

    return (
        <div className="flex-1">
            {content}
        </div>
    );
}

export function FeaturesSection() {
    return (
        <div className="mx-auto max-w-screen-xl px-4">
            {
                features.map((feature, id) => (
                    (id % 2 == 0)
                        ? (
                            <div key={id} className="group flex flex-col gap-6 py-14 sm:gap-8 lg:flex-row lg:items-start lg:gap-12 xl:gap-20">
                                <FeatureTitleAndSubtitle feature={feature} className="hidden md:block" />
                                <FeatureVizualization {...feature} />
                                <FeatureTitleAndSubtitle feature={feature} className="block md:hidden" />
                            </div>
                        )
                        : (
                            <div key={id} className="group flex flex-col gap-6 py-14 sm:gap-8 lg:flex-row lg:items-start lg:gap-12 xl:gap-20">
                                <FeatureVizualization {...feature} />
                                <FeatureTitleAndSubtitle feature={feature} className="" />
                            </div>
                        )
                ))
            }
        </div>
    )
}