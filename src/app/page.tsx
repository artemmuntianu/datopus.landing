import BlurFade from "@/components/magicui/blur-fade"
import ShineBorder from "@/components/magicui/shine-border"
import { ClockIcon, DashboardIcon, Share1Icon } from "@radix-ui/react-icons"
import { ExploreDemoForm } from "../components/explore_demo_form"
import FlickeringGrid from "../components/magicui/flickering-grid"
import { ButtonExploreDemo } from "../components/ui/button-explore-demo"
import HeroVideoDialog from "../components/ui/hero-video-dialog"
import WordRotate from "../components/ui/word-rotate"
import { FAQSection } from "./faq_section"
import { FeaturesSection } from "./features_section"
import { HowItWorksSection } from "./howitworks_section"

const BLUR_FADE_DELAY = 0.02;

export default function Page() {
    return (
        <main className="flex flex-col min-h-[100dvh] mt-[3.5rem] space-y-10 [background-image:linear-gradient(to_bottom,hsl(var(--primary)/10%),transparent)] [background-size:100%_50rem] [background-repeat:no-repeat]">

            <section id="hero" className="max-w-screen-xl mx-auto w-full">
                <div className="flex flex-col items-center justify-center text-center my-[3.5rem]">
                    <div className="space-y-5">
                        <h1 className="max-[470px]:text-5xl text-6xl">
                            Product Analytics Platform
                            <WordRotate words={["for Widgets", "for Plugins", "for Web Apps", "for Web Sites"]} />
                        </h1>
                        <p className="text-muted-foreground text-2xl/relaxed">
                            <code>+30%</code> conversions &nbsp;&nbsp;<code>2x</code> retention &nbsp;&nbsp;<code>-40%</code> churn
                        </p>
                    </div>
                    <div className="flex items-center justify-center gap-[0.5rem] mt-[3.5rem]">
                        <ButtonExploreDemo />
                    </div>
                </div>
                <BlurFade delay={BLUR_FADE_DELAY * 1} yOffset={0}>
                    <ShineBorder
                        className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background shadow-xl"
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
                    <h2 className="text-primary font-mono text-[14px] font-medium tracking-tight">The Problem</h2>
                    <h2 className="mx-auto mb-2 max-w-4xl text-balance text-[48px] font-medium leading-tight tracking-tighter">Do Not Let It Slow You Down</h2>
                    <h2 className="mx-auto mb-2 max-w-4xl text-muted-foreground text-2xl/relaxed">
                        The lack of event auto-capture, inconsistency in event naming, and per-event charges make analytics 3x more complicated.
                    </h2>
                </div>
                <div className="mt-12 flex h-full flex-col items-center justify-between gap-8 text-center text-gray-600 md:flex-row md:gap-0">
                    <div className="flex size-full flex-col justify-center gap-4 md:w-1/3">
                        <div className="mx-auto mb-2">
                            <ClockIcon className="size-16" />
                        </div>
                        <p className="text-[1.5rem]">
                            Event Tracking Plan demand time to implement and maintain.
                        </p>
                    </div>
                    <div className="mx-4 hidden h-[150px] w-px bg-gradient-to-b from-transparent via-black/40 to-transparent md:block"></div>
                    <div className="flex size-full flex-col justify-center gap-4 md:w-1/3">
                        <div className="mx-auto mb-2">
                            <DashboardIcon className="size-16" />
                        </div>
                        <p className="text-[1.5rem]">
                            Product and Growth teams barely understand the collected data.
                        </p>
                    </div>
                    <div className="mx-4 hidden h-[150px] w-px bg-gradient-to-b from-transparent via-black/40 to-transparent md:block"></div>
                    <div className="flex size-full flex-col justify-center gap-4 md:w-1/3">
                        <div className="mx-auto mb-2">
                            <Share1Icon className="size-16" />
                        </div>
                        <p className="text-[1.5rem]">
                            The cost of analytics software tied up to amount of users and events.
                        </p>
                    </div>
                </div>
            </section>

            <section id="platform" className="mx-auto max-w-screen-xl px-4 py-16">
                <div className="mb-5 mx-auto space-y-5 py-6 text-center bg-[hsl(var(--primary)/10%)] rounded-lg">
                    <h2 className="text-primary font-mono text-[14px] font-medium tracking-tight">
                        The Solution
                    </h2>
                    <h2 className="mx-auto mb-2 max-w-4xl text-balance text-[48px] font-medium leading-tight tracking-tighter">
                        Unlock the Power of Plug&Run Analytics Platform
                    </h2>
                    <h2 className="mx-auto mb-2 max-w-4xl text-muted-foreground text-2xl/relaxed">
                        Understand user behavior across the product journey with powerful custom reports, and address every product question - no coding required.
                    </h2>
                </div>
                <FeaturesSection/>
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

            <section id="faq" className="w-full mx-auto max-w-screen-xl px-4 py-16">
                <div className="mx-auto space-y-5 py-6 text-center bg-[hsl(var(--primary)/10%)] rounded-lg">
                    <h2 className="text-primary font-mono text-[14px] font-medium tracking-tight">Frequently Asked Questions</h2>
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