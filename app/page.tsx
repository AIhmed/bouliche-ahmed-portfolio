"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { siteConfig } from "@/data/site";

export default function Home() {
  return (
    <Section className="flex items-center min-h-[calc(100vh-200px)]">
      <Container>
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-card/80 border border-border/60 rounded-xl p-6 shadow-2xl backdrop-blur-md relative overflow-hidden group"
          >
            {/* Window controls */}
            <div className="flex gap-2 mb-6 border-b border-border/40 pb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>

            <div className="space-y-5 text-sm md:text-base font-mono">
              <div className="flex flex-wrap gap-2 text-secondary">
                <span className="text-accent">~/portfolio/{siteConfig.name.split(" ")[0].toLowerCase()}</span>
                <span className="text-foreground/50">$</span>
                <span className="text-foreground">./whoami.sh</span>
              </div>

              <div className="text-foreground pl-4 border-l-[3px] border-accent/30 py-2">
                <div className="flex flex-col-reverse sm:flex-row gap-6 items-start sm:items-center">
                  <div className="flex-1 space-y-3">
                    <p><span className="text-accent mr-2">Name:</span>{siteConfig.name}</p>
                    <p><span className="text-accent mr-2">Role:</span>{siteConfig.title}</p>
                    <p className="text-secondary/90 mt-4 leading-relaxed max-w-2xl">
                      {siteConfig.description}
                    </p>
                  </div>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="shrink-0 relative w-24 h-24 sm:w-32 sm:h-32 rounded-lg overflow-hidden border border-border/50 shadow-xl"
                  >
                    <Image 
                      src="/boulicheahmed.png" 
                      alt={siteConfig.name} 
                      fill 
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                </div>
              </div>

              <div className="flex gap-2 text-secondary mt-8">
                <span className="text-accent">~/portfolio/{siteConfig.name.split(" ")[0].toLowerCase()}</span>
                <span className="text-foreground/50">$</span>
                <span className="animate-pulse w-2.5 h-5 bg-accent inline-block align-middle"></span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center gap-4 mt-8 font-mono"
          >
            <Link
              href="/experience"
              className="w-full sm:w-auto px-8 py-3 bg-accent text-background font-bold rounded hover:bg-accent/90 transition-colors flex items-center justify-center gap-2 group"
            >
              {`> ./experience`}
            </Link>
            <Link
              href="/projects"
              className="w-full sm:w-auto px-8 py-3 border border-border text-secondary hover:text-foreground font-medium rounded hover:bg-card transition-colors flex items-center justify-center group"
            >
              ls -la projects/
            </Link>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
