import BlurFade from "@/components/magicui/blur-fade";
import ShineBorder from "@/components/magicui/shine-border";
import { ChevronRightIcon, ClockIcon, DashboardIcon, Share1Icon } from "@radix-ui/react-icons";
import FlickeringGrid from "../components/magicui/flickering-grid";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { FeaturesSection } from "./features_section";
import { HowItWorksSection } from "./howitworks_section";

const BLUR_FADE_DELAY = 0.02;

export default function Page() {
    return (
        <main className="flex flex-col min-h-[100dvh] mt-[3.5rem] space-y-10 [background-image:linear-gradient(to_bottom,hsl(var(--primary)/10%),transparent)] [background-size:auto_50rem] [background-repeat:no-repeat]">

            <section id="hero" className="max-w-[1400px] mx-auto w-full">
                <div className="flex flex-col items-center justify-center text-center my-[3.5rem]">
                    <div className="space-y-5">
                        <h1 className="text-6xl">
                            Comprehensive Product Analytics <br /> to stay within budget
                        </h1>
                        <p className="text-muted-foreground text-xl/relaxed font-segoe">
                            No payment for events, sessions and users
                        </p>
                    </div>
                    <div className="flex items-center justify-center gap-[0.5rem] mt-[3.5rem]">
                        <Input type="email" placeholder="Enter your email address" className="h-12 bg-white" />
                        <Button variant="default" asChild={true} className="h-12 group text-white">
                            <a href="/signup">
                                Explore the Demo
                                <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </a>
                        </Button>
                    </div>
                </div>
                <BlurFade delay={BLUR_FADE_DELAY * 1} yOffset={0}>
                    <ShineBorder
                        className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background shadow-xl"
                        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                    >
                        <img src='features_flow.png'></img>
                    </ShineBorder>
                </BlurFade>
                <FlickeringGrid
                    className="ml-[50px]"
                    color="#666"
                    squareSize={3}
                    gridGap={6}
                    maxOpacity={0.5}
                    flickerChance={0.1}
                    width={1300}
                    height={40}
                />
            </section>

            <section id="problem" className="mx-auto max-w-screen-lg px-4 py-16">
                <div className="mx-auto space-y-5 py-6 text-center">
                    <h2 className="text-primary font-mono text-[14px] font-medium tracking-tight">The Problem</h2>
                    <h2 className="mx-auto mb-2 max-w-3xl text-balance text-[36px] font-medium leading-tight tracking-tighter">Elevating Requires Insights</h2>
                </div>
                <div className="mt-12 flex h-full flex-col items-center justify-between gap-8 text-center text-gray-600 md:flex-row md:gap-0">
                    <div className="flex size-full flex-col justify-center gap-4 md:w-1/3">
                        <div className="mx-auto mb-2">
                            <ClockIcon className="size-16" />
                        </div>
                        <p className="text-[0.9rem]">
                            The <i>lack</i> of Product Analytics leads to <i>wasting</i> time on <i>low-performing</i> features
                        </p>
                    </div>
                    <div className="mx-4 hidden h-[150px] w-px bg-gradient-to-b from-transparent via-black/40 to-transparent md:block"></div>
                    <div className="flex size-full flex-col justify-center gap-4 md:w-1/3">
                        <div className="mx-auto mb-2">
                            <DashboardIcon className="size-16" />
                        </div>
                        <p className="text-[0.9rem]">
                            Creating a <i>custom</i> Product Analytics tool <i>drains resources</i> from product development
                        </p>
                    </div>
                    <div className="mx-4 hidden h-[150px] w-px bg-gradient-to-b from-transparent via-black/40 to-transparent md:block"></div>
                    <div className="flex size-full flex-col justify-center gap-4 md:w-1/3">
                        <div className="mx-auto mb-2">
                            <Share1Icon className="size-16" />
                        </div>
                        <p className="text-[0.9rem]">
                            As a product&apos;s user base expands, the <i>cost</i> of Business Intelligence software <i>rises</i>
                        </p>
                    </div>
                </div>
            </section>

            <section id="solutions" className="mx-auto max-w-screen-lg px-4 py-16">
                <div className="mx-auto space-y-5 py-6 text-center">
                    <h2 className="text-primary font-mono text-[14px] font-medium tracking-tight">
                        The Solutions
                    </h2>
                    <h2 className="mx-auto mb-2 max-w-3xl text-balance text-[36px] font-medium leading-tight tracking-tighter">
                        Affordable, Faster, More Intuitive Analytics Portal
                    </h2>
                    <h2 className="mx-auto mb-2 max-w-3xl text-muted-foreground text-xl/relaxed font-segoe">
                        See How Our Features Solve Your Challenges
                    </h2>
                </div>
                <FeaturesSection />
            </section>

            <section id="how-it-works" className="mx-auto px-4 py-16">
                <div className="mx-auto space-y-5 py-6 text-center">
                    <h2 className="text-primary font-mono text-[14px] font-medium tracking-tight">
                        How it works
                    </h2>
                    <h2 className="mx-auto mb-2 max-w-3xl text-balance text-[36px] font-medium leading-tight tracking-tighter">
                        Become a Data-Led Organization in 3 Steps
                    </h2>
                </div>
                <HowItWorksSection />
            </section>

            <section id="cta" className="px-2 py-28 bg-[hsl(var(--primary)/10%)]">
                <div className="mx-auto space-y-5 pb-6 text-center">
                    <h2 className="mx-auto mb-2 max-w-3xl text-balance text-5xl font-medium leading-tight tracking-tighter">
                        Ready for Demo?
                    </h2>
                </div>
                <div className="flex items-center justify-center gap-[0.5rem]">
                    <Input type="email" placeholder="Enter your email address" className="h-12 bg-white" />
                    <Button variant="default" asChild={true} className="h-12 group text-white">
                        <a href="/signup">
                            Explore the Demo
                            <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </a>
                    </Button>
                </div>
            </section>

        </main>
    );
}