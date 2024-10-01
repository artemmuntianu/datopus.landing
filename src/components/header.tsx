import Image from "next/image";
import { Button } from "./ui/button";

export function Header() {
    return (
        <header className="fixed left-0 top-0 z-50 w-full border-b backdrop-blur-[12px]">
            <div className="flex h-[3.5rem] max-w-[1000px] mr-auto ml-auto items-center justify-between">
                <a href="/" className="inline-flex mr-[10px]">
                    <Image src="/logo.svg" alt="Datopus" width={0} height={0}  style={{ 'width': 'auto', 'height': '2rem' }} />
                </a>
                <div>
                    <Button variant="ghost" asChild={true}>
                        <a href="/#solutions">Solutions</a>
                    </Button>
                    <Button variant="ghost" asChild={true}>
                        <a href="/#how-it-works">How it works</a>
                    </Button>
                    <Button variant="ghost" asChild={true}>
                        <a href="/blog">Blog</a>
                    </Button>
                    <Button variant="ghost" asChild={true}>
                        <a href="https://datopus.mintlify.app">Documentation</a>
                    </Button>
                    <Button variant="ghost" asChild={true}>
                        <a href="/pricing">Pricing</a>
                    </Button>
                </div>
                <div className="ml-auto flex h-full items-center">
                    <Button variant="default" asChild={true}>
                        <a href="/waitlist">Join Waitlist</a>
                    </Button>
                </div>
            </div>
        </header>
    )
}