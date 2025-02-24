'use client'

import { ChevronRightIcon } from "@radix-ui/react-icons";
import { useState, useTransition } from "react";
import { Input } from "../components/ui/input";
import { Button } from "./ui/button";

export function JoinAffiliateProgramForm() {

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

    return isSuccess
        ? (
            <div className="bg-white leading-[3rem] px-5 shadow-sm rounded-md text-sm">Welcome to the Datopus Affiliate Program!We&apos;ll contact you within 3 business days.</div>
        )
        : (
            <form onSubmit={submit} method="post" className="flex flex-col items-center max-w-screen-xl mx-auto gap-[0.5rem] md:flex-row">
                <Input type="hidden" name="action" value="affiliate_program" />
                <Input type="email" name="email" required placeholder="Enter your email address" className="bg-white text-black text-md" />
                <Button disabled={isPending} type="submit" size="lg" variant="default" className="min-w-[220px] group text-md bg-[#ffa500] hover:bg-[#ffa500]">
                    Join Affiliate Program
                    <ChevronRightIcon className="inline ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
            </form>
        );
}