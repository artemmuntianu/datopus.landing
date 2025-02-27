'use client'

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { features } from "../app/features_section";
import { Button } from "./ui/button";
import { ButtonScheduleDemo } from "./ui/button-schedule-demo";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { usePathname } from 'next/navigation'

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
        <header className="fixed left-0 top-0 z-50 w-full border-b bg-white">
            <div className="flex min-h-[3.5rem] max-w-screen-xl mx-auto px-4 items-center justify-between">
                <Link href="/" className="inline-flex mr-[10px]">
                    <Image src="/logo.svg" alt="Datopus" width="28" height="32" />
                </Link>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden p-2 rounded-lg focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Desktop Menu */}
                <nav className="hidden w-full md:flex md:flex-row">
                    <div className="flex gap-[0.5rem]">
                        <div className={`relative group ${pathname.includes('/platform/') || pathname.endsWith('/platform') ? 'active' : ''}`}>
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
                                    className="absolute left-0 bg-white shadow-md p-2 w-max"
                                    onMouseEnter={() => setIsPlatformOpen(true)}
                                    onMouseLeave={(e) => {
                                        if ((e.relatedTarget instanceof Node) && !e.currentTarget.contains(e.relatedTarget as Node)) {
                                            setIsPlatformOpen(false);
                                        }
                                    }}
                                >
                                    {
                                        features.map((feature, index) => (
                                            <Link key={index} href={feature.href} className="block py-2 px-4 hover:text-primary" onClick={() => setIsPlatformOpen(false)}>{feature.title}</Link>
                                        ))
                                    }
                                </div>
                            )}
                        </div>
                        <div className={`relative group ${pathname.includes('/case-studies/') || pathname.endsWith('/case-studies') ? 'active' : ''}`}>
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
                                    className="absolute left-0 bg-white shadow-md p-2 w-max"
                                    onMouseEnter={() => setIsCaseStudiesOpen(true)}
                                    onMouseLeave={(e) => {
                                        if ((e.relatedTarget instanceof Node) && !e.currentTarget.contains(e.relatedTarget as Node)) {
                                            setIsCaseStudiesOpen(false);
                                        }
                                    }}
                                >
                                    <Link href="/case-studies/company-is-selecting-an-analytics-platform-for-its-multi-tenant-saas-product" className="block py-2 px-4 hover:text-primary" onClick={() => setIsCaseStudiesOpen(false)}>
                                        Case Study: The company is looking for ways to reduce user churn in their multi-tenant SaaS product
                                    </Link>
                                </div>
                            )}
                        </div>
                        <div className="relative group">
                            <Link href="/#how-it-works">
                                <Button variant="ghost" className="h-[3.5rem] max-[1200px]:hidden">
                                    How it works
                                    <div className="hidden group-hover:block absolute left-0 bottom-0 bg-primary h-1 w-full"></div>
                                </Button>
                            </Link>
                        </div>
                        <div className={`relative group ${pathname.includes('/blog/') || pathname.endsWith('/blog') ? 'active' : ''}`}>
                            <Link href="/blog">
                                <Button variant="ghost" className={`h-[3.5rem] group-[.active]:text-primary`}>
                                    Blog
                                    <div className="hidden group-hover:block group-[.active]:block absolute left-0 bottom-0 bg-primary h-1 w-full"></div>
                                </Button>
                            </Link>
                        </div>
                        <div className="relative group">
                            <Link href="https://docs.datopus.io">
                                <Button variant="ghost" className="h-[3.5rem]">
                                    Documentation
                                    <div className="hidden group-hover:block absolute left-0 bottom-0 bg-primary h-1 w-full"></div>
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className="ml-auto h-[3.5rem] items-center flex gap-[0.5rem]">
                        <div className={`relative group ${pathname.includes('/pricing/') || pathname.endsWith('/pricing') ? 'active' : ''}`}>
                            <Link href="/pricing">
                                <Button variant="ghost" className={`h-[3.5rem] group-[.active]:text-primary`}>
                                    Pricing
                                    <div className="hidden group-hover:block group-[.active]:block absolute left-0 bottom-0 bg-primary h-1 w-full"></div>
                                </Button>
                            </Link>
                        </div>
                        <ButtonScheduleDemo />
                        <Button variant="default" asChild>
                            <Link href="https://app.datopus.io/auth">GET STARTED</Link>
                        </Button>
                    </div>
                </nav>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-[3.5rem] left-0 w-full bg-white shadow-md flex flex-col p-4 space-y-2">
                    <Link href="/#platform" className="block py-2" onClick={() => setIsMenuOpen(false)}>Platform</Link>
                    <Link href="/case-studies" className="block py-2" onClick={() => setIsMenuOpen(false)}>Case studies</Link>
                    <Link href="/blog" className="block py-2" onClick={() => setIsMenuOpen(false)}>Blog</Link>
                    <Link href="https://docs.datopus.io" className="block py-2" onClick={() => setIsMenuOpen(false)}>Documentation</Link>
                    <Link href="/affiliate" className="block py-2" onClick={() => setIsMenuOpen(false)}>Affiliate Program</Link>
                    <Link href="/pricing" className="block py-2" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
                    <Link href="https://app.datopus.io/auth" className="block py-2" onClick={() => setIsMenuOpen(false)}>GET STARTED</Link>
                    <ButtonScheduleDemo />
                </div>
            )}
        </header>
    );
}