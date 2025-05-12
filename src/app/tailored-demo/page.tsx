'use client';

import { AdvantagesCarousel } from '@/components/advantages-carousel';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronRightIcon } from '@radix-ui/react-icons';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function TailoredDemoPage() {
    const searchParams = useSearchParams();
    const name = searchParams.get('name') || 'there';
    const [website, setWebsite] = useState('');
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'generating' | 'email-request' | 'success'>('idle');
    const [error, setError] = useState('');

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        if (status === 'generating') {
            timeout = setTimeout(() => {
                setStatus('email-request');
            }, 20 * 1000);
        }
        return () => clearTimeout(timeout);
    }, [status]);

    const handleGenerateLink = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!website) {
            setError('Please enter your website URL');
            return;
        }

        // URL validation regex that accepts both with and without protocol
        const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
        if (!urlRegex.test(website)) {
            setError('Please enter a valid website URL (e.g., example.com or https://example.com)');
            return;
        }

        setError('');
        setStatus('generating');
    };

    const handleEmailSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) {
            setError('Please enter your email address');
            return;
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Please enter a valid email address');
            return;
        }

        setError('');
        try {
            const response = await fetch('/api/concern', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    action: 'demo_request',
                    email,
                    website
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to submit request');
            }

            setStatus('success');
        } catch (err) {
            setError('Failed to submit request. Please try again.');
            setStatus('email-request');
        }
    };

    return (
        <main className="flex flex-col min-h-[100dvh] mt-[3.5rem] [background-image:linear-gradient(to_bottom,hsl(var(--primary)/10%),transparent)] [background-size:100%_50rem] [background-repeat:no-repeat]">
            <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                <div className="flex flex-col items-center justify-center text-center mb-8 sm:mb-12">
                    <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Hello, {name}!</h1>
                    <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">Let&apos;s create a tailored demo for your website.</p>
                </div>

                {status === 'idle' && (
                    <div className="w-full max-w-xl mx-auto px-4 sm:px-0">
                        <form onSubmit={handleGenerateLink} className="space-y-4 text-center">
                            <div className="space-y-2">
                                <Input
                                    type="text"
                                    placeholder="Enter your website URL"
                                    value={website}
                                    onChange={(e) => setWebsite(e.target.value)}
                                    className="bg-white w-full h-12 text-base"
                                />
                                {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
                            </div>
                            <Button
                                type="submit"
                                className="w-full px-6 py-3 h-12 text-base bg-primary text-white rounded-lg items-center gap-2 sm:w-auto"
                            >
                                Generate Demo Link
                                <ChevronRightIcon className="h-4 w-4" />
                            </Button>
                        </form>
                    </div>
                )}

                {(status === 'generating' || status === 'email-request') && (
                    <div className="w-full max-w-xl mx-auto px-4 sm:px-0 mb-8 sm:mb-12">
                        <div className="flex flex-col items-center space-y-4">
                            <div className="h-8 w-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                            <p className="text-lg font-medium">Generating your tailored demo...</p>
                            <p className="text-sm text-center">This may take a few moments.</p>
                        </div>
                    </div>
                )}

                {status === 'email-request' && (
                    <div className="w-full max-w-xl mx-auto px-4 sm:px-0 mb-8 sm:mb-12">
                        <hr />
                        <br />
                        <form onSubmit={handleEmailSubmit} className="space-y-4 text-center">
                            <p className="text-center mb-4 sm:text-lg">
                                Seems like our AI agent is having a hard time and generation is taking a bit longer than expected.
                                Would it be okay if we send you the demo link as soon as it&apos;s ready?
                            </p>
                            <div className="space-y-2">
                                <Input
                                    type="email"
                                    placeholder="Enter your email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="bg-white w-full h-12 text-base"
                                />
                                {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
                            </div>
                            <Button
                                type="submit"
                                className="w-full px-6 py-3 h-12 text-base bg-primary text-white rounded-lg items-center gap-2 sm:w-auto"
                            >
                                Sounds good!
                                <ChevronRightIcon className="h-4 w-4" />
                            </Button>
                        </form>
                    </div>
                )}

                {status === 'success' && (
                    <div className="w-full max-w-xl mx-auto px-4 sm:px-0 mb-8 sm:mb-12 text-center">
                        <div className="rounded-full bg-green-100 p-4 w-fit mx-auto mb-4">
                            <Icons.check className="h-6 w-6 text-green-600" />
                        </div>
                        <h2 className="text-2xl font-semibold mb-3">Thank you!</h2>
                        <p className="text-base sm:text-lg">
                            We&apos;ll send your tailored demo link to your email address shortly.
                        </p>
                    </div>
                )}

                <div className="mt-8 sm:mt-12">
                    <AdvantagesCarousel />
                </div>
            </div>
        </main>
    );
} 