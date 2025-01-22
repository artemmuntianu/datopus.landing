export default function TermsPage() {
    return (
        <main className="flex flex-col min-h-[100dvh] mt-[3.5rem] [background-image:linear-gradient(to_bottom,hsl(var(--primary)/10%),transparent)] [background-size:100%_50rem] [background-repeat:no-repeat]">
            <h1 className="font-medium text-3xl text-center my-8">
                Terms of Service
            </h1>
            <p className="text-sm text-gray-600 text-center mb-8">
                Effective Date: <span className="font-medium">1/22/2025</span>
            </p>
            <div className="mx-auto max-w-screen-xl px-4 space-y-6">
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Welcome to Datopus!</h2>
                    <p className="leading-relaxed">These Terms of Service (&quot;Terms&quot;) govern your use of our product analytics platform (&quot;Service&quot;). By accessing or using the Service, you agree to be bound by these Terms. If you do not agree, do not use the Service.</p>
                </section>
                <section>
                    <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
                    <p className="leading-relaxed">By accessing or using Datopus, you confirm that you are at least 18 years old and capable of entering into a legally binding agreement. If you are using the Service on behalf of an organization, you represent that you have the authority to bind the organization to these Terms.</p>
                </section>
                <section>
                    <h2 className="text-xl font-semibold mb-2">2. Description of Service</h2>
                    <p className="leading-relaxed">Datopus provides tools for product analytics, user behavior tracking, and data visualization. Features and functionalities may be updated, modified, or removed at any time at our discretion.</p>
                </section>
                <section>
                    <h2 className="text-xl font-semibold mb-2">3. Account Registration</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Provide accurate and complete information during registration.</li>
                        <li>Maintain the confidentiality of your account credentials.</li>
                        <li>Notify us immediately of unauthorized use of your account.</li>
                    </ul>
                    <p className="leading-relaxed">You are responsible for all activities under your account.</p>
                </section>
                <section>
                    <h2 className="text-xl font-semibold mb-2">4. User Conduct</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Use the Service for any illegal or unauthorized purpose.</li>
                        <li>Interfere with or disrupt the Service or its associated networks.</li>
                        <li>Reverse engineer, decompile, or disassemble any part of the Service.</li>
                    </ul>
                </section>
                <section>
                    <h2 className="text-xl font-semibold mb-2">5. Fees and Payment</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Certain features of the Service may require payment. Pricing details will be provided at the time of purchase.</li>
                        <li>All payments are non-refundable unless explicitly stated otherwise.</li>
                        <li>We reserve the right to change our fees upon reasonable notice.</li>
                    </ul>
                </section>
                <section>
                    <h2 className="text-xl font-semibold mb-2">6. Intellectual Property</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>All content, trademarks, and technology associated with the Service are the property of Datopus or its licensors.</li>
                        <li>You retain ownership of the data you upload to the Service. By using the Service, you grant us a license to process and display your data as necessary to provide the Service.</li>
                    </ul>
                </section>
                <section>
                    <h2 className="text-xl font-semibold mb-2">7. Privacy</h2>
                    <p className="leading-relaxed">Your use of the Service is subject to our <a href="https://www.datopus.io/privacy-policy" className="text-blue-600 underline">Privacy Policy</a>. By using the Service, you consent to the collection and use of your information as outlined in the Privacy Policy.</p>
                </section>
                <section>
                    <h2 className="text-xl font-semibold mb-2">8. Third-Party Integrations</h2>
                    <p className="leading-relaxed">The Service may integrate with third-party tools. Datopus is not responsible for the availability, functionality, or content of third-party services.</p>
                </section>
                <section>
                    <h2 className="text-xl font-semibold mb-2">9. Termination</h2>
                    <p className="leading-relaxed">We may suspend or terminate your access to the Service at our discretion, without notice, for:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Violation of these Terms.</li>
                        <li>Prolonged inactivity.</li>
                        <li>Legal or regulatory reasons.</li>
                    </ul>
                    <p className="leading-relaxed">Upon termination, your right to use the Service ceases immediately.</p>
                </section>
                <section>
                    <h2 className="text-xl font-semibold mb-2">10. Disclaimers and Limitations of Liability</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>The Service is provided as is without warranties of any kind.</li>
                        <li>To the fullest extent permitted by law, Datopus is not liable for indirect, incidental, or consequential damages arising from your use of the Service.</li>
                    </ul>
                </section>
                <section>
                    <h2 className="text-xl font-semibold mb-2">11. Indemnification</h2>
                    <p className="leading-relaxed">You agree to indemnify and hold harmless Datopus, its affiliates, and employees from claims, liabilities, damages, and expenses arising from your use of the Service.</p>
                </section>
                <section>
                    <h2 className="text-xl font-semibold mb-2">12. Governing Law</h2>
                    <p className="leading-relaxed">These Terms are governed by the laws of Portugal, without regard to conflict of laws principles.</p>
                </section>
                <section>
                    <h2 className="text-xl font-semibold mb-2">13. Changes to the Terms</h2>
                    <p className="leading-relaxed">We may update these Terms periodically. Continued use of the Service after changes constitutes acceptance of the updated Terms.</p>
                </section>
                <section>
                    <h2 className="text-xl font-semibold mb-2">14. Contact Us</h2>
                    <p className="leading-relaxed">For questions or concerns, please contact us at <a href="mailto:artem@datopus.io" className="text-blue-600 underline">artem@datopus.io</a>.</p>
                </section>
            </div>
            <div className="my-8 text-center">
                By using Datopus, you acknowledge that you have read, understood, and agree to these Terms of Service.
            </div>
        </main>
    )
}