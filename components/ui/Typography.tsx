import { cn } from "@/lib/utils";

interface HeadingProps {
    children: React.ReactNode;
    className?: string;
}

export function H1({ children, className }: HeadingProps) {
    return (
        <h1 className={cn("text-4xl md:text-6xl font-bold tracking-tight text-foreground", className)}>
            {children}
        </h1>
    );
}

export function H2({ children, className }: HeadingProps) {
    return (
        <h2 className={cn("text-2xl md:text-3xl font-semibold tracking-tight text-foreground", className)}>
            {children}
        </h2>
    );
}

export function H3({ children, className }: HeadingProps) {
    return (
        <h3 className={cn("text-xl font-semibold text-foreground", className)}>
            {children}
        </h3>
    );
}

export function Text({ children, className }: HeadingProps) {
    return (
        <p className={cn("text-lg text-secondary leading-relaxed", className)}>
            {children}
        </p>
    );
}
