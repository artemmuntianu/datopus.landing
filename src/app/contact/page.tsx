'use client';

import { Mail, MapPin, Phone } from 'lucide-react';
import React from 'react';

export default function ContactPage() {
    return (
        <main className="flex flex-col min-h-[100dvh] mt-[3.5rem]" data-ds-feature="contact-page">
            <div className="w-full [background-image:linear-gradient(to_bottom,hsl(var(--primary)/10%),transparent)] [background-size:100%_50rem] [background-repeat:no-repeat] py-16" data-ds-feature="contact-hero">
                <div className="container mx-auto px-4">
                    <h1 className="font-bold text-4xl md:text-5xl text-center mb-6">
                        Contact Us
                    </h1>
                    <p className="text-center text-muted-foreground text-lg max-w-3xl mx-auto mb-12">
                        Schedule a call with our team or reach out through other channels
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Contact Information */}
                    <div className="lg:col-span-1" data-ds-feature="contact-info">
                        <div className="bg-background rounded-lg border p-6 h-full">
                            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>

                            <div className="space-y-6">
                                <div className="flex items-start" data-ds-feature="email-info">
                                    <div className="flex-shrink-0 mt-1">
                                        <Mail className="h-5 w-5 text-primary" />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-base font-medium">Email</h3>
                                        <p className="mt-1 text-muted-foreground">
                                            <a href="mailto:artem@datopus.io" className="hover:text-primary">
                                                artem@datopus.io
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start" data-ds-feature="phone-info">
                                    <div className="flex-shrink-0 mt-1">
                                        <Phone className="h-5 w-5 text-primary" />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-base font-medium">Phone</h3>
                                        <p className="mt-1 text-muted-foreground">
                                            <a href="tel:+1234567890" className="hover:text-primary">
                                                (+351) 913-316-091
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start" data-ds-feature="address-info">
                                    <div className="flex-shrink-0 mt-1">
                                        <MapPin className="h-5 w-5 text-primary" />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-base font-medium">Office</h3>
                                        <p className="mt-1 text-muted-foreground">
                                            Av. Cidade de Maringá 55, Leiria, Portugal
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <hr className="my-8 border-t border-border" />

                            <h3 className="text-xl font-medium mb-4">Why Schedule a Call?</h3>
                            <ul className="space-y-3 text-muted-foreground" data-ds-feature="benefits-list">
                                <li className="flex items-start">
                                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary/10 text-primary text-xs font-bold mr-3 mt-0.5">✓</span>
                                    <span>Get a personalized demo of Datopus</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary/10 text-primary text-xs font-bold mr-3 mt-0.5">✓</span>
                                    <span>Discuss your specific analytics needs</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary/10 text-primary text-xs font-bold mr-3 mt-0.5">✓</span>
                                    <span>Learn about pricing and implementation</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary/10 text-primary text-xs font-bold mr-3 mt-0.5">✓</span>
                                    <span>Ask technical questions to our experts</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="lg:col-span-2 flex flex-col rounded-lg border" data-ds-feature="calendly-scheduler">
                        <h2 className="text-2xl font-semibold pt-6 px-6">Schedule a Call</h2>
                        <iframe
                            src="https://calendly.com/artem-datopus/30min?embed_domain=datopus.io&embed_type=Inline"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            title="Select a time for your appointment"
                            className="min-h-[950px]"
                        ></iframe>
                    </div>
                </div>
            </div>
        </main>
    );
} 