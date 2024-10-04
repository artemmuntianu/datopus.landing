'use client'

import { ChevronRightIcon } from "@radix-ui/react-icons";
import * as React from "react";
import { useState, useTransition } from "react";
import { Input } from "../components/ui/input";
import { Button } from "./ui/button";

const ExploreDemoForm = React.forwardRef<HTMLFormElement>(
    ({ ...props }, ref) => {

        const [isPending, startTransition] = useTransition();
        const [isSuccess, setIsSuccess] = useState(false);

        async function submit(event: any) {
            event.preventDefault(); // Prevent the default form submission behavior

            startTransition(async () => {
                const data = {
                    action: event.target.action.value,
                    email: event.target.email.value
                };
                const JSONdata = JSON.stringify(data);

                const endpoint = '/api/demo';
                const options = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSONdata
                };
                const response = await fetch(endpoint, options);
                const result = await response.json();
                console.log(result);

                setIsSuccess(true);
            });
        }

        return isSuccess
            ? (
                <div className="bg-white leading-[3rem] px-5 shadow-sm rounded-md text-sm">Thanks for your interest! <a href="http://localhost:4200" className="text-primary underline-offset-4 hover:underline">Here is your link to the demo.</a></div>
            )
            : (
                <form onSubmit={submit} method="post" ref={ref} {...props}>
                    <Input type="hidden" name="action" value="demo" />
                    <Input type="email" name="email" required placeholder="Enter your email address" className="h-12 bg-white" />
                    <Button disabled={isPending} type="submit" variant="default" className="ml-2 h-12 group text-white">
                        Explore the Demo
                        <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                </form>
            );
    }
);
ExploreDemoForm.displayName = "ExploreDemoForm";

export { ExploreDemoForm };
