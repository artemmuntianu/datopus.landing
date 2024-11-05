'use client'

import { Button } from "./button";

declare const Calendly: any;

export function ButtonScheduleDemo() {
    return (
        <Button variant="default" onClick={handleScheduleDemo}>
            Schedule a Demo
        </Button>
    )
}

function handleScheduleDemo() {
    Calendly.initPopupWidget({ url: 'https://calendly.com/artem-datopus/30min' });
}