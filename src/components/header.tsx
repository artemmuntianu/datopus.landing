import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ButtonScheduleDemo } from "./ui/button-schedule-demo";

export function Header() {
    return (
        <header className="fixed left-0 top-0 z-50 w-full border-b bg-white">
            <div className="flex min-h-[3.5rem] max-w-screen-xl mx-auto px-4 items-center justify-between">
                <Link href="/" className="inline-flex mr-[10px]">
                    <Image src="/logo.svg" alt="Datopus" width="28" height="32" />
                </Link>
                <div>
                    <Button variant="ghost" asChild>
                        <Link href="/#solutions">Solutions</Link>
                    </Button>
                    <Button variant="ghost" asChild className="max-[1200px]:hidden">
                        <Link href="/#how-it-works">How it works</Link>
                    </Button>
                    <Button variant="ghost" asChild>
                        <Link href="/blog">Blog</Link>
                    </Button>
                    <Button variant="ghost" asChild>
                        <a href="https://docs.datopus.io">Documentation</a>
                    </Button>
                    
                </div>
                <div className="ml-auto flex h-full items-center">
                    <Button variant="ghost" asChild>
                        <Link href="/pricing">Pricing</Link>
                    </Button>
                    <ButtonScheduleDemo />
                </div>
            </div>
        </header>
    )
}