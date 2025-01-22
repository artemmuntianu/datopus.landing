export default function PrivacyPolicyPage() {
    return (
        <main className="flex flex-col min-h-[100dvh] mt-[3.5rem] [background-image:linear-gradient(to_bottom,hsl(var(--primary)/10%),transparent)] [background-size:100%_50rem] [background-repeat:no-repeat]">
            <h1 className="font-medium text-3xl text-center my-8">
                Privacy Policy
            </h1>
            <p class="text-sm text-gray-600 text-center mb-8">
                Effective Date: <span class="font-medium">1/22/2025</span>
            </p>
            <div class="mx-auto max-w-screen-xl px-4 space-y-6">
                <section>
                    <h2 class="text-2xl font-semibold mb-4">Introduction</h2>
                    <p class="leading-relaxed">Datopus (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) values your privacy. This Privacy Policy outlines how we collect, use, and protect your information when you use our product analytics platform (&quot;Service&quot;). By using our Service, you agree to the practices described in this policy.</p>
                </section>
                <section>
                    <h2 class="text-xl font-semibold mb-2">1. Information We Collect</h2>
                    <ul class="list-disc pl-6 space-y-2">
                        <li><strong>Customer Data:</strong> Information processed from your Google Analytics and Google BigQuery accounts, such as user behavior data, analytics reports, and custom metrics.</li>
                        <li><strong>Account Information:</strong> Information you provide during account registration, including your name, email address, and organization details.</li>
                        <li><strong>Usage Data:</strong> Information about how you interact with our platform, including IP address, browser type, and access times.</li>
                    </ul>
                </section>
                <section>
                    <h2 class="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
                    <ul class="list-disc pl-6 space-y-2">
                        <li>To provide and improve our Service.</li>
                        <li>To process and analyze customer data from Google Analytics and Google BigQuery as directed by you.</li>
                        <li>To communicate with you regarding updates, promotions, and support.</li>
                        <li>To ensure compliance with applicable laws and regulations.</li>
                    </ul>
                </section>
                <section>
                    <h2 class="text-xl font-semibold mb-2">3. Sharing of Information</h2>
                    <ul class="list-disc pl-6 space-y-2">
                        <li>We do not sell or rent your information to third parties.</li>
                        <li>We may share information with trusted service providers who assist in operating our platform (e.g., hosting and data storage).</li>
                        <li>We may disclose information if required by law or to protect our legal rights.</li>
                    </ul>
                </section>
                <section>
                    <h2 class="text-xl font-semibold mb-2">4. Data Security</h2>
                    <p class="leading-relaxed">We implement industry-standard security measures to protect your data from unauthorized access, alteration, or disclosure. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.</p>
                </section>
                <section>
                    <h2 class="text-xl font-semibold mb-2">5. Data Retention</h2>
                    <p class="leading-relaxed">We retain your data for as long as necessary to provide the Service or as required by law. Upon termination of your account, we will delete or anonymize your data, unless retention is required for legal purposes.</p>
                </section>
                <section>
                    <h2 class="text-xl font-semibold mb-2">6. Your Rights</h2>
                    <ul class="list-disc pl-6 space-y-2">
                        <li>Access and update your personal information through your account settings.</li>
                        <li>Request deletion of your data, subject to legal or contractual obligations.</li>
                        <li>Opt-out of marketing communications by following the unsubscribe instructions in our emails.</li>
                    </ul>
                </section>
                <section>
                    <h2 class="text-xl font-semibold mb-2">7. Third-Party Services</h2>
                    <p class="leading-relaxed">Our platform integrates with third-party services like Google Analytics and Google BigQuery. We are not responsible for the privacy practices of these services. Please review their respective privacy policies for more information.</p>
                </section>
                <section>
                    <h2 class="text-xl font-semibold mb-2">8. International Data Transfers</h2>
                    <p class="leading-relaxed">If you are accessing our Service from outside Portugal, your information may be transferred to and processed in a country with different data protection laws. By using our Service, you consent to such transfers.</p>
                </section>
                <section>
                    <h2 class="text-xl font-semibold mb-2">9. Changes to this Privacy Policy</h2>
                    <p class="leading-relaxed">We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated &quot;Effective Date.&quot; Your continued use of the Service after changes constitutes acceptance of the updated policy.</p>
                </section>
                <section>
                    <h2 class="text-xl font-semibold mb-2">10. Contact Us</h2>
                    <p class="leading-relaxed">If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:artem@datopus.io" class="text-blue-600 underline">artem@datopus.io</a>.</p>
                </section>
            </div>
            <div class="my-8 text-center">
                By using Datopus, you acknowledge that you have read, understood, and agree to this Privacy Policy.
            </div>
        </main>
    )
}