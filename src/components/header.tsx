'use client'

import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";
import { features } from "../app/features_section";
import { Button } from "./ui/button";

export function Header() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isPlatformOpen, setIsPlatformOpen] = useState(false);
    const [isCommunityOpen, setIsCommunityOpen] = useState(false);

    useEffect(() => {
        const handleMouseLeave = (event: MouseEvent) => {
            setIsPlatformOpen(false);
            setIsCommunityOpen(false);
        };
        document.addEventListener("mouseleave", handleMouseLeave);
        return () => {
            document.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <header className="fixed left-0 top-0 z-50 w-full border-b bg-white" data-ds-feature="main-navigation">
            <div className="flex min-h-[3.5rem] max-w-screen-xl mx-auto px-4 items-center justify-between">
                <Link href="/" className="inline-flex mr-[10px]" data-ds-feature="header-logo">
                    <Image src="/logo.svg" alt="Datopus" width="28" height="32" />
                </Link>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden p-2 rounded-lg focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)} data-ds-feature="mobile-menu-toggle">
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Desktop Menu */}
                <nav className="hidden w-full md:flex md:flex-row" data-ds-feature="desktop-navigation">
                    <div className="flex gap-[0.5rem]" data-ds-feature="main-menu-items">
                        <div className={`relative group ${pathname.includes('/platform/') || pathname.endsWith('/platform') ? 'active' : ''}`} data-ds-feature="navigation-dropdown-platform">
                            <Link
                                href="/#platform"
                                onMouseEnter={() => setIsPlatformOpen(true)}
                                onMouseLeave={(e) => {
                                    if ((e.relatedTarget instanceof Node) && !e.currentTarget.contains(e.relatedTarget as Node)) {
                                        setIsPlatformOpen(false);
                                    }
                                }}
                            >
                                <Button variant="ghost" className={`h-[3.5rem] group-[.active]:text-primary`}>
                                    Platform
                                    <ChevronDownIcon className="w-4 h-4 ml-1" />
                                    <div className="hidden group-hover:block group-[.active]:block absolute left-0 bottom-0 bg-primary h-1 w-full"></div>
                                </Button>
                            </Link>
                            {isPlatformOpen && (
                                <div
                                    className="absolute left-0 bg-white shadow-md w-[400px]"
                                    onMouseEnter={() => setIsPlatformOpen(true)}
                                    onMouseLeave={(e) => {
                                        if ((e.relatedTarget instanceof Node) && !e.currentTarget.contains(e.relatedTarget as Node)) {
                                            setIsPlatformOpen(false);
                                        }
                                    }}
                                    data-ds-feature="platform-dropdown-menu"
                                >
                                    {features.map((feature, index) => (
                                        <Link key={index} href={feature.href} className="block py-2 px-4 hover:text-white hover:bg-primary" onClick={() => setIsPlatformOpen(false)} data-ds-feature={`platform-feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}>{feature.title}</Link>
                                    ))}
                                    <div className="border-t py-4 px-4 space-y-2">
                                        <h3 className="font-semibold text-sm text-muted-foreground">COMPARISONS</h3>
                                        <ul>
                                            <li className="py-1"><Link href="/alternatives/datopus_vs_posthog" data-ds-feature="compare-posthog">Datopus vs PostHog</Link></li>
                                            <li className="py-1"><Link href="/alternatives/datopus_vs_statsig" data-ds-feature="compare-statsig">Datopus vs Statsig</Link></li>
                                            <li className="py-1"><Link href="/alternatives/datopus_vs_june" data-ds-feature="compare-june">Datopus vs June</Link></li>
                                            <li className="py-1"><Link href="/alternatives/datopus_vs_mixpanel" data-ds-feature="compare-mixpanel">Datopus vs Mixpanel</Link></li>
                                            <li className="py-1"><Link href="/alternatives/datopus_vs_woopra" data-ds-feature="compare-woopra">Datopus vs Woopra</Link></li>
                                            <li className="py-1"><Link href="/alternatives/datopus_vs_amplitude" data-ds-feature="compare-amplitude">Datopus vs Amplitude</Link></li>
                                            <li className="py-1"><Link href="/alternatives/datopus_vs_googleanalytics" data-ds-feature="compare-ga">Datopus vs Google Analytics</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                        
                        {/* New Community Menu */}
                        <div className={`relative group ${pathname.includes('/community/') || pathname.endsWith('/community') ? 'active' : ''}`} data-ds-feature="navigation-dropdown-community">
                            <Link
                                href="/community"
                                onMouseEnter={() => setIsCommunityOpen(true)}
                                onMouseLeave={(e) => {
                                    if ((e.relatedTarget instanceof Node) && !e.currentTarget.contains(e.relatedTarget as Node)) {
                                        setIsCommunityOpen(false);
                                    }
                                }}
                            >
                                <Button variant="ghost" className={`h-[3.5rem] group-[.active]:text-primary`}>
                                    Community
                                    <ChevronDownIcon className="w-4 h-4 ml-1" />
                                    <div className="hidden group-hover:block group-[.active]:block absolute left-0 bottom-0 bg-primary h-1 w-full"></div>
                                </Button>
                            </Link>
                            {isCommunityOpen && (
                                <div
                                    className="absolute left-0 bg-white shadow-md w-[400px]"
                                    onMouseEnter={() => setIsCommunityOpen(true)}
                                    onMouseLeave={(e) => {
                                        if ((e.relatedTarget instanceof Node) && !e.currentTarget.contains(e.relatedTarget as Node)) {
                                            setIsCommunityOpen(false);
                                        }
                                    }}
                                    data-ds-feature="community-dropdown-menu"
                                >
                                    <div className="grid grid-cols-1 gap-2 p-4">
                                        <Link href="/blog" className="flex flex-col gap-1 p-2 rounded hover:bg-gray-50">
                                            <span className="font-medium">Blog</span>
                                            <span className="text-sm text-muted-foreground">Latest updates, guides and insights from our team</span>
                                        </Link>
                                        <Link href="https://docs.datopus.io" className="flex flex-col gap-1 p-2 rounded hover:bg-gray-50">
                                            <span className="font-medium">Documentation</span>
                                            <span className="text-sm text-muted-foreground">Comprehensive guides and API references</span>
                                        </Link>
                                        <Link href="/affiliate" className="flex flex-col gap-1 p-2 rounded hover:bg-gray-50">
                                            <span className="font-medium">Affiliate Program</span>
                                            <span className="text-sm text-muted-foreground">Join our partner network and earn commissions</span>
                                        </Link>
                                    </div>
                                    <div className="border-t py-4 px-4">
                                        <h3 className="font-semibold text-sm text-muted-foreground mb-2">CASE STUDIES</h3>
                                        <ul>
                                            <li className="py-1">
                                                <Link href="/case-studies/company-is-looking-for-ways-to-track-tons-of-user-actions-in-their-sports-tracker-web-app">
                                                    TrackFit&apos;s Analytics Solution
                                                </Link>
                                            </li>
                                            <li className="py-1">
                                                <Link href="/case-studies/company-is-selecting-an-analytics-platform-for-its-online-store">
                                                    Sportify E-Commerce Success
                                                </Link>
                                            </li>
                                            <li className="py-1">
                                                <Link href="/case-studies/company-is-selecting-an-analytics-platform-for-its-multi-tenant-saas-product">
                                                    AcmeTech SaaS Optimization
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="ml-auto h-[3.5rem] items-center flex gap-[0.5rem]" data-ds-feature="header-cta-buttons">
                        <div className={`relative group ${pathname.includes('/pricing/') || pathname.endsWith('/pricing') ? 'active' : ''}`} data-ds-feature="pricing-nav">
                            <Link href="/pricing">
                                <Button variant="ghost" className={`h-[3.5rem] group-[.active]:text-primary`}>
                                    Pricing
                                    <div className="hidden group-hover:block group-[.active]:block absolute left-0 bottom-0 bg-primary h-1 w-full"></div>
                                </Button>
                            </Link>
                        </div>
                        <Button variant="outline" asChild data-ds-feature="CTA: contact-us">
                            <Link href="/contact">Contact us</Link>
                        </Button>
                        <Button variant="default" asChild data-ds-feature="CTA: git-hub">
                            <Link href="https://github.com/artemmuntianu/datopus.pub.ui" target="_blank">GitHub</Link>
                        </Button>
                    </div>
                </nav>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-[3.5rem] left-0 w-full bg-white shadow-md flex flex-col p-4 space-y-2" data-ds-feature="mobile-menu">
                    <Link href="/#platform" className="block py-2" onClick={() => setIsMenuOpen(false)} data-ds-feature="mobile-platform-link">Platform</Link>
                    <Link href="/blog" className="block py-2" onClick={() => setIsMenuOpen(false)} data-ds-feature="mobile-blog-link">Blog</Link>
                    <Link href="https://docs.datopus.io" className="block py-2" onClick={() => setIsMenuOpen(false)} data-ds-feature="mobile-docs-link">Documentation</Link>
                    <Link href="/case-studies" className="block py-2" onClick={() => setIsMenuOpen(false)} data-ds-feature="mobile-case-studies-link">Case Studies</Link>
                    <Link href="/affiliate" className="block py-2" onClick={() => setIsMenuOpen(false)} data-ds-feature="mobile-affiliate-link">Affiliate Program</Link>
                    <Link href="/pricing" className="block py-2" onClick={() => setIsMenuOpen(false)} data-ds-feature="mobile-pricing-link">Pricing</Link>
                    <Link href="/contact" className="block py-2" onClick={() => setIsMenuOpen(false)} data-ds-feature="mobile-contact-link">Contact us</Link>
                    <Link href="https://github.com/artemmuntianu/datopus.pub.ui" target="_blank" className="block py-2" onClick={() => setIsMenuOpen(false)} data-ds-feature="mobile-git-hub">GitHub</Link>
                </div>
            )}
        </header>
    );
}