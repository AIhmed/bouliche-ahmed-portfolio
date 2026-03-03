"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { H1, Text } from "@/components/ui/Typography";
import { siteConfig } from "@/data/site";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <Section className="flex items-center min-h-[calc(100vh-200px)]">
      <Container>
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <H1 className="mb-2">{siteConfig.name}</H1>
            <p className="text-xl md:text-2xl font-medium text-accent mb-6">
              {siteConfig.title}
            </p>
            <Text className="mb-10 text-xl max-w-2xl">
              {siteConfig.description}
            </Text>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Link
              href="/experience"
              className="w-full sm:w-auto px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 group"
            >
              View Experience
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/projects"
              className="w-full sm:w-auto px-8 py-3 border border-border text-foreground font-semibold rounded-lg hover:bg-card transition-colors flex items-center justify-center"
            >
              View Projects
            </Link>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
