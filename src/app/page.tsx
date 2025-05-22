"use client";

import { FeatureCarousel } from "@/components/feature-carousel";
import { FadeInSection } from "@/components/ui/fade-in-section";
import { AnimatedMotifs } from "../components/ui/animated-motifs";
import { ButtonExploreDemo } from "../components/ui/button-explore-demo";
import { FAQSection } from "./faq_section";
import { HowItWorksSection } from "./howitworks_section";
import { SecurityStandardsSection } from "./security_standards_section";
import { WhatWeCanDoSection } from "./whatwecando_section";

export default function Page() {
    return (
        <main className="flex flex-col min-h-[100dvh] mt-[3.5rem] space-y-10 [background-image:linear-gradient(to_bottom,hsl(var(--primary)/10%),transparent)] [background-size:100%_50rem] [background-repeat:no-repeat]" data-ds-feature="homepage-main">
            <FadeInSection
                className="max-w-screen-xl mx-auto relative min-h-[100dvh-3.5rem]"
                direction="up"
                delay={0.2}
            >
                <section id="hero" data-ds-feature="hero-section">
                    <div className="flex flex-col items-center justify-center text-center my-[3.5rem] px-4 relative z-10">
                        <AnimatedMotifs />
                        <div className="space-y-10" data-ds-feature="hero-headline">
                            <h1 className="text-muted-foreground text-2xl/relaxed">Know impact of your product and marketing investments</h1>
                            <h2 className="max-[470px]:text-[2.5rem] text-[4rem] leading-[1.1] font-bold bg-gradient-to-r from-[#ffa500] via-[#ff8c00] to-[#ffa500] bg-clip-text text-transparent animate-gradient drop-shadow-[0_2px_4px_rgba(255,165,0,0.3)]">
                                Turn user behaviour insights into decisions
                            </h2>
                        </div>
                        <p className="flex flex-col justify-center text-muted-foreground text-2xl/relaxed md:flex-row md:gap-[0.5rem] my-[3.5rem]" data-ds-feature="hero-subheading">
                            <span>We supercharge <span className='text-[#4285f4]'>G</span><span className='text-[#d93e31]'>o</span><span className='text-[#fbbc05]'>o</span><span className='text-[#4285f4]'>g</span><span className='text-[#34a853]'>l</span><span className='text-[#d93e31]'>e</span>&apos;s ecosystem with user behavior analysis tools</span>
                        </p>
                        <div className="flex items-center justify-center gap-[0.5rem]" data-ds-feature="hero-cta">
                            <ButtonExploreDemo creditCardClass="text-muted-foreground" />
                        </div>
                    </div>
                </section>
            </FadeInSection>

            <FadeInSection className="max-w-screen-xl mx-auto my-16 px-4">
                <section className="flex flex-col items-center">
                    <div className="overflow-x-auto w-full">
                        <table className="min-w-full bg-transparent rounded-xl text-lg">
                            <thead>
                                <tr>
                                    <th className="py-4 px-6 md:text-2xl text-sm font-bold text-center border-b">Datopus</th>
                                    <th className="py-4 px-6 text-primary md:text-xl text-sm font-bold text-center border-b">VS</th>
                                    <th className="py-4 px-6 text-muted-foreground md:text-2xl text-sm font-bold text-center border-b">Other platforms</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="py-4 px-6 md:text-lg text-sm text-center font-semibold">Easy Plug&amp;Run</td>
                                    <td className="py-4 px-6 md:text-lg text-sm text-center font-light bg-gray-100">Setup</td>
                                    <td className="py-4 px-6 md:text-lg text-sm text-center font-semibold text-muted-foreground">Complex</td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="py-4 px-6 md:text-lg text-sm text-center font-semibold">Cheaper</td>
                                    <td className="py-4 px-6 md:text-lg text-sm text-center font-light bg-gray-100">Pricing</td>
                                    <td className="py-4 px-6 md:text-lg text-sm text-center font-semibold text-muted-foreground">Expensive</td>
                                </tr>
                                <tr>
                                    <td className="py-4 px-6 md:text-lg text-sm text-center font-semibold">You own data</td>
                                    <td className="py-4 px-6 md:text-lg text-sm text-center font-light bg-gray-100">Data Ownership</td>
                                    <td className="py-4 px-6 md:text-lg text-sm text-center font-semibold text-muted-foreground">Vendor owns data</td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="py-4 px-6 md:text-lg text-sm text-center font-semibold">B2B SaaS oriented</td>
                                    <td className="py-4 px-6 md:text-lg text-sm text-center font-light bg-gray-100">Purpose</td>
                                    <td className="py-4 px-6 md:text-lg text-sm text-center font-semibold text-muted-foreground">General purpose</td>
                                </tr>
                                <tr>
                                    <td className="py-4 px-6 md:text-lg text-sm text-center font-semibold">Advanced tracking</td>
                                    <td className="py-4 px-6 md:text-lg text-sm text-center font-light bg-gray-100">Tracking</td>
                                    <td className="py-4 px-6 md:text-lg text-sm text-center font-semibold text-muted-foreground">Usual tracking</td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="py-4 px-6 md:text-lg text-sm text-center font-semibold">Augments Google ecosystem</td>
                                    <td className="py-4 px-6 md:text-lg text-sm text-center font-light bg-gray-100">Ecosystem</td>
                                    <td className="py-4 px-6 md:text-lg text-sm text-center font-semibold text-muted-foreground">No ecosystem</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </FadeInSection>

            <FadeInSection
                className="py-16"
                direction="up"
                delay={0.1}
            >
                <section id="platform" data-ds-feature="platform-section">
                    <div className="mb-5 mx-auto space-y-5 py-6 px-4 text-center" data-ds-feature="platform-heading">
                        <h2 className="mx-auto mb-2 max-w-4xl text-balance text-[48px] font-medium leading-tight">
                            WHAT DATOPUS CAN DO FOR YOU?
                        </h2>
                        <h2 className="mx-auto mb-2 max-w-4xl font-light text-2xl/relaxed">
                            Understand user behavior and address every product question - no coding required.
                        </h2>
                    </div>
                    <div data-ds-feature="what-we-can-do-container">
                        <WhatWeCanDoSection />
                    </div>
                    <div className="mt-16 mb-5 mx-auto space-y-5 py-6 px-4 text-center" data-ds-feature="features-heading">
                        <h2 className="mx-auto mb-2 max-w-4xl text-balance text-[48px] font-medium leading-tight">
                            Explore Our Key Features
                        </h2>
                        <h2 className="mx-auto mb-2 max-w-4xl font-light text-2xl/relaxed">
                            Discover how our platform can transform your product analytics experience
                        </h2>
                    </div>
                    <div data-ds-feature="feature-carousel-container">
                        <FeatureCarousel />
                    </div>
                </section>
            </FadeInSection>

            <FadeInSection
                className="py-16 bg-[hsl(var(--primary)/5%)]"
                direction="up"
                delay={0.1}
            >
                <section id="security-standards" data-ds-feature="security-section">
                    <div className="mb-5 mx-auto space-y-5 py-6 px-4 text-center" data-ds-feature="security-heading">
                        <h2 className="mx-auto mb-2 max-w-4xl text-balance text-[48px] font-medium leading-tight">
                            We take our customers and their users&apos; data very seriously
                        </h2>
                        <h2 className="mx-auto mb-2 max-w-4xl font-light text-2xl/relaxed">
                            As a vendor that processes millions of data points on a daily basis, our data is fully encrypted, managed, and stored by SOC-compliant vendors such as Microsoft Azure and Google Cloud.
                        </h2>
                    </div>
                    <div data-ds-feature="security-standards-container">
                        <SecurityStandardsSection />
                    </div>
                </section>
            </FadeInSection>

            <FadeInSection
                className="max-[1200px]:hidden py-16"
                direction="up"
                delay={0.1}
            >
                <section id="how-it-works" data-ds-feature="how-it-works-section">
                    <div className="mx-auto space-y-5 py-6 px-4 text-center" data-ds-feature="how-it-works-heading">
                        <h2 className="mx-auto mb-2 max-w-4xl text-balance text-[48px] font-medium leading-tight">
                            Become a data-led company in 3 steps
                        </h2>
                    </div>
                    <div data-ds-feature="how-it-works-content">
                        <HowItWorksSection />
                    </div>
                </section>
            </FadeInSection>

            <FadeInSection
                className="py-16"
                direction="up"
                delay={0.1}
            >
                <section className="py-16 bg-[hsl(var(--primary)/5%)]" data-ds-feature="testimonial-section">
                    <div className="mx-auto max-w-screen-xl px-4 flex items-center space-x-[72px] md:space-x-[0px] md:space-y-[72px] md:items-stretch">
                        <div className="flex items-center space-x-[32px] flex-shrink w-[25%] md:w-full" data-ds-feature="testimonial-image">
                            <img
                                alt="Product Manager at TechFlow"
                                src="/product_manager.jpg"
                                className="object-cover rounded-tr-[72px] rounded-bl-[72px] w-full h-[300px] md:h-[400px] md:w-[50%]"
                            />
                        </div>
                        <div className="mx-auto relative w-[75%] md:w-full" data-ds-feature="testimonial-content">
                            <i className="inline-block h-auto absolute w-[120px] left-[0%] top-[-48px] text-[#e2e8f0]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path fill="none" d="M0 0h24v24H0z"></path><path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"></path>
                                </svg>
                            </i>
                            <p className="font-light relative z-[10] md:text-[1.5rem]">
                                Our existing setup lacked the depth and flexibility we needed. Datopus worked hand-in-hand with our teams to ensure a smooth transition. The results? Our <b>product team</b> gained deeper insights into user behavior, refining features that mattered most. The <b>growth and engineering teams</b> work more efficiently thanks to event autocapture.
                            </p>
                            <div className="flex flex-col mt-[32px]" data-ds-feature="testimonial-author">
                                <span className="text-[24px] tracking-[-0.05em] font-medium">
                                    Rachel
                                </span>
                                <span className="font-light text-[18px]">
                                    <strong className="font-normal">Product Manager</strong> at TechFlow
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
            </FadeInSection>

            <FadeInSection
                className="py-16"
                direction="up"
                delay={0.1}
            >
                <section id="faq" data-ds-feature="faq-section">
                    <div className="mx-auto space-y-5 py-6 px-4 text-center" data-ds-feature="faq-heading">
                        <h2 className="mx-auto mb-2 max-w-4xl text-balance text-[48px] font-medium leading-tight">
                            Frequently Asked Questions
                        </h2>
                    </div>
                    <div data-ds-feature="faq-content">
                        <FAQSection />
                    </div>
                </section>
            </FadeInSection>

            <FadeInSection
                className="w-full py-14 bg-blue-600 md:py-28"
                direction="up"
                delay={0.1}
            >
                <section id="cta" data-ds-feature="main-cta-section">
                    <div className="flex flex-col items-center justify-center text-center my-[3.5rem]" data-ds-feature="main-cta-content">
                        <div className="mx-auto space-y-5 pb-6 text-center">
                            <h2 className="mx-auto mb-2 max-w-4xl text-balance text-5xl font-medium leading-tight text-white">
                                Unite Your Whole Team Around Your Product Growth Goals
                            </h2>
                        </div>
                        <div className="flex items-center justify-center gap-[0.5rem]">
                            <ButtonExploreDemo />
                        </div>
                    </div>
                </section>
            </FadeInSection>
        </main>
    );
}