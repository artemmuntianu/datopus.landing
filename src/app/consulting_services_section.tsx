import { Icons } from "@/components/icons";

export const consultingServices = [
    {
        title: "Implementation & Setup",
        description: "Get your analytics platform up and running quickly with our expert implementation services.",
        icon: Icons.magicRect,
        features: [
            "Custom deployment configuration",
            "Data source integration",
            "Dashboard setup and customization",
            "Team training and onboarding"
        ]
    },
    {
        title: "Analytics Consulting",
        description: "Strategic guidance to maximize the value of your product analytics and data insights.",
        icon: Icons.check,
        features: [
            "Analytics strategy development",
            "KPI definition and tracking",
            "Data quality assessment",
            "Performance optimization"
        ]
    },
    {
        title: "Custom Development",
        description: "Tailored features and integrations built specifically for your business needs.",
        icon: Icons.google_analytics,
        features: [
            "Custom feature development",
            "Third-party integrations",
            "API development",
            "Performance enhancements"
        ]
    },
    {
        title: "Ongoing Support",
        description: "Dedicated support team to ensure your analytics platform runs smoothly.",
        icon: Icons.google_bigquery,
        features: [
            "24/7 technical support",
            "Regular platform updates",
            "Performance monitoring",
            "Issue resolution"
        ]
    }
];

export function ConsultingServicesSection() {
    return (
        <div className="mx-auto max-w-screen-xl px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {consultingServices.map((service, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                        <div className="flex items-center mb-4">
                            <div className="p-3 bg-primary/10 rounded-lg mr-4">
                                <service.icon className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold">{service.title}</h3>
                        </div>
                        <p className="text-gray-600 mb-4">{service.description}</p>
                        <ul className="space-y-2">
                            {service.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                                    <Icons.check className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}