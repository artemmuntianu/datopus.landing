import Image from "next/image";
import Link from "next/link";
import { Icons } from "./icons";
import { LinkContactUs } from "./ui/button-schedule-demo";

export function Footer() {
    return (
        <footer id="footer" className="border-t bg-white px-4 py-8">
            <div className="mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-5 gap-8">
                {/* Logo and Mission Statement */}
                <div>
                    <Link href="/" title="Datopus" className="mb-4 flex items-center space-x-2">
                        <Image src="/logo.svg" alt="Datopus" width="28" height="32" />
                        <span className="text-xl font-bold">Datopus</span>
                    </Link>
                    <p className="mt-2">On a mission to help businesses optimize product features for success.</p>
                    <div className="mt-4 flex space-x-4">
                        <a href="https://www.linkedin.com/company/datopus" target="_blank" rel="noopener noreferrer">
                            {Icons.linkedin({ className: "size-6" })}
                        </a>
                        <a href="https://x.com/datopus" target="_blank" rel="noopener noreferrer">
                            {Icons.x({ className: "size-6" })}
                        </a>
                    </div>
                </div>

                {/* Product Links */}
                <div>
                    <h3 className="font-semibold text-lg">PRODUCT</h3>
                    <ul className="mt-2 text-lg leading-[2.5rem]">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="https://app.datopus.io/auth">Dashboard</Link></li>
                        <li><Link href="/pricing">Pricing</Link></li>
                    </ul>
                </div>

                {/* Compare Us */}
                <div>
                    <h3 className="font-semibold text-lg">COMPARE US</h3>
                    <ul className="mt-2 text-lg leading-[2.5rem]">
                        <li><Link href="/alternatives/datopus_vs_posthog">Datopus vs PostHog</Link></li>
                        <li><Link href="/alternatives/datopus_vs_statsig">Datopus vs Statsig</Link></li>
                        <li><Link href="/alternatives/datopus_vs_june">Datopus vs June</Link></li>
                        <li><Link href="/alternatives/datopus_vs_mixpanel">Datopus vs Mixpanel</Link></li>
                        <li><Link href="/alternatives/datopus_vs_woopra">Datopus vs Woopra</Link></li>
                        <li><Link href="/alternatives/datopus_vs_amplitude">Datopus vs Amplitude</Link></li>
                        <li><Link href="/alternatives/datopus_vs_googleanalytics">Datopus vs Google Analytics</Link></li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h3 className="font-semibold text-lg">RESOURCES</h3>
                    <ul className="mt-2 text-lg leading-[2.5rem]">
                        <li><Link href="/case-studies">Case studies</Link></li>
                        <li><Link href="/blog">Blog</Link></li>
                        <li><Link href="/affiliate">Our Affiliate Program</Link></li>
                        <li><Link href="/terms">Terms of Service</Link></li>
                        <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h3 className="font-semibold text-lg">SUPPORT</h3>
                    <ul className="mt-2 text-lg leading-[2.5rem]">
                        <li><LinkContactUs /></li>
                        <li><Link href="https://docs.datopus.io" target="_blank" rel="noopener noreferrer">Developer Docs</Link></li>
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className="mx-auto max-w-screen-xl border-t py-3 text-xs text-center mt-8">
                Copyright {new Date().getFullYear()} <Link href="/">Datopus</Link> - Optimize Product Features for Success
            </div>
        </footer>
    );
}
