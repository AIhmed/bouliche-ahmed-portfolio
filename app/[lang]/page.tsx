import { getDictionary, Locale } from "@/lib/dictionary";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { siteConfig } from "@/data/site";
import * as motion from "framer-motion/client";

export default async function Home({
  params,
}: Readonly<{
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <Section className="flex items-center min-h-[calc(100vh-200px)]">
      <Container>
        <div className="max-w-3xl">
          <div className="bg-card/80 border border-border/60 rounded-xl p-6 shadow-2xl backdrop-blur-md relative overflow-hidden group">
            {/* Window controls */}
            <div className="flex gap-2 mb-6 border-b border-border/40 pb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>

            <div className="space-y-5 text-sm md:text-base font-mono">
              <div className="flex flex-wrap gap-2 text-secondary">
                <span className="text-accent">{dict.home.welcomePath}</span>
                <span className="text-foreground/50">$</span>
                <span className="text-foreground">{dict.home.whoami}</span>
              </div>

              <div className="text-foreground pl-4 border-l-[3px] border-accent/30 py-2">
                <div className="flex flex-col-reverse sm:flex-row gap-6 items-start sm:items-center">
                  <div className="flex-1 space-y-3">
                    <p><span className="text-accent mr-2">{dict.home.nameLabel}</span>{siteConfig.name}</p>
                    <p><span className="text-accent mr-2">{dict.home.roleLabel}</span>{dict.home.role}</p>
                    <p className="text-secondary/90 mt-4 leading-relaxed max-w-2xl">
                      {dict.home.description}
                    </p>
                  </div>
                  <div className="shrink-0 relative w-24 h-24 sm:w-32 sm:h-32 rounded-lg overflow-hidden border border-border/50 shadow-xl">
                    <Image 
                      src="/boulicheahmed.png" 
                      alt={siteConfig.name} 
                      fill 
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-2 text-secondary mt-8">
                <span className="text-accent">{dict.home.welcomePath}</span>
                <span className="text-foreground/50">$</span>
                <span className="animate-pulse w-2.5 h-5 bg-accent inline-block align-middle"></span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 font-mono">
            <Link
              href={`/${lang}/experience`}
              className="w-full sm:w-auto px-8 py-3 bg-accent text-background font-bold rounded hover:bg-accent/90 transition-colors flex items-center justify-center gap-2 group"
            >
              {dict.home.experienceLink}
            </Link>
            <Link
              href={`/${lang}/projects`}
              className="w-full sm:w-auto px-8 py-3 border border-border text-secondary hover:text-foreground font-medium rounded hover:bg-card transition-colors flex items-center justify-center group"
            >
              {dict.home.projectsLink}
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
