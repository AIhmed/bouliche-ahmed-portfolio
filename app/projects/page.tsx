import { Metadata } from "next";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { H1, H2, Text } from "@/components/ui/Typography";
import { projects } from "@/data/projects";
import { ExternalLink, Layers, ShieldCheck, Zap } from "lucide-react";

export const metadata: Metadata = {
    title: "Projects",
    description: "Technical projects and architecture summaries by Ahmed Bouliche.",
};

export default function ProjectsPage() {
    return (
        <Section>
            <Container>
                <div className="max-w-5xl">
                    <H1 className="mb-4">Projects</H1>
                    <Text className="mb-16 max-w-2xl">
                        A selection of technical projects focusing on infrastructure automation, cloud-native scalability, and AI integration.
                    </Text>

                    <div className="grid gap-12">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="group relative bg-card border border-border rounded-2xl p-8 md:p-12 hover:border-accent/40 transition-colors"
                            >
                                <div className="grid lg:grid-cols-[1fr_350px] gap-12">
                                    <div>
                                        <H2 className="text-3xl mb-4 group-hover:text-accent transition-colors">
                                            {project.title}
                                        </H2>
                                        <Text className="text-lg mb-8 leading-relaxed">
                                            {project.description}
                                        </Text>

                                        <div className="space-y-8">
                                            <div>
                                                <div className="flex items-center gap-2 mb-3 text-foreground font-semibold">
                                                    <Layers className="w-5 h-5 text-accent" />
                                                    <span>Architecture Summary</span>
                                                </div>
                                                <p className="text-secondary leading-relaxed">
                                                    {project.architecture}
                                                </p>
                                            </div>

                                            <div className="grid sm:grid-cols-2 gap-8">
                                                <div>
                                                    <div className="flex items-center gap-2 mb-3 text-foreground font-semibold">
                                                        <Zap className="w-5 h-5 text-accent" />
                                                        <span>Challenges Solved</span>
                                                    </div>
                                                    <ul className="space-y-2 text-sm text-secondary">
                                                        {project.challenges.map((challenge, i) => (
                                                            <li key={i} className="flex gap-2">
                                                                <span className="text-accent">•</span>
                                                                {challenge}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div>
                                                    <div className="flex items-center gap-2 mb-3 text-foreground font-semibold">
                                                        <ShieldCheck className="w-5 h-5 text-accent" />
                                                        <span>Key Decisions</span>
                                                    </div>
                                                    <ul className="space-y-2 text-sm text-secondary">
                                                        {project.decisions.map((decision, i) => (
                                                            <li key={i} className="flex gap-2">
                                                                <span className="text-accent">•</span>
                                                                {decision}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="lg:border-l lg:border-border lg:pl-12 flex flex-col justify-start">
                                        <div className="mb-8">
                                            <h4 className="text-xs uppercase tracking-widest text-secondary font-bold mb-4">Tech Stack</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {project.techStack.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="px-3 py-1 bg-background border border-border rounded-md text-xs font-medium text-foreground"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="mt-auto">
                                            <button className="flex items-center gap-2 text-sm font-semibold text-accent hover:text-white transition-colors">
                                                Case Study (Pending)
                                                <ExternalLink className="w-4 h-4" />
                                            </button>
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
