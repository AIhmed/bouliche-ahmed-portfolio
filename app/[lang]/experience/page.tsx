import { Metadata } from "next";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { H1, H3, Text } from "@/components/ui/Typography";
import { getDictionary, Locale } from "@/lib/dictionary";
import { ExternalLink } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    return {
        title: "Experience",
    };
}

export default async function ExperiencePage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang as Locale);
    
    return (
        <Section>
            <Container>
                <div className="max-w-4xl">
                    <H1 className="mb-4 font-mono text-accent"><span className="opacity-50">{"> "}</span>{dict.experience.title}</H1>
                    <Text className="mb-16 max-w-2xl">
                        {dict.experience.subtitle}
                    </Text>

                    <div className="space-y-20">
                        {dict.experience.items.map((exp: any, index: number) => (
                            <div key={index} className="relative pl-8 md:pl-0">
                                {/* Timeline line for mobile */}
                                <div className="absolute left-0 top-0 bottom-0 w-px bg-border md:hidden" />

                                <div className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-12">
                                    <div className="text-sm font-mono text-secondary uppercase tracking-[0.2em]">
                                        {exp.period}
                                    </div>
                                    <div>
                                        <div className="flex flex-col mb-6">
                                            <H3 className="text-2xl mb-1">{exp.role}</H3>
                                            <div className="text-accent font-medium text-lg">
                                                {exp.company}
                                            </div>
                                        </div>

                                        <ul className="space-y-4 mb-8">
                                            {exp.description.map((bullet: string, i: number) => (
                                                <li key={i} className="flex gap-4 group">
                                                    <span className="text-accent shrink-0 mt-1.5">—</span>
                                                    <span className="text-secondary leading-relaxed group-hover:text-foreground transition-colors">
                                                        {bullet}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {exp.skills.map((skill: string) => (
                                                <span
                                                    key={skill}
                                                    className="px-3 py-1 bg-card/50 border border-border/50 rounded-full text-xs font-mono text-accent"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                        
                                        {exp.referral && (
                                            <div className="inline-flex items-center gap-2 px-4 py-2 border border-accent/30 rounded-lg bg-accent/5">
                                                <span className="text-sm text-secondary font-mono mr-2">{dict.experience.referenceLabel}:</span>
                                                <a href={exp.referral.link} target="_blank" rel="noreferrer" className="text-sm font-semibold text-foreground hover:text-accent transition-colors flex items-center gap-2">
                                                    {exp.referral.name}
                                                    <ExternalLink className="w-3.5 h-3.5" />
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
}
