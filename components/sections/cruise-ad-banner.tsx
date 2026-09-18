"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, ExternalLink, Ship, X } from "lucide-react";

import { Button } from "@/components/ui/button";

const cruiseOffers = [
  {
    eyebrow: "Disney Cruise Line",
    title: "Make your next holiday a story worth telling.",
    description:
      "Step aboard Disney Adventure for world-class shows, character moments, themed dining, and seven unforgettable areas at sea.",
    cta: "View Disney brochure",
    pdf: "/cruises/Disney%20Cruise%20Line.pdf",
    className: "bg-[#17356e] text-[#fff8df]",
    accent: "bg-[#e9bd62] text-[#17356e]",
  },
  {
    eyebrow: "StarDream Cruises",
    title: "Where the journey becomes the destination.",
    description:
      "Discover Genting Dream: vibrant dining, rooftop adventures, indulgent spaces, and Southeast Asia beyond the horizon.",
    cta: "View StarDream brochure",
    pdf: "/cruises/Star%20Dream%20Cruises.pdf",
    className: "bg-[#087f88] text-white",
    accent: "bg-[#f6d58a] text-[#153448]",
  },
];

export function CruiseAdBanner() {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  useEffect(() => {
    if (!selectedPdf) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedPdf(null);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedPdf]);

  return (
    <section className="relative overflow-hidden  px-6 py-16 text-white sm:px-8 lg:px-12">
      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 border-b border-white/15 pb-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#ff008a]">
              <Ship className="size-4" /> Cruise your way into an unforgettable
              escape
            </p>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-[#ff0000] sm:text-5xl">
              Two iconic cruise experiences. One extraordinary way to see Asia.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#ff008a] sm:text-lg">
              From family magic to all-suite indulgence, choose the kind of
              holiday that makes the sea part of the story.
            </p>
          </div>
          <span className="w-fit border border-[#f6d58a]/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#f6d58a]">
            Featured cruise escapes
          </span>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {cruiseOffers.map((offer) => (
            <article
              key={offer.eyebrow}
              className={`relative overflow-hidden rounded-[2rem] p-7 shadow-[0_24px_70px_rgba(0,0,0,0.22)] sm:p-8 ${offer.className}`}
            >
              <div className="absolute -right-16 -top-20 size-48 rounded-full border-[1.5rem] border-white/10" />
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] opacity-80">
                  {offer.eyebrow}
                </p>
                <h3 className="mt-5 max-w-md text-3xl font-semibold leading-tight sm:text-4xl">
                  {offer.title}
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-7 opacity-85 sm:text-base">
                  {offer.description}
                </p>
                <Button
                  type="button"
                  className={`mt-7 ${offer.accent} hover:brightness-95`}
                  onClick={() => setSelectedPdf(offer.pdf)}
                >
                  {offer.cta} <ArrowUpRight className="size-4" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 text-xs leading-5 text-[#b9cbd4]">
          Cruise itineraries, inclusions, sailing dates, and availability are
          subject to change. Mad Compass can help you compare options and plan
          the wider holiday.
        </p>
      </div>

      {selectedPdf ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#081421]/90 p-3 backdrop-blur-sm sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Cruise brochure"
          onClick={() => setSelectedPdf(null)}
        >
          <div
            className="flex h-[94vh] w-full max-w-6xl flex-col overflow-hidden rounded-[1.5rem] border border-white/15 bg-[#edf3f5] shadow-[0_30px_100px_rgba(0,0,0,0.45)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex shrink-0 items-center justify-between gap-4 border-b border-white/10 bg-[#102238] px-4 py-3 text-white sm:px-6">
              <div className="min-w-0">
                <p className="truncate text-xs font-semibold uppercase tracking-[0.22em] text-[#f6d58a]">
                  Cruise brochure
                </p>
                <p className="mt-1 truncate text-sm text-white/75">
                  Explore your next escape at sea
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <a
                  href={selectedPdf}
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
                  onClick={() => setSelectedPdf(null)}
                  className="inline-flex size-10 items-center justify-center rounded-full bg-[#f6d58a] text-[#102238] transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f6d58a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#102238]"
                >
                  <X className="size-5" />
                </button>
              </div>
            </div>
            <iframe
              src={selectedPdf}
              title="Cruise brochure"
              className="min-h-0 w-full flex-1 bg-[#dce7eb]"
            />
          </div>
        </div>
      ) : null}
    </section>
  );
}
