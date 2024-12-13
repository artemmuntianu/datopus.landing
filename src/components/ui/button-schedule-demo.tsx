'use client'

import { Button } from "./button";

declare const Calendly: any;

export function ButtonScheduleDemo() {
    return (
        <Button variant="outline" onClick={handleScheduleDemo}>
            Let&apos;s talk
        </Button>
    )
}

function handleScheduleDemo() {
    Calendly.initPopupWidget({ url: 'https://calendly.com/artem-datopus/30min' });
}