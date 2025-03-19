'use client'

declare const Calendly: any;

export function HandleScheduleDemo() {
    Calendly.initPopupWidget({ url: 'https://calendly.com/artem-datopus/30min' });
}