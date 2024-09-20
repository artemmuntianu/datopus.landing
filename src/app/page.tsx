import BlurFade from "@/components/magicui/blur-fade";
import RetroGrid from "@/components/magicui/retro-grid";
import ShineBorder from "@/components/magicui/shine-border";

const BLUR_FADE_DELAY = 0.02;

export default function Page() {
    return (
        <main className="flex flex-col min-h-[100dvh] mt-[3.5rem] space-y-10">
            <RetroGrid />

            <section id="hero">
                <div className="mx-auto w-full max-w-[55rem]">
                    <div className="flex flex-col items-center justify-center text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter">
                                Optimize Your Product Features for Success
                            </h2>
                            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Comprehensive Product Analytics to stay within budget
                            </p>
                        </div>
                    </div>
                    <BlurFade delay={BLUR_FADE_DELAY * 1} yOffset={0}>
                        <ShineBorder
                            className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
                            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                        >
                            <div
                                style={
                                    {
                                        'background': 'url(screen-features-usage.png)',
                                        'width': '100%',
                                        'height': '100%',
                                        'background-size': 'cover',
                                        'background-repeat': 'no-repeat',
                                        'background-position': 'top'
                                    } as React.CSSProperties
                                }
                            ></div>
                        </ShineBorder>
                    </BlurFade>
                </div>
            </section>

            <section id="projects">
                <div className="w-full py-12">

                </div>
            </section>

        </main>
    );
}