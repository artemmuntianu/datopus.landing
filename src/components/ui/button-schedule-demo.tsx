'use client'

import Link from "next/link";
import { Button } from "./button";

declare const Calendly: any;

export function ButtonScheduleDemo() {
    return (
        <Button variant="outline" onClick={handleScheduleDemo}>
            Contact us
        </Button>
    )
}

export function LinkContactUs() {
    return (
        <Link href="#footer" onClick={handleScheduleDemo}>Contact Us</Link>
    )
}

function handleScheduleDemo() {
    Calendly.initPopupWidget({ url: 'https://calendly.com/artem-datopus/30min' });
}