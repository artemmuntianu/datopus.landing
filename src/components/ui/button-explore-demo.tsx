'use client'

import { ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Button } from "./button";

export function ButtonExploreDemo() {
    return (
        <div>
            <Button size="lg" className="h-14 group text-md bg-[#ffa500] hover:bg-[#ffa500]" asChild>
                <Link href="https://app.datopus.io/demo-use-cases">
                    Explore Live Demo  <ChevronRightIcon className="inline ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
            </Button>
            <p className="text-sm text-muted-foreground">No credit card required</p>
        </div>
    )
}