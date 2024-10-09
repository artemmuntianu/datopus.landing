import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export function Header() {
    return (
        <header className="fixed left-0 top-0 z-50 w-full border-b backdrop-blur-[12px]">
            <div className="flex min-h-[3.5rem] max-w-screen-lg mx-auto px-4 items-center justify-between">
                <Link href="/" className="inline-flex mr-[10px]">
                    <Image src="/logo.svg" alt="Datopus" width="28" height="32" />
                </Link>
                <div>
                    <Button variant="ghost" asChild={true}>
                        <Link href="/#solutions">Solutions</Link>
                    </Button>
                    <Button variant="ghost" asChild={true} className="max-[1200px]:hidden">
                        <Link href="/#how-it-works">How it works</Link>
                    </Button>
                    <Button variant="ghost" asChild={true}>
                        <Link href="/blog">Blog</Link>
                    </Button>
                    <Button variant="ghost" asChild={true}>
                        <a href="https://datopus.mintlify.app">Documentation</a>
                    </Button>
                    <Button variant="ghost" asChild={true}>
                        <Link href="/pricing">Pricing</Link>
                    </Button>
                </div>
                <div className="ml-auto flex h-full items-center">
                    <Button variant="default" asChild={true}>
                        <Link href="/waitlist">Join Waitlist</Link>
                    </Button>
                </div>
            </div>
        </header>
    )
}