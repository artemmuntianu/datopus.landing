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
                <script suppressHydrationWarning dangerouslySetInnerHTML={{
                    __html: `
	                    ((d,a,t,o,p,u,s)=>{if(!d[p]){let e={view:p+":prevViewFeature",action0:p+":prevActionFeature0",action1:p+":prevActionFeature1"};Object.values(e).forEach(key=>t.setItem(key,"")),d.GlobalDatopusNamespace=d.GlobalDatopusNamespace||[],d.GlobalDatopusNamespace.push(p),d[p]=function(...args){["trackView","trackAction"].includes(args[0])&&(args.length<3&&Array.prototype.push.call(args,{}),"trackView"===args[0]?(args[2].prevFeature=t.getItem(e.view),t.setItem(e.view,args[1])):t.getItem(e.action1)===args[1]?args[2].prevFeature=t.getItem(e.action0):(args[2].prevFeature=t.getItem(e.action1),t.setItem(e.action0,args[2].prevFeature),t.setItem(e.action1,args[1]))),(d[p].q=d[p].q||[]).push(args)},d[p].q=d[p].q||[],u=a.createElement("script"),s=a.getElementsByTagName("script")[0],u.async=!0,u.src="https://datopus.blob.core.windows.net/scripts/ds.min.js",s.parentNode.insertBefore(u,s)}})(window,document,localStorage,0,"datopus");
	                    window.datopus("newTracker", window.location.hostname);`
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
