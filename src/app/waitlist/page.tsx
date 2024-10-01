import BlurFade from "@/components/magicui/blur-fade";
import { ChevronRightIcon } from "lucide-react";
import FlickeringGrid from "../../components/magicui/flickering-grid";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

const BLUR_FADE_DELAY = 0.04;

export default function WaitlistPage() {
	return (
		<main className="flex flex-col min-h-[100dvh] mt-[3.5rem] [background-image:linear-gradient(to_bottom,hsl(var(--primary)/10%),transparent)] [background-size:auto_50rem] [background-repeat:no-repeat]">
			<BlurFade delay={BLUR_FADE_DELAY}>
				<h1 className="font-medium text-3xl text-center my-8">
					We launch this year!
				</h1>
			</BlurFade>
			<BlurFade delay={BLUR_FADE_DELAY + 1 * BLUR_FADE_DELAY}>
				<section className="max-w-[1400px] mx-auto w-full">
					<FlickeringGrid
						color="#666"
						squareSize={3}
						gridGap={6}
						maxOpacity={0.5}
						flickerChance={0.1}
						height={50} />
					<div className="flex flex-col items-center justify-center text-center my-[3.5rem]">
						<div className="space-y-5">
							<h1 className="text-4xl">
								Join our waitlist
							</h1>
							<p className="text-muted-foreground text-xl/relaxed font-segoe">
								and get early-bird discount.
							</p>
						</div>
						<div className="flex items-center justify-center gap-[0.5rem] mt-[3.5rem]">
							<Input type="email" placeholder="Enter your email address" className="h-12 bg-white" />
							<Button variant="default" asChild={true} className="h-12 group text-white">
								<a href="/signup">
									Join Waitlist
									<ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
								</a>
							</Button>
						</div>
					</div>
				</section>
			</BlurFade>
		</main>
	)
}