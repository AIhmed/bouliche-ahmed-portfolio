import { Metadata } from "next";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { H1, Text } from "@/components/ui/Typography";
import { siteConfig } from "@/data/site";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
    title: "Contact",
    description: "Get in touch with Ahmed Bouliche for engineering opportunities or collaborations.",
};

export default function ContactPage() {
    const contactLinks = [
        {
            label: "Email",
            value: siteConfig.links.email,
            href: `mailto:${siteConfig.links.email}`,
            icon: Mail,
        },
        {
            label: "LinkedIn",
            value: "linkedin.com/in/ahmed-bouliche",
            href: siteConfig.links.linkedin,
            icon: Linkedin,
        },
        {
            label: "GitHub",
            value: "github.com/AIhmed",
            href: siteConfig.links.github,
            icon: Github,
        },
        {
            label: "Phone",
            value: siteConfig.links.phone,
            href: `tel:${siteConfig.links.phone.replace(/\s/g, "")}`,
            icon: Phone,
        },
    ];

    return (
        <Section className="flex items-center">
            <Container>
                <div className="max-w-4xl">
                    <H1 className="mb-4 font-mono text-accent"><span className="opacity-50">{"> "}</span>ping contact</H1>
                    <Text className="mb-16 max-w-2xl text-xl">
                        Currently open to new opportunities, technical discussions, and collaborative projects. Feel free to reach out via any of the channels below.
                    </Text>

                    <div className="grid sm:grid-cols-2 gap-8">
                        {contactLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target={link.label !== "Email" && link.label !== "Phone" ? "_blank" : undefined}
                                rel={link.label !== "Email" && link.label !== "Phone" ? "noopener noreferrer" : undefined}
                                className="group p-8 bg-card border border-border rounded-2xl hover:border-accent/40 transition-all hover:translate-y-[-4px]"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-background border border-border rounded-lg group-hover:text-accent transition-colors">
                                        <link.icon className="w-6 h-6" />
                                    </div>
                                    <span className="text-sm font-bold uppercase tracking-widest text-secondary group-hover:text-foreground transition-colors">
                                        {link.label}
                                    </span>
                                </div>
                                <div className="text-xl font-medium text-foreground">
                                    {link.value}
                                </div>
                            </a>
                        ))}
                    </div>

                    <div className="mt-24 p-8 md:p-12 bg-card border border-border/50 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group">
                        <div className="relative z-10">
                            <h3 className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-3">
                                <span className="text-accent font-mono">{">_"}</span>
                                Need a senior perspective?
                            </h3>
                            <p className="text-secondary font-mono text-sm mt-4">Let&apos;s discuss infrastructure, scaling, or technical architecture.</p>
                        </div>
                        <a
                            href={`mailto:${siteConfig.links.email}`}
                            className="relative z-10 w-full md:w-auto px-10 py-4 bg-accent text-background font-bold rounded-xl hover:bg-accent/90 transition-all text-center tracking-tight font-mono hover:-translate-y-1"
                        >
                            ./start_conversation.sh
                        </a>
                        {/* Decorative background ping */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-colors pointer-events-none"></div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
