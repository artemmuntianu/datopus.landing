'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

declare const datopus: any;
let lastPathname = '';

const PageTracker = () => {
    const pathname = usePathname();

    useEffect(() => {
        if (pathname === lastPathname)
            return;

        if (typeof document !== 'undefined' && typeof datopus !== 'undefined') {
            document.body.dataset.dsFeature = `Page: ${pathname}`;
            datopus('trackView', `Page: ${pathname}`);
        }
        lastPathname = pathname;
    }, [pathname]);

    return null;
};

export default PageTracker;