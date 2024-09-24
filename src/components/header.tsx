import { Button } from "./ui/button";

export function Header() {
    return (
        <header className="fixed left-0 top-0 z-50 w-full animate-fade-in border-b backdrop-blur-[12px] [--animation-delay:600ms]">
            <div className="flex h-[3.5rem] max-w-[1000px] mr-auto ml-auto items-center justify-between">
                <a href="/" className="inline-flex mr-[10px]">
                    <img src="logo.svg" style={{ 'height': '2rem' }} alt="Datopus"></img>
                </a>
                <div>
                    <Button variant="ghost" asChild={true}>
                        <a href="/#solution">Solution</a>
                    </Button>
                    <Button variant="ghost" asChild={true}>
                        <a href="/#howitworks">How it works</a>
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