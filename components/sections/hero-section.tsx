"use client";

import Link from "next/link";
import { ArrowRight, Compass, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { siteContent } from "@/data/content";
import { CONVERSION_LABELS, trackConversion } from "@/lib/gtag";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#111111] text-[#f8efe7]">
      <div className="absolute inset-0 bg-black/75" />
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-24 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#f8efe7]/20 bg-[#f8efe7]/10 px-4 py-2 text-sm uppercase tracking-[0.3em] text-[#f4b1a8]">
            <Compass className="size-4" />
            {siteContent.heroEyebrow}
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-[#f8efe7] sm:text-5xl lg:text-7xl">
            {siteContent.heroHeadline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#e7dccc] sm:text-xl">
            {siteContent.heroSubtext}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-[#c20b0b] shadow-[0_16px_35px_rgba(194,11,11,0.22)] hover:bg-[#a70a0a] hover:shadow-[0_20px_42px_rgba(194,11,11,0.3)]"
            >
              <Link href="/contact">
                Plan My Journey <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link
                href={siteContent.whatsapp}
                target="_blank"
                rel="noreferrer"
                onClick={(event) => {
                  if (event.detail <= 1) {
                    trackConversion(CONVERSION_LABELS.whatsapp);
                  }
                }}
              >
                <MessageCircle className="size-4" /> WhatsApp Now
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
