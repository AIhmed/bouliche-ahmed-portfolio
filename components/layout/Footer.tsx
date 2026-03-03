import Container from "../ui/Container";
import { siteConfig } from "@/data/site";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-12 border-t border-border mt-auto">
            <Container className="flex flex-col md:flex-row items-center justify-between gap-6">
                <p className="text-sm text-secondary">
                    © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
                </p>
                <div className="flex items-center space-x-6">
                    <a
                        href={siteConfig.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary hover:text-foreground transition-colors"
                    >
                        <Github className="w-5 h-5" />
                    </a>
                    <a
                        href={siteConfig.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary hover:text-foreground transition-colors"
                    >
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                        href={`mailto:${siteConfig.links.email}`}
                        className="text-secondary hover:text-foreground transition-colors"
                    >
                        <Mail className="w-5 h-5" />
                    </a>
                </div>
            </Container>
        </footer>
    );
}
