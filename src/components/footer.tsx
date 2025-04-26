import Image from "next/image";
import Link from "next/link";
import { Icons } from "./icons";
import { HandleScheduleDemo } from "./ui/button-schedule-demo";

export function Footer() {
    return (
        <footer id="footer" className="border-t bg-white px-4 py-8" data-ds-feature="site-footer">
            <div className="mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-5 gap-8">
                {/* Logo and Mission Statement */}
                <div data-ds-feature="footer-company-info">
                    <Link href="/" title="Datopus" className="mb-4 flex items-center space-x-2">
                        <Image src="/logo.svg" alt="Datopus" width="28" height="32" />
                        <span className="text-xl font-bold">Datopus</span>
                    </Link>
                    <p className="mt-2">On a mission to help businesses optimize digital products for success.</p>
                    <div className="mt-4 flex space-x-4" data-ds-feature="footer-social-links">
                        <a href="https://www.linkedin.com/company/datopus" target="_blank" rel="noopener noreferrer" data-ds-feature="linkedin-link">
                            {Icons.linkedin({ className: "size-6" })}
                        </a>
                        <a href="https://x.com/datopus" target="_blank" rel="noopener noreferrer" data-ds-feature="x-twitter-link">
                            {Icons.x({ className: "size-6" })}
                        </a>
                    </div>
                </div>

                {/* Product Links */}
                <div data-ds-feature="footer-product-links">
                    <h3 className="font-semibold text-lg">PRODUCT</h3>
                    <ul className="mt-2 text-lg leading-[2.5rem]">
                        <li><Link href="/" data-ds-feature="footer-home-link">Home</Link></li>
                        <li><Link href="https://app.datopus.io/auth/sign-up" data-ds-feature="footer-dashboard-link">Dashboard</Link></li>
                        <li><Link href="/pricing" data-ds-feature="footer-pricing-link">Pricing</Link></li>
                    </ul>
                </div>

                {/* Compare Us */}
                <div data-ds-feature="footer-compare-links">
                    <h3 className="font-semibold text-lg">COMPARE US</h3>
                    <ul className="mt-2 text-lg leading-[2.5rem]">
                        <li><Link href="/alternatives/datopus_vs_posthog" data-ds-feature="compare-posthog">Datopus vs PostHog</Link></li>
                        <li><Link href="/alternatives/datopus_vs_statsig" data-ds-feature="compare-statsig">Datopus vs Statsig</Link></li>
                        <li><Link href="/alternatives/datopus_vs_june" data-ds-feature="compare-june">Datopus vs June</Link></li>
                        <li><Link href="/alternatives/datopus_vs_mixpanel" data-ds-feature="compare-mixpanel">Datopus vs Mixpanel</Link></li>
                        <li><Link href="/alternatives/datopus_vs_woopra" data-ds-feature="compare-woopra">Datopus vs Woopra</Link></li>
                        <li><Link href="/alternatives/datopus_vs_amplitude" data-ds-feature="compare-amplitude">Datopus vs Amplitude</Link></li>
                        <li><Link href="/alternatives/datopus_vs_googleanalytics" data-ds-feature="compare-ga">Datopus vs Google Analytics</Link></li>
                    </ul>
                </div>

                {/* Resources */}
                <div data-ds-feature="footer-resources-links">
                    <h3 className="font-semibold text-lg">RESOURCES</h3>
                    <ul className="mt-2 text-lg leading-[2.5rem]">
                        <li><Link href="/case-studies" data-ds-feature="footer-case-studies-link">Case studies</Link></li>
                        <li><Link href="/blog" data-ds-feature="footer-blog-link">Blog</Link></li>
                        <li><Link href="/affiliate" data-ds-feature="footer-affiliate-link">Our Affiliate Program</Link></li>
                        <li><Link href="/terms" data-ds-feature="footer-terms-link">Terms of Service</Link></li>
                        <li><Link href="/privacy-policy" data-ds-feature="footer-privacy-link">Privacy Policy</Link></li>
                    </ul>
                </div>

                {/* Support */}
                <div data-ds-feature="footer-support-links">
                    <h3 className="font-semibold text-lg">SUPPORT</h3>
                    <ul className="mt-2 text-lg leading-[2.5rem]">
                        <li><Link href="/contact" data-ds-feature="footer-contact-link">Contact Us</Link></li>
                        <li><Link href="https://docs.datopus.io" target="_blank" rel="noopener noreferrer" data-ds-feature="footer-docs-link">Developer Docs</Link></li>
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className="mx-auto max-w-screen-xl border-t py-3 text-xs text-center mt-8" data-ds-feature="footer-copyright">
                Copyright {new Date().getFullYear()} <Link href="/">Datopus</Link> - Optimize Digital Products for Success
            </div>
        </footer>
    );
}
