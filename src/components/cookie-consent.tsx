"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const hasConsented = localStorage.getItem("cookieConsent");
        if (!hasConsented) {
            // Only show banner if no choice has been made
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookieConsent", "accepted");
        setIsVisible(false);
    };

    const handleReject = () => {
        localStorage.setItem("cookieConsent", "rejected");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t p-4 z-50">
            <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                    <h3 className="font-semibold text-lg">We value your privacy</h3>
                    <p className="text-sm mt-1">
                        We use cookies to enhance your browsing experience and analyse our traffic. By clicking &apos;Accept&apos;, you consent to our use of cookies.&nbsp;
                        <Link href="/privacy-policy" className="text-primary underline">
                            Privacy Policy
                        </Link>
                    </p>
                </div>
                <div className="flex gap-3">
                    <Button
                        onClick={handleAccept}
                        className="w-24"
                    >
                        Accept
                    </Button>
                    <Button
                        variant="outline"
                        onClick={handleReject}
                        className="w-24"
                    >
                        Reject
                    </Button>

                </div>
            </div>
        </div>
    );
} 