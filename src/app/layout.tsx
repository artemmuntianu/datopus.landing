import { Header } from '@/components/header';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Footer } from '../components/footer';
import './globals.css';
import { CSPostHogProvider } from './providers';

const DATA = {
    url: 'https://www.datopus.io',
    name: 'Optimize Product Features for Success | Datopus',
    description: 'Datopus'
}

export const metadata: Metadata = {
    metadataBase: new URL(DATA.url),
    title: {
        default: DATA.name,
        template: `%s | ${DATA.name}`,
    },
    description: DATA.description,
    openGraph: {
        title: `${DATA.name}`,
        description: DATA.description,
        url: DATA.url,
        siteName: `${DATA.name}`,
        locale: 'en_US',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    twitter: {
        title: `${DATA.name}`,
        card: 'summary_large_image',
    },
    verification: {
        google: '',
        yandex: '',
    }
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en' suppressHydrationWarning>
            <head>
                <script suppressHydrationWarning dangerouslySetInnerHTML={{
                    __html: `
                        var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
                        (function () {
                            var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
                            s1.async = true;
                            s1.src = 'https://embed.tawk.to/671bbda22480f5b4f593ccb2/1ib25phaq';
                            s1.charset = 'UTF-8';
                            s1.setAttribute('crossorigin', '*');
                            s0.parentNode.insertBefore(s1, s0);
                        })();`
                }} />
                <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
                <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
            </head>
            <CSPostHogProvider>
                <body
                    className={cn('min-h-screen bg-background font-sans antialiased mx-auto')}
                >
                    <Header />
                    {children}
                    <Footer />
                </body>
            </CSPostHogProvider>
        </html>
    )
}
