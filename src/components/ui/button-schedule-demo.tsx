'use client'

import { Button } from "./button";

declare const Calendly: any;

export function ButtonScheduleDemo() {
    return (
        <Button variant="outline" onClick={handleScheduleDemo}>
            Contact us
        </Button>
    )
}

function handleScheduleDemo() {
    Calendly.initPopupWidget({ url: 'https://calendly.com/artem-datopus/30min' });
}