import { Metadata } from "next";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { H1, H3, Text } from "@/components/ui/Typography";
import { experiences } from "@/data/experience";

export const metadata: Metadata = {
    title: "Experience",
    description: "Professional experience of Ahmed Bouliche, Fullstack & Cloud Engineer.",
};

export default function ExperiencePage() {
    return (
        <Section>
            <Container>
                <div className="max-w-4xl">
                    <H1 className="mb-4">Experience</H1>
                    <Text className="mb-16 max-w-2xl">
                        A track record of building scalable infrastructure, leading engineering teams, and delivering high-performance fullstack applications.
                    </Text>

                    <div className="space-y-20">
                        {experiences.map((exp, index) => (
                            <div key={index} className="relative pl-8 md:pl-0">
                                {/* Timeline line for mobile */}
                                <div className="absolute left-0 top-0 bottom-0 w-px bg-border md:hidden" />

                                <div className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-12">
                                    <div className="text-sm font-medium text-secondary uppercase tracking-[0.2em]">
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
                                            {exp.description.map((bullet, i) => (
                                                <li key={i} className="flex gap-4 group">
                                                    <span className="text-accent shrink-0 mt-1.5">—</span>
                                                    <span className="text-secondary leading-relaxed group-hover:text-foreground transition-colors">
                                                        {bullet}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="flex flex-wrap gap-2">
                                            {exp.skills.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="px-3 py-1 bg-card border border-border rounded-full text-xs font-medium text-secondary"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
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
