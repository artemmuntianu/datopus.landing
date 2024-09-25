import BlurFade from "@/components/magicui/blur-fade";
import ShineBorder from "@/components/magicui/shine-border";
import FlickeringGrid from "../components/magicui/flickering-grid";
import { Button } from "../components/ui/button";
import { FeaturesSection } from "./features_section";
import { HowItWorksSection } from "./howitworks_section";
import { ClockIcon, DashboardIcon, Share1Icon } from "@radix-ui/react-icons";

const BLUR_FADE_DELAY = 0.02;

export default function Page() {
    return (
        <main className="flex flex-col min-h-[100dvh] mt-[7rem] space-y-10">

            <section id="hero">
                <div className="max-w-[1400px] mx-auto w-full">
                    <div className="flex flex-col items-center justify-center text-center">
                        <div className="space-y-5">
                            <h2 className="text-3xl font-bold">
                                Optimize Your Product Features for Success
                            </h2>
                            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Comprehensive Product Analytics to stay within budget
                            </p>
                        </div>
                        <Button variant="secondary" asChild={true} className="my-[3.5rem]">
                            <a href="/signup">Explore Demos</a>
                        </Button>
                    </div>
                    <BlurFade delay={BLUR_FADE_DELAY * 1} yOffset={0}>
                        <ShineBorder
                            className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background shadow-xl"
                            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                        >
                            <img src='screen-features-usage.png'></img>
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
                </div>
            </section>

            <section id="problem">
                <div className="mx-auto max-w-screen-lg px-4 py-16">
                    <div className="mx-auto space-y-5 py-6 text-center">
                        <h2 className="text-primary font-mono text-[14px] font-medium tracking-tight">The Problem</h2>
                        <h2 className="mx-auto mb-2 max-w-3xl text-balance text-[36px] font-medium leading-tight tracking-tighter">Elevating Requires Insights</h2>
                    </div>
                    <div className="mt-12 flex h-full flex-col items-center justify-between gap-8 text-center text-gray-600 md:flex-row md:gap-0">
                        <div className="flex size-full flex-col justify-center gap-4 md:w-1/3">
                            <div className="mx-auto mb-2">
                                <ClockIcon className="size-16" />
                            </div>
                            <p className="text-sm">
                                The <i>lack</i> of Product Analytics leads to <i>wasting</i> time on <i>low-performing</i> features
                            </p>
                        </div>
                        <div className="mx-4 hidden h-[150px] w-px bg-gradient-to-b from-transparent via-black/40 to-transparent md:block"></div>
                        <div className="flex size-full flex-col justify-center gap-4 md:w-1/3">
                            <div className="mx-auto mb-2">
                                <Share1Icon className="size-16" />
                            </div>
                            <p className="text-sm">
                                As a product&apos;s user base expands, the <i>cost</i> of Business Intelligence software <i>rises</i>
                            </p>
                        </div>
                        <div className="mx-4 hidden h-[150px] w-px bg-gradient-to-b from-transparent via-black/40 to-transparent md:block"></div>
                        <div className="flex size-full flex-col justify-center gap-4 md:w-1/3">
                            <div className="mx-auto mb-2">
                                <DashboardIcon className="size-16" />
                            </div>
                            <p className="text-sm">
                                Creating a <i>custom</i> Product Analytics tool <i>drains resources</i> from product development
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="solution">
                <div className="mx-auto max-w-screen-lg px-4 py-16">
                    <div className="mx-auto space-y-5 py-6 text-center">
                        <h2 className="text-primary font-mono text-[14px] font-medium tracking-tight">The Solution</h2>
                        <h2 className="mx-auto mb-2 max-w-3xl text-balance text-[36px] font-medium leading-tight tracking-tighter">Cheaper, Faster, More Intuitive Analytics Portal</h2>
                        <h2 className="mx-auto mb-2 max-w-3xl text-balance text-[24px] font-medium leading-tight tracking-tighter">See How Our Features Solve Your Challenges</h2>
                    </div>
                    <FeaturesSection />
                </div>
            </section>

            <section id="howitworks">
                <div className="mx-auto px-4 py-16">
                    <div className="mx-auto space-y-5 py-6 text-center">
                        <h2 className="text-primary font-mono text-[14px] font-medium tracking-tight">How it works</h2>
                        <h2 className="mx-auto mb-2 max-w-3xl text-balance text-[36px] font-medium leading-tight tracking-tighter">Become a Data-Led Organization in 3 Steps</h2>
                    </div>
                    <HowItWorksSection />
                </div>
            </section>

        </main>
    );
}