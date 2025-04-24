'use client';

import { AlertCircle, CheckCircle2, Mail, Send } from 'lucide-react';
import { useState } from 'react';

export interface NewsletterFormProps {
    title?: string;
    description?: string;
    compact?: boolean;
    className?: string;
}

export default function NewsletterForm({
    title = 'Don\'t miss new articles',
    description = 'Subscribe to the newsletter to receive notifications about new publications and updates',
    compact = false,
    className = '',
}: NewsletterFormProps) {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email) {
            setError('Please enter your email');
            setStatus('error');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Please enter a valid email');
            setStatus('error');
            return;
        }

        setStatus('loading');

        // Simulating server request
        setTimeout(() => {
            setStatus('success');
            setEmail('');

            // Reset status after 5 seconds
            setTimeout(() => {
                setStatus('idle');
            }, 5000);
        }, 1500);
    };

    return (
        <div className={`${compact ? '' : 'py-10'} ${className}`}>
            <div className={`max-w-3xl mx-auto ${compact ? '' : 'text-center'}`}>
                {!compact && (
                    <>
                        <h2 className="text-3xl font-bold mb-4">
                            {title}
                        </h2>
                        <p className="text-muted-foreground mb-8">
                            {description}
                        </p>
                    </>
                )}

                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                    {status === 'success' ? (
                        <div className="flex items-center gap-3 p-4 border border-green-500 bg-green-50 dark:bg-green-950/30 rounded-lg">
                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                            <p className="text-green-700 dark:text-green-300">
                                Thanks for subscribing! We&apos;ve sent a confirmation to your email.
                            </p>
                        </div>
                    ) : (
                        <>
                            <div className="relative">
                                <div className={`flex flex-col sm:flex-row gap-3 ${status === 'error' ? 'mb-2' : ''}`}>
                                    <div className="relative flex-grow">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <Mail className="w-5 h-5 text-muted-foreground" />
                                        </div>
                                        <input
                                            type="email"
                                            placeholder="Your email"
                                            className={`w-full pl-10 pr-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary ${status === 'error' ? 'border-red-500 focus:ring-red-200' : ''}`}
                                            value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                                if (status === 'error') {
                                                    setStatus('idle');
                                                    setError('');
                                                }
                                            }}
                                            disabled={status === 'loading'}
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 min-w-[140px]"
                                        disabled={status === 'loading'}
                                    >
                                        {status === 'loading' ? (
                                            <>
                                                <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                                                <span>Please wait</span>
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-4 h-4" />
                                                <span>Subscribe</span>
                                            </>
                                        )}
                                    </button>
                                </div>

                                {status === 'error' && (
                                    <div className="flex items-center gap-2 mt-2 text-red-500 text-sm">
                                        <AlertCircle className="w-4 h-4" />
                                        <span>{error}</span>
                                    </div>
                                )}
                            </div>

                            <p className="text-xs text-muted-foreground mt-3">
                                We respect your privacy and won&apos;t send spam.
                                You can unsubscribe at any time.
                            </p>
                        </>
                    )}
                </form>
            </div>
        </div>
    );
} 