import BlurFade from "@/components/magicui/blur-fade";
import { JoinWaitlistForm } from "../../components/join_waitlist_form";

const BLUR_FADE_DELAY = 0.04;

export default function WaitlistPage() {
	return (
		<main className="flex flex-col min-h-[100dvh] mt-[3.5rem] [background-image:linear-gradient(to_bottom,hsl(var(--primary)/10%),transparent)] [background-size:100%_50rem] [background-repeat:no-repeat]">
			<BlurFade delay={BLUR_FADE_DELAY}>
				<h2 className="text-center my-8 text-primary font-mono text-[14px] font-medium tracking-tight">
					We launch this year!
				</h2>
			</BlurFade>
			<BlurFade delay={BLUR_FADE_DELAY + 1 * BLUR_FADE_DELAY}>
				<section className="max-w-screen-xl mx-auto w-full">
					<div className="flex flex-col items-center justify-center text-center my-[3.5rem]">
						<div className="space-y-5">
							<h1 className="text-4xl">
								Get early-bird discount
							</h1>
						</div>
						<div className="flex items-center justify-center gap-[0.5rem] mt-[3.5rem]">
							<JoinWaitlistForm />
						</div>
					</div>
				</section>
			</BlurFade>
		</main>
	)
}