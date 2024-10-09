import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t">
            <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-between bg-white px-4 py-8 md:flex-row">
                <div className="flex flex-col items-center md:items-start">
                    <Link href="/" title="Datopus" className="mb-4 flex items-center space-x-2">
                        <Image src="/logo.svg" alt="Datopus" width="28" height="32" />
                        <span className="text-xl font-bold">Datopus</span>
                    </Link>
                    {/*<address className="text-muted-foreground text-sm not-italic"></address>*/}
                </div>
                <div className="mt-8 grid grid-cols-2 gap-8 md:mt-0">
                    <div>
                        <ul>
                            <li className="my-2">
                                <Link href="/#solutions" className="text-gray-600">Solutions</Link>
                            </li>
                            <li className="my-2">
                                <Link href="/#how-it-works" className="text-gray-600">How it works</Link>
                            </li>
                            <li className="my-2">
                                <Link href="/blog" className="text-gray-600">Blog</Link>
                            </li>
                            <li>
                                <a href="https://datopus.mintlify.app" className="text-gray-600">Documentation</a>
                            </li>
                            <li className="my-2">
                                <Link href="/pricing" className="text-gray-600">Pricing</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex items-center justify-center space-x-4">
                            <li className="my-2">
                                <a href="https://www.linkedin.com/company/datopus" className="text-gray-600" target="_blank" rel="noopener noreferrer">
                                    <LinkedInLogoIcon className="size-6" />
                                </a>
                            </li>
                            <li className="my-2">
                                <a href="https://x.com/datopus" className="text-gray-600" target="_blank" rel="noopener noreferrer">
                                    <svg className="size-6" height="1em" width="1em" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mx-auto grid size-full max-w-screen-xl grid-cols-1 justify-between gap-1 border-t py-3 md:grid-cols-2">
                <span className="text-muted-foreground text-xs tracking-tight">Copyright 2024 <Link href="/">Datopus</Link> - Optimize Product Features for Success</span>
                <ul className="text-muted-foreground flex justify-start text-xs tracking-tight md:justify-end">
                    <li className="mr-3 md:mx-4">
                        <Link href="/terms">Terms and conditions</Link>
                    </li>
                    <li>
                        <Link href="/privacy-policy">Privacy Policy</Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}