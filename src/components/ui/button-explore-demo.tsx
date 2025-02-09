'use client'

import { ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Icons } from "../icons";
import { Button } from "./button";

export function ButtonExploreDemo() {
    return (
        <div>
            <div className="flex flex-col gap-[0.5rem] md:flex-row">
                <Button size="lg" className="min-w-[220px] h-14 group text-md bg-[#ffa500] hover:bg-[#ffa500]" asChild>
                    <Link href="https://app.datopus.io">
                        GET STARTED  <ChevronRightIcon className="inline ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </Button>
                <Button size="lg" className="min-w-[220px] h-14 group text-md bg-[#ffa500] hover:bg-[#ffa500]" asChild>
                    <Link href="https://app.datopus.io/demo-use-cases">
                        Explore Live Demo  <ChevronRightIcon className="inline ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </Button>
            </div>
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-1 mt-1">
                {Icons.creditCard({ className: "size-4" })}
                <span>No credit card needed</span>
            </p>
        </div>
    )
}