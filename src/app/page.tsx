import BlurFade from "@/components/magicui/blur-fade"
import ShineBorder from "@/components/magicui/shine-border"
import { ButtonExploreDemo } from "../components/ui/button-explore-demo"
import HeroVideoDialog from "../components/ui/hero-video-dialog"
import WordRotate from "../components/ui/word-rotate"
import { FAQSection } from "./faq_section"
import { FeaturesSection } from "./features_section"
import { HowItWorksSection } from "./howitworks_section"
import { ProblemSection } from "./problem_section"
import { SecurityStandardsSection } from "./security_standards_section"

const BLUR_FADE_DELAY = 0.02;

export default function Page() {
    return (
        <main className="flex flex-col min-h-[100dvh] mt-[6.5rem] md:mt-[3.5rem] space-y-10 [background-image:linear-gradient(to_bottom,hsl(var(--primary)/10%),transparent)] [background-size:100%_50rem] [background-repeat:no-repeat]">

            <section id="hero" className="max-w-screen-xl mx-auto w-full">
                <div className="flex flex-col items-center justify-center text-center my-[3.5rem]">
                    <div className="space-y-5">
                        <h1 className="max-[470px]:text-5xl text-6xl">
                            Plug&Run Analytics
                            <WordRotate words={["for Product Team", "for Growth Team", "for Data Team", "for Devs"]} />
                        </h1>
                        <p className="flex flex-col justify-center text-muted-foreground text-2xl/relaxed md:flex-row md:gap-[0.5rem]">
                            <span><code>+30%</code> conversions</span>
                            <span><code>2x</code> retention</span>
                            <span><code>-40%</code> churn</span>
                        </p>
                    </div>
                    <div className="flex items-center justify-center gap-[0.5rem] mt-[6.5rem] md:mt-[3.5rem]">
                        <ButtonExploreDemo />
                    </div>
                </div>
                <BlurFade delay={BLUR_FADE_DELAY * 1} yOffset={0}>
                    <ShineBorder
                        className="relative flex flex-col w-full items-center justify-center overflow-hidden rounded-lg border bg-background shadow-xl"
                        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                    >
                        <HeroVideoDialog
                            className="block"
                            animationStyle="fade"
                            videoSrc="https://www.youtube.com/embed/DjiYVJyy2vg?si=iZAcJ2QEeYwJ2gSV"
                            thumbnailSrc="/features_flow.png"
                            thumbnailAlt="Datopus Product Analytics Platform"
                        />
                    </ShineBorder>
                </BlurFade>
            </section>

            <section id="problem" className="mx-auto max-w-screen-xl px-4 py-16">
                <div className="mx-auto space-y-5 py-6 text-center bg-[hsl(var(--primary)/10%)] rounded-lg">
                    <h2 className="text-primary font-mono text-[14px] font-medium tracking-tight">
                        The Problem
                    </h2>
                    <h2 className="mx-auto mb-2 max-w-4xl text-balance text-[48px] font-medium leading-tight tracking-tighter">
                        Do Not Let It Slow You Down
                    </h2>
                    <h2 className="mx-auto mb-2 max-w-4xl font-light text-2xl/relaxed">
                        The lack of event auto-capture, inconsistency in event naming, and per-event charges make analytics 3x more complicated.
                    </h2>
                </div>
                <ProblemSection />
            </section>

            <section id="platform" className="mx-auto max-w-screen-xl px-4 py-16">
                <div className="mb-5 mx-auto space-y-5 py-6 text-center bg-[hsl(var(--primary)/10%)] rounded-lg">
                    <h2 className="text-primary font-mono text-[14px] font-medium tracking-tight">
                        The Solution
                    </h2>
                    <h2 className="mx-auto mb-2 max-w-4xl text-balance text-[48px] font-medium leading-tight tracking-tighter">
                        Unlock the Power of Plug&Run Analytics Platform
                    </h2>
                    <h2 className="mx-auto mb-2 max-w-4xl font-light text-2xl/relaxed">
                        Understand user behavior across the product journey with powerful custom reports, and address every product question - no coding required.
                    </h2>
                </div>
                <FeaturesSection />
            </section>

            <section id="security-standards" className="w-full mx-auto max-w-screen-xl px-4 py-16">
                <div className="mb-5 mx-auto space-y-5 py-6 text-center bg-[hsl(var(--primary)/10%)] rounded-lg">
                    <h2 className="text-primary font-mono text-[14px] font-medium tracking-tight">
                        Security Standards at Datopus
                    </h2>
                    <h2 className="mx-auto mb-2 max-w-4xl text-balance text-[48px] font-medium leading-tight tracking-tighter">
                        We take our customers and their users&apos; data very seriously
                    </h2>
                    <h2 className="mx-auto mb-2 max-w-4xl font-light text-2xl/relaxed">
                        As a vendor that processes millions of data points on a daily basis, our data is fully encrypted, managed, and stored by SOC-compliant vendors such as Microsoft Azure and Google Cloud.
                    </h2>
                </div>
                <SecurityStandardsSection />
            </section>

            <section id="how-it-works" className="max-[1200px]:hidden mx-auto px-4 py-16">
                <div className="mx-auto space-y-5 py-6 text-center bg-[hsl(var(--primary)/10%)] rounded-lg">
                    <h2 className="text-primary font-mono text-[14px] font-medium tracking-tight">
                        How it works
                    </h2>
                    <h2 className="mx-auto mb-2 max-w-4xl text-balance text-[48px] font-medium leading-tight tracking-tighter">
                        Become a data-led company in 3 steps
                    </h2>
                </div>
                <HowItWorksSection />
            </section>

            <section className="w-full mx-auto max-w-screen-xl px-4 py-16">
                <div className="flex items-center space-x-[72px] mx-auto md:space-x-[0px] md:space-y-[72px] md:items-stretch">
                    <div className="flex items-center space-x-[32px] flex-shrink w-[25%] md:w-full">
                        <img
                            alt="Product Manager at TechFlow"
                            src="/product_manager.jpg"
                            className="object-cover rounded-tr-[72px] rounded-bl-[72px] w-full h-[300px] md:h-[400px] md:w-[50%]"
                        />
                    </div>
                    <div className="mx-auto relative w-[75%] md:w-full">
                        <i className="inline-block h-auto absolute w-[120px] left-[0%] top-[-48px] text-[#e2e8f0]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path fill="none" d="M0 0h24v24H0z"></path><path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"></path>
                            </svg>
                        </i>
                        <p className="font-light relative z-[10] md:text-[1.5rem]">
                            Our existing setup lacked the depth and flexibility we needed. Datopus worked hand-in-hand with our teams to ensure a smooth transition. The results? Our <b>product team</b> gained deeper insights into user behavior, refining features that mattered most. The <b>growth and engineering teams</b> work more efficiently thanks to event autocapture.
                        </p>
                        <div className="flex flex-col mt-[32px]">
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

            <section id="faq" className="w-full mx-auto max-w-screen-xl px-4 py-16">
                <div className="mx-auto space-y-5 py-6 text-center bg-[hsl(var(--primary)/10%)] rounded-lg">
                    <h2 className="text-primary font-mono text-[14px] font-medium tracking-tight">
                        Frequently Asked Questions
                    </h2>
                </div>
                <FAQSection />
            </section>

            <section id="cta" className="w-full py-28 bg-[hsl(var(--primary)/10%)]">
                <div className="flex flex-col items-center justify-center text-center my-[3.5rem]">
                    <div className="mx-auto space-y-5 pb-6 text-center">
                        <h2 className="mx-auto mb-2 max-w-4xl text-balance text-5xl font-medium leading-tight tracking-tighter">
                            Unite Your Whole Team Around Your Product Growth Goals
                        </h2>
                    </div>
                    <div className="flex items-center justify-center gap-[0.5rem]">
                        <ButtonExploreDemo />
                    </div>
                </div>
            </section>

        </main>
    );
}