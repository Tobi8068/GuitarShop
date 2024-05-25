'use client'
//dark mode provider
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'next-themes';

export function Providers({ children }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        // Return a loading spinner or a fallback UI if necessary
        return <>{children}</>; 
    }

    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
        </ThemeProvider>
    );
}
