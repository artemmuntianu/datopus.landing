'use client'

import { ChevronRightIcon } from "@radix-ui/react-icons";
import { useState, useTransition } from "react";
import { Input } from "../components/ui/input";
import BlurFade from "./magicui/blur-fade";
import { Button } from "./ui/button";

export function JoinStartupProgramForm() {

    const [isPending, startTransition] = useTransition();
    const [isSuccess, setIsSuccess] = useState(false);

    function submit(event: any) {
        startTransition(async () => {
            event.preventDefault(); // Prevent the default form submission behavior
            const data = {
                action: event.target.action.value,
                email: event.target.email.value
            };
            const JSONdata = JSON.stringify(data);

            const endpoint = '/api/concern';
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSONdata
            };
            const { status } = await fetch(endpoint, options);
            if (status !== 200)
                alert('Please try again later. We&apos;re currently experiencing some temporary server issues that may be causing intermittent disruptions. Thank you for your patience.');
            else
                setIsSuccess(true);
        });
    }

    return (
        <BlurFade delay={0.05} className="mx-auto p-4 mb-4 max-w-screen-md w-full bg-white rounded-xl shadow-md">
            <h1 className="font-semibold text-2xl text-center my-4 text-primary">
                Startup Program
            </h1>
            <p>
                🎉 Use all features for <b>free</b> as long as you have fewer than <b>1,000 MTUs</b> (Monthly Tracked Users). After that, enjoy one-year <b>90% discount</b>. You will also get:<br />
                ✅Full support in setting up analytics tailored to your product.<br />
                ✅3 sessions with a pro analyst for expert insights.<br />
                ✅Tracking all user behavior directly in Google Analytics, with no GTM setup.<br />
                ✅Advanced analysis tools.<br />
                ❗Don&apos;t miss your chance to setup analytics properly, optimize marketing and remarketing, reduce churn, and boost conversions!
            </p>
            <div className="my-4">
                {
                    isSuccess
                        ? (
                            <div className="text-lg p-6 text-black text-center mx-auto">
                                🎉<br />
                                <b>Welcome to the Datopus Startup Program!</b><br />
                                Sign up and enjoy your 30-day free trial.<br />
                                We&apos;ll send you all the details of the program within 3 business days.
                            </div>
                        )
                        : (
                            <>
                                <p className="my-4 text-lg text-center">Join now and become a data-driven startup</p>
                                <div className="flex">
                                    <form onSubmit={submit} method="post" className="max-w-screen-xl mx-auto flex flex-col items-center gap-[0.5rem] md:flex-row">
                                        <Input type="hidden" name="action" value="startup_program" />
                                        <Input type="email" name="email" required placeholder="Enter your email address" className="bg-white text-black text-md" />
                                        <Button disabled={isPending} type="submit" size="lg" variant="default" className="min-w-[220px] group text-md bg-[#ffa500] hover:bg-[#ffa500]">
                                            Join Startup Program
                                            <ChevronRightIcon className="inline ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                                        </Button>
                                    </form>
                                </div>
                            </>
                        )
                }
            </div>
        </BlurFade>
    );
}