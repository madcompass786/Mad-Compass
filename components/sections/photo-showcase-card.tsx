"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, ExternalLink, X } from "lucide-react";
import { motion } from "framer-motion";

type PhotoShowcaseCardProps = {
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  image: string;
  href: string;
  price?: string;
  brochureHref?: string;
};

export function PhotoShowcaseCard({
  title,
  subtitle,
  description,
  badge,
  image,
  href,
  price = "",
  brochureHref,
}: PhotoShowcaseCardProps) {
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);

  useEffect(() => {
    if (!isBrochureOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsBrochureOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isBrochureOpen]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45 }}
        className="h-full"
      >
        <article className="group flex h-full flex-col overflow-hidden rounded-4xl border border-[#ece7e4] bg-[#111111] text-white shadow-[0_24px_90px_rgba(17,17,17,0.16)] transition duration-300 hover:-translate-y-1">
          <Link href={href} aria-label={`Learn more about ${title}`}>
            <div className="relative h-72 overflow-hidden">
              <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.3em] text-white/85">
                  {badge}
                </span>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/75">
                  {subtitle}
                </p>
              </div>
            </div>
          </Link>
          <div className="flex flex-1 flex-col space-y-4 bg-[#9D0202] p-6">
            <p className="text-sm leading-7 text-[#d7c6b3]">{description}</p>
            <div className="mt-auto flex items-end justify-between gap-4 pt-2">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-white/65">
                  Starting from
                </p>
                <p className="mt-1 text-xl font-semibold tracking-tight text-white">
                  {price ? `INR ${price}` : "On request"}
                </p>
                <p className="mt-1 text-xs text-white/65">per person</p>
              </div>
              {brochureHref ? (
                <button
                  type="button"
                  onClick={() => setIsBrochureOpen(true)}
                  className="inline-flex shrink-0 items-center gap-2 text-right text-sm font-semibold text-white transition hover:text-[#f6b4aa]"
                >
                  View Brochure
                  <span aria-hidden="true">→</span>
                </button>
              ) : null}
            </div>
          </div>
        </article>
      </motion.div>

      {isBrochureOpen && brochureHref ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#081421]/90 p-3 backdrop-blur-sm sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} brochure`}
          onClick={() => setIsBrochureOpen(false)}
        >
          <div
            className="flex h-[94vh] w-full max-w-6xl flex-col overflow-hidden rounded-[1.5rem] border border-white/15 bg-[#edf3f5] shadow-[0_30px_100px_rgba(0,0,0,0.45)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex shrink-0 items-center justify-between gap-4 border-b border-white/10 bg-[#102238] px-4 py-3 text-white sm:px-6">
              <div className="min-w-0">
                <p className="truncate text-xs font-semibold uppercase tracking-[0.22em] text-[#f6d58a]">
                  {title}
                </p>
                <p className="mt-1 truncate text-sm text-white/75">
                  Explore your next journey
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <a
                  href={brochureHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 text-xs font-semibold text-white transition hover:border-[#f6d58a] hover:bg-white/15"
                >
                  <ExternalLink className="size-4" />
                  <span className="hidden sm:inline">Open PDF</span>
                </a>
                <button
                  type="button"
                  aria-label="Close brochure"
                  onClick={() => setIsBrochureOpen(false)}
                  className="inline-flex size-10 items-center justify-center rounded-full bg-[#f6d58a] text-[#102238] transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f6d58a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#102238]"
                >
                  <X className="size-5" />
                </button>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-center bg-[radial-gradient(circle_at_top,#ffffff,#dce7eb)] p-8 text-center lg:hidden">
              <div className="flex size-20 items-center justify-center rounded-full bg-[#102238] text-[#f6d58a] shadow-[0_14px_30px_rgba(16,34,56,0.2)]">
                <BookOpen className="size-9" />
              </div>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#a57a2d]">
                {title} brochure
              </p>
              <h3 className="mt-3 max-w-sm text-2xl font-semibold text-[#102238]">
                Your journey starts here.
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-6 text-[#536572]">
                Read the full brochure in your phone&apos;s optimized PDF viewer
                for a smoother, more comfortable experience.
              </p>
              <a
                href={brochureHref}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex h-12 items-center gap-2 rounded-full bg-[#102238] px-6 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(16,34,56,0.22)] transition hover:bg-[#1a3b60]"
              >
                <BookOpen className="size-4" />
                Read brochure
              </a>
              <p className="mt-4 text-xs text-[#71828b]">
                Opens securely in a new browser tab
              </p>
            </div>
            <iframe
              src={brochureHref}
              title={`${title} brochure`}
              className="hidden min-h-0 w-full flex-1 bg-[#dce7eb] lg:block"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
