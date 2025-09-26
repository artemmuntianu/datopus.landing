import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
    return (
        <Accordion type="single" className="mx-auto max-w-screen-xl px-4" data-ds-feature="faq-accordion">
            <AccordionItem value="open-source" data-ds-feature="faq-item-open-source">
                <AccordionTrigger className="text-lg">
                    What does it mean that Datopus is open source?
                </AccordionTrigger>
                <AccordionContent className="text-lg font-normal indent-4">
                    <p className="pt-1">Datopus is 100% open source under the MIT license, which means:</p>
                    <ul className="list-disc pl-12 indent-0">
                        <li>Complete transparency - you can inspect and audit all our code</li>
                        <li>Free to self-host and modify according to your needs</li>
                        <li>No vendor lock-in - you own your data and infrastructure</li>
                        <li>Community-driven development and improvements</li>
                        <li>Enterprise-grade security through public code review</li>
                    </ul>
                    <p className="pt-1">While we offer hosted solutions and premium support, our core platform will always remain free and open source.</p>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="contribute" data-ds-feature="faq-item-contribute">
                <AccordionTrigger className="text-lg">
                    How can I contribute to Datopus?
                </AccordionTrigger>
                <AccordionContent className="text-lg font-normal indent-4">
                    <p className="pt-1">We welcome contributions from our community! Here&apos;s how you can help:</p>
                    <ul className="list-disc pl-12 indent-0">
                        <li>Submit bug reports and feature requests on GitHub</li>
                        <li>Contribute code improvements and new features</li>
                        <li>Improve documentation and examples</li>
                        <li>Share your experience and help others in our community</li>
                        <li>Star our repository and spread the word!</li>
                    </ul>
                    <p className="pt-1">Visit our GitHub repository to get started with contributing.</p>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="1" data-ds-feature="faq-item-difference">
                <AccordionTrigger className="text-lg">
                    How does Datopus differ from other analytics platforms?
                </AccordionTrigger>
                <AccordionContent className="text-lg font-normal indent-4">
                    <p className="pt-1">As an open-source platform, Datopus believes that feature analysis should be transparent, community-driven, and easily integrated into a company&apos;s existing processes. We achieve this by organizing analytics around product features and maintaining full transparency in our methods.</p>
                    <p className="pt-1">Any application can be decomposed into a set of product features. A feature can consist of other features and/or controls, such as buttons, forms, links, etc.</p>
                    <p className="pt-1">In this way, Datopus tracks how users interact with features and provides reports on their usage and the impact of each feature on critical metrics such as <u>User Conversion Rate</u> and <u>User Churn Rate</u>. This is a radical difference from the commonly used Page Views and Button Clicks.</p>
                    <p className="pt-1">Datopus customers gain a completely new perspective on their digital product, backed by a thriving open-source community.</p>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="2" data-ds-feature="faq-item-benefits">
                <AccordionTrigger className="text-lg">
                    What are the benefits of product feature analysis?
                </AccordionTrigger>
                <AccordionContent className="text-lg font-normal indent-4">
                    <p className="pt-1">Product feature analysis is the process of collecting, analyzing, and interpreting data about how users interact with and use specific features within a product.</p>
                    <p className="pt-1">It helps product teams understand which features are valuable to users, how well they perform, and where there might be opportunities for improvement.</p>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="3" data-ds-feature="faq-item-customer-analytics">
                <AccordionTrigger className="text-lg">
                    What are the benefits of customer-facing analytics?
                </AccordionTrigger>
                <AccordionContent className="text-lg font-normal indent-4">
                    <p className="pt-1">Customer-facing analytics is a method for showcasing relevant performance data to users within your software or platform. This enables them to improve their decision-making and review their usage trends. For instance, it could involve presenting users with detailed statistics on their website&apos;s traffic, conversion rates, or user engagement metrics, allowing them to optimize their online presence.</p>
                    <p className="pt-1">You can improve multiple KPIs with customer-facing analytics including:</p>
                    <ul className="list-disc pl-12 indent-0">
                        <li>User engagement rate</li>
                        <li>User retention rate</li>
                        <li>Revenue</li>
                        <li>Customer lifetime value</li>
                        <li>Sales ROI</li>
                        <li>Average sales cycle length</li>
                    </ul>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="4" data-ds-feature="faq-item-steps">
                <AccordionTrigger className="text-lg">
                    What are the steps to start using Datopus?
                </AccordionTrigger>
                <AccordionContent className="text-lg font-normal indent-4">
                    <p className="pt-1">Here are the main steps:</p>
                    <ul className="list-disc pl-12  indent-0">
                        <li>Integrate the Datopus snippet</li>
                        <li>[optional] Add HTML attribute <code>[data-ds-feature=name]</code> to features</li>
                    </ul>
                    <p className="pt-1">Datopus simplifies the integration process by requiring developers to add a specific HTML attribute to identify features and then include a small snippet of code.</p>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="5" data-ds-feature="faq-item-category">
                <AccordionTrigger className="text-lg">
                    Does Datopus provide category analytics?
                </AccordionTrigger>
                <AccordionContent className="text-lg font-normal indent-4">
                    <p className="pt-1">We&apos;ve created a special feature for businesses that sell to other businesses. This feature allows you to analyze how individual businesses or groups of businesses use the different parts of your product.</p>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="6" data-ds-feature="faq-item-traditional">
                <AccordionTrigger className="text-lg">
                    I&apos;m more accustomed to tracking Page Views and Button Clicks. Is this possible with Datopus?
                </AccordionTrigger>
                <AccordionContent className="text-lg font-normal indent-4">
                    <p className="pt-1">Yes, that&apos;s entirely possible. Pages and buttons are considered standard features, so tracking their usage within our platform will be straightforward.</p>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="7" data-ds-feature="faq-item-tracking">
                <AccordionTrigger className="text-lg">
                    What does Datopus track exactly?
                </AccordionTrigger>
                <AccordionContent className="text-lg font-normal indent-4">
                    <p className="pt-1">Datopus watches for any activity happening inside a specific HTML element that marked with a special tag <code>[data-ds-feature]</code>. It looks at all the smaller parts within this element and records what they do. These events include clicks, mouse movements, form submissions, or any other user interactions within that designated area.</p>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="8" data-ds-feature="faq-item-consulting">
                <AccordionTrigger className="text-lg">
                    What consulting and support services do you offer?
                </AccordionTrigger>
                <AccordionContent className="text-lg font-normal indent-4">
                    <p className="pt-1">We offer comprehensive consulting and support services to help you maximize the value of your analytics platform:</p>
                    <ul className="list-disc pl-12 indent-0">
                        <li><strong>Implementation & Setup:</strong> Custom deployment, data integration, and team training</li>
                        <li><strong>Analytics Consulting:</strong> Strategy development, KPI definition, and performance optimization</li>
                        <li><strong>Custom Development:</strong> Tailored features, integrations, and API development</li>
                        <li><strong>Ongoing Support:</strong> 24/7 technical support, updates, and issue resolution</li>
                    </ul>
                    <p className="pt-1">Contact us to discuss your specific needs and get a customized solution.</p>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}