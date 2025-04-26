'use client'

import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";
import { features } from "../app/features_section";
import { Button } from "./ui/button";
import { HandleScheduleDemo } from "./ui/button-schedule-demo";

export function Header() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isPlatformOpen, setIsPlatformOpen] = useState(false);
    const [isCaseStudiesOpen, setIsCaseStudiesOpen] = useState(false);

    useEffect(() => {
        const handleMouseLeave = (event: MouseEvent) => {
            setIsPlatformOpen(false);
            setIsCaseStudiesOpen(false);
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
                                    className="absolute left-0 bg-white shadow-md w-max"
                                    onMouseEnter={() => setIsPlatformOpen(true)}
                                    onMouseLeave={(e) => {
                                        if ((e.relatedTarget instanceof Node) && !e.currentTarget.contains(e.relatedTarget as Node)) {
                                            setIsPlatformOpen(false);
                                        }
                                    }}
                                    data-ds-feature="platform-dropdown-menu"
                                >
                                    {
                                        features.map((feature, index) => (
                                            <Link key={index} href={feature.href} className="block py-2 px-4 hover:text-white hover:bg-primary" onClick={() => setIsPlatformOpen(false)} data-ds-feature={`platform-feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}>{feature.title}</Link>
                                        ))
                                    }
                                </div>
                            )}
                        </div>
                        <div className={`relative group ${pathname.includes('/case-studies/') || pathname.endsWith('/case-studies') ? 'active' : ''}`} data-ds-feature="navigation-dropdown-case-studies">
                            <Link
                                href="/case-studies"
                                onMouseEnter={() => setIsCaseStudiesOpen(true)}
                                onMouseLeave={(e) => {
                                    if ((e.relatedTarget instanceof Node) && !e.currentTarget.contains(e.relatedTarget as Node)) {
                                        setIsCaseStudiesOpen(false);
                                    }
                                }}
                            >
                                <Button variant="ghost" className={`h-[3.5rem] group-[.active]:text-primary`}>
                                    Case studies
                                    <ChevronDownIcon className="w-4 h-4 ml-1" />
                                    <div className="hidden group-hover:block group-[.active]:block absolute left-0 bottom-0 bg-primary h-1 w-full"></div>
                                </Button>
                            </Link>
                            {isCaseStudiesOpen && (
                                <div
                                    className="absolute left-0 bg-white shadow-md w-max"
                                    onMouseEnter={() => setIsCaseStudiesOpen(true)}
                                    onMouseLeave={(e) => {
                                        if ((e.relatedTarget instanceof Node) && !e.currentTarget.contains(e.relatedTarget as Node)) {
                                            setIsCaseStudiesOpen(false);
                                        }
                                    }}
                                    data-ds-feature="case-studies-dropdown-menu"
                                >
                                    <Link href="/case-studies/company-is-looking-for-ways-to-track-tons-of-user-actions-in-their-sports-tracker-web-app" className="block py-2 px-4 hover:text-white hover:bg-primary" onClick={() => setIsCaseStudiesOpen(false)} data-ds-feature="case-study-trackfit">
                                        Optimize User Engagement: TrackFit&apos;s Analytics Solution for Sports Tracker Web App
                                    </Link>
                                    <Link href="/case-studies/company-is-selecting-an-analytics-platform-for-its-online-store" className="block py-2 px-4 hover:text-white hover:bg-primary" onClick={() => setIsCaseStudiesOpen(false)} data-ds-feature="case-study-sportify">
                                        Unlock E-Commerce Insights: Sportify Finds the Best Fit for E-Commerce Success
                                    </Link>
                                    <Link href="/case-studies/company-is-selecting-an-analytics-platform-for-its-multi-tenant-saas-product" className="block py-2 px-4 hover:text-white hover:bg-primary" onClick={() => setIsCaseStudiesOpen(false)} data-ds-feature="case-study-acmetech">
                                        Optimize SaaS Product: Lessons from AcmeTech on User Churn Reduction in Multi-Tenant SaaS
                                    </Link>
                                </div>
                            )}
                        </div>
                        <div className="relative group" data-ds-feature="how-it-works-nav">
                            <Link href="/#how-it-works">
                                <Button variant="ghost" className="h-[3.5rem] max-[1200px]:hidden">
                                    How it works
                                    <div className="hidden group-hover:block absolute left-0 bottom-0 bg-primary h-1 w-full"></div>
                                </Button>
                            </Link>
                        </div>
                        <div className={`relative group ${pathname.includes('/blog/') || pathname.endsWith('/blog') ? 'active' : ''}`} data-ds-feature="blog-nav">
                            <Link href="/blog">
                                <Button variant="ghost" className={`h-[3.5rem] group-[.active]:text-primary`}>
                                    Blog
                                    <div className="hidden group-hover:block group-[.active]:block absolute left-0 bottom-0 bg-primary h-1 w-full"></div>
                                </Button>
                            </Link>
                        </div>
                        <div className="relative group" data-ds-feature="documentation-nav">
                            <Link href="https://docs.datopus.io">
                                <Button variant="ghost" className="h-[3.5rem]">
                                    Documentation
                                    <div className="hidden group-hover:block absolute left-0 bottom-0 bg-primary h-1 w-full"></div>
                                </Button>
                            </Link>
                        </div>
                        <div className="relative group" data-ds-feature="affiliate-nav">
                            <Link href="/affiliate">
                                <Button variant="ghost" className="h-[3.5rem]">
                                    Affiliate
                                    <div className="hidden group-hover:block absolute left-0 bottom-0 bg-primary h-1 w-full"></div>
                                </Button>
                            </Link>
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
                        <Button variant="default" asChild data-ds-feature="CTA: get-started">
                            <Link href="https://app.datopus.io/auth/sign-up">GET STARTED</Link>
                        </Button>
                    </div>
                </nav>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-[3.5rem] left-0 w-full bg-white shadow-md flex flex-col p-4 space-y-2" data-ds-feature="mobile-menu">
                    <Link href="/#platform" className="block py-2" onClick={() => setIsMenuOpen(false)} data-ds-feature="mobile-platform-link">Platform</Link>
                    <Link href="/case-studies" className="block py-2" onClick={() => setIsMenuOpen(false)} data-ds-feature="mobile-case-studies-link">Case studies</Link>
                    <Link href="/blog" className="block py-2" onClick={() => setIsMenuOpen(false)} data-ds-feature="mobile-blog-link">Blog</Link>
                    <Link href="https://docs.datopus.io" className="block py-2" onClick={() => setIsMenuOpen(false)} data-ds-feature="mobile-docs-link">Documentation</Link>
                    <Link href="/affiliate" className="block py-2" onClick={() => setIsMenuOpen(false)} data-ds-feature="mobile-affiliate-link">Affiliate Program</Link>
                    <Link href="/pricing" className="block py-2" onClick={() => setIsMenuOpen(false)} data-ds-feature="mobile-pricing-link">Pricing</Link>
                    <Link href="/contact" className="block py-2" onClick={() => setIsMenuOpen(false)} data-ds-feature="mobile-contact-link">Contact us</Link>
                    <Link href="https://app.datopus.io/auth/sign-up" className="block py-2" onClick={() => setIsMenuOpen(false)} data-ds-feature="mobile-get-started-link">GET STARTED</Link>
                </div>
            )}
        </header>
    );
}