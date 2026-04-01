"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function LanguageSwitcher({ currentLang }: { currentLang: string }) {
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, setIsPending] = useState(false);

    const toggleLanguage = () => {
        setIsPending(true);
        const nextLang = currentLang === 'en' ? 'fr' : 'en';
        // Replace the current language in the pathname
        // e.g. /en/about -> /fr/about
        const segments = pathname.split('/');
        segments[1] = nextLang;
        const newPath = segments.join('/');
        
        router.push(newPath);
    };

    return (
        <button
            onClick={toggleLanguage}
            disabled={isPending}
            className="text-sm font-mono px-3 py-1 bg-card/50 border border-border/50 rounded-full hover:bg-accent/20 hover:text-accent transition-colors"
        >
            {currentLang === 'en' ? 'FR' : 'EN'}
        </button>
    );
}
