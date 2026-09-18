"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  image: string;
  imageAlt: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  image,
  imageAlt,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative mx-auto flex min-h-170 max-w-7xl flex-col justify-end px-6 pb-20 pt-16 sm:px-8 lg:px-12 lg:pb-24">
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 70vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="relative z-10 max-w-3xl rounded-4xl border border-white/20 bg-[#111111]/70 p-8 text-white shadow-[0_40px_120px_rgba(0,0,0,0.25)] sm:p-10"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-[#f8efe7] opacity-90">
            {eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-base leading-8 text-[#f0e4dc] sm:text-lg">
            {description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              className="bg-[#c20b0b] shadow-[0_16px_35px_rgba(194,11,11,0.22)] hover:bg-[#a70a0a] hover:shadow-[0_20px_42px_rgba(194,11,11,0.3)]"
            >
              <Link href={primaryCta.href}>{primaryCta.label}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-none bg-green-400 hover:bg-white hover:border-black hover:border-2"
            >
              <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
