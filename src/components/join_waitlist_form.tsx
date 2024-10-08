'use client'

import { ChevronRightIcon } from "@radix-ui/react-icons";
import { useState, useTransition } from "react";
import { Input } from "../components/ui/input";
import { Button } from "./ui/button";

export function JoinWaitlistForm() {

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
            <div className="bg-white leading-[3rem] px-5 shadow-sm rounded-md text-sm">Welcome to the waitlist! We&apos;ll keep you updated on when the beta version is available.</div>
        )
        : (
            <form onSubmit={submit} method="post">
                <Input type="hidden" name="action" value="waitlist" />
                <Input type="email" name="email" required placeholder="Enter your email address" className="h-12 bg-white" />
                <Button disabled={isPending} type="submit" variant="default" className="max-[410px]:mt-2 ml-2 h-12 group text-white">
                    Join Waitlist
                    <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
            </form>
        );
}