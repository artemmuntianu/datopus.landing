import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
    return (
        <Accordion type="single">
            <AccordionItem value="1">
                <AccordionTrigger className="text-md">
                    How does Datopus differ from other analytics platforms?
                </AccordionTrigger>
                <AccordionContent className="text-base font-normal text-gray-600 indent-4">
                    <p className="pt-1">At the heart of Datopus&apos;s philosophy is the belief that product analytics should be easily integrated into a company&apos;s existing processes and understandable to all employees, executives and investors. We achieve this by organizing analytics around product features.</p>
                    <p className="pt-1">Any application can be decomposed into a set of product features. A feature can consist of other features and/or controls, such as buttons, forms, links, etc.</p>
                    <p className="pt-1">In this way, Datopus tracks how users interact with features and provides reports on their usage and the impact of each feature on critical metrics such as <u>User Conversion Rate</u> and <u>User Churn Rate</u>. This is a radical difference from the commonly used Page Views and Button Clicks.</p>
                    <p className="pt-1">Datopus customers gain a completely new perspective on their digital product.</p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="4">
                <AccordionTrigger className="text-md">
                    What are the steps to start using Datopus?
                </AccordionTrigger>
                <AccordionContent className="text-base font-normal text-gray-600 indent-4">
                    <p className="pt-1">Here are the main steps:</p>
                    <ul className="list-disc pl-12  indent-0">
                        <li>Identify and name features</li>
                        <li>Add HTML attribute <code>[data-ds-feature=name]</code> to features</li>
                        <li>Integrate the Datopus snippet</li>
                    </ul>
                    <p className="pt-1">Datopus simplifies the integration process by requiring developers to add a specific HTML attribute to identify features and then include a small snippet of code.</p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="7">
                <AccordionTrigger className="text-md">
                    What does Datopus track exactly?
                </AccordionTrigger>
                <AccordionContent className="text-base font-normal text-gray-600 indent-4">
                    <p className="pt-1">Datopus watches for any activity happening inside a specific HTML element that marked with a special tag <code>[data-ds-feature]</code>. It looks at all the smaller parts within this element and records what they do. These events include clicks, mouse movements, form submissions, or any other user interactions within that designated area.</p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="5">
                <AccordionTrigger className="text-md">
                    Does Datopus provide category analytics?
                </AccordionTrigger>
                <AccordionContent className="text-base font-normal text-gray-600 indent-4">
                    <p className="pt-1">We&apos;ve created a special feature for businesses that sell to other businesses. This feature allows you to analyze how individual businesses or groups of businesses use the different parts of your product.</p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="6">
                <AccordionTrigger className="text-md">
                    I&apos;m more accustomed to tracking Page Views and Button Clicks. Is this possible with Datopus?
                </AccordionTrigger>
                <AccordionContent className="text-base font-normal text-gray-600 indent-4">
                    <p className="pt-1">Yes, that&apos;s entirely possible. Pages and buttons are considered standard features, so tracking their usage within our platform will be straightforward.</p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="2">
                <AccordionTrigger className="text-md">
                    What are the benefits of product feature analytics?
                </AccordionTrigger>
                <AccordionContent className="text-base font-normal text-gray-600 indent-4">
                    <p className="pt-1">Product feature analytics is the process of collecting, analyzing, and interpreting data about how users interact with and use specific features within a product.</p>
                    <p className="pt-1">It helps product teams understand which features are valuable to users, how well they perform, and where there might be opportunities for improvement.</p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="3">
                <AccordionTrigger className="text-md">
                    What are the benefits of customer-facing analytics?
                </AccordionTrigger>
                <AccordionContent className="text-base font-normal text-gray-600 indent-4">
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
        </Accordion>
    )
}