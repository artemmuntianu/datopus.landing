'use client'

import { ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Icons } from "../icons";
import { Button } from "./button";

export function ButtonExploreDemo({ creditCardClass = "text-white"}) {
    return (
        <div>
            <div className="flex flex-col gap-[0.75rem] md:flex-row">
                <Button 
                    size="lg" 
                    className="min-w-[220px] h-14 group relative bg-[#ffa500] text-white font-medium text-md transition-all duration-500 hover:bg-white hover:text-[#ffa500] rounded-none border-2 border-[#ffa500]" 
                    asChild
                >
                    <Link href="https://app.datopus.io/auth/sign-up" data-ds-feature="CTA: get-started">
                        <span className="relative z-10 flex items-center justify-center">
                            GET STARTED
                            <ChevronRightIcon className="ml-1 size-4 transition-transform duration-500 group-hover:translate-x-2" />
                        </span>
                    </Link>
                </Button>
                <Button 
                    size="lg" 
                    className="min-w-[220px] h-14 group relative bg-transparent text-[#ffa500] font-medium text-md transition-all duration-500 hover:bg-[#ffa500] hover:text-white rounded-none border-2 border-[#ffa500]" 
                    asChild
                >
                    <Link href="https://app.datopus.io/demo-use-cases" data-ds-feature="CTA: explore-live-demo">
                        <span className="relative z-10 flex items-center justify-center">
                            Explore Live Demo
                            <ChevronRightIcon className="ml-1 size-4 transition-transform duration-500 group-hover:translate-x-2" />
                        </span>
                    </Link>
                </Button>
            </div>
            <p className={`text-sm flex items-center justify-center gap-1 mt-3 ${creditCardClass}`}>
                {Icons.creditCard({ className: "size-4" })}
                <span>No credit card needed</span>
            </p>
        </div>
    )
}