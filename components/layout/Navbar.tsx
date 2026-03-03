import Link from "next/link";
import Container from "../ui/Container";
import { siteConfig } from "@/data/site";

export default function Navbar() {
    const navLinks = [
        { label: "Home", href: "/" },
        { label: "Experience", href: "/experience" },
        { label: "Projects", href: "/projects" },
        { label: "Contact", href: "/contact" },
    ];

    return (
        <nav className="py-8 sticky top-0 bg-background/80 backdrop-blur-md z-50">
            <Container className="flex items-center justify-between">
                <Link href="/" className="font-bold text-xl tracking-tighter">
                    {siteConfig.name.split(" ")[0].toUpperCase()}
                </Link>
                <ul className="flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className="text-sm font-medium text-secondary hover:text-foreground transition-colors"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </Container>
        </nav>
    );
}
