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
                <Link href="/" className="font-bold text-lg tracking-tight flex items-center gap-2 group">
                    <span className="text-accent font-mono">{">_"}</span>
                    <span className="group-hover:text-accent transition-colors font-mono">{siteConfig.name.split(" ")[0].toLowerCase()}</span>
                </Link>
                <ul className="flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className="text-sm font-mono text-secondary hover:text-accent transition-colors before:content-['./'] before:text-secondary/50 hover:before:text-accent/50"
                            >
                                {link.label.toLowerCase()}
                            </Link>
                        </li>
                    ))}
                </ul>
            </Container>
        </nav>
    );
}
