import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/sections/reveal";

import { Button } from "@/components/ui/button";
import { EnquiryForm } from "@/components/sections/enquiry-form";
import { PageHero } from "@/components/sections/page-hero";
import { PhotoShowcaseCard } from "@/components/sections/photo-showcase-card";
import { TestimonialCard } from "@/components/sections/testimonial-card";
import { testimonials } from "@/data/testimonials";

const highlights = [
  "Iconic Nepal trekking routes including EBC, Everest Peaking, and Annapurna Circuit",
  "Specialist-led support with experienced local guides, permits, and acclimatisation planning built in",
  "Pacing and difficulty tailored to your fitness level and goals — no fixed group schedules",
];

const journeys = [
  {
    title: "Everest Base Camp",
    subtitle: "Standing at 5,364m — where every step earns the view",
    description:
      "A classic 12–14 day EBC trek planned around your fitness and pace. Permits, accommodation, guides, and acclimatisation stops all handled.",
    badge: "TREKKING",
    image: "/images/everest.jpg",
    href: "/contact",
    unavailable: true,
  },
  {
    title: "Everest Peaking",
    subtitle: "For those ready to go beyond base camp",
    description:
      "Specialist-planned summit attempts with experienced climbing support and safety-first logistics from Kathmandu to the peak.",
    badge: "SUMMIT",
    image: "/images/everest-peak.jpg",
    href: "/contact",
    unavailable: true,
  },
  {
    title: "Annapurna Circuit",
    subtitle:
      "Nepal's most diverse trek — valleys, passes, and ancient villages",
    description:
      "A 10–16 day circuit through dramatic landscape variety. Tailored entry and exit points based on your available time and preferred intensity.",
    badge: "CIRCUIT",
    image: "/images/annapurna.jpg",
    href: "/contact",
    unavailable: true,
  },
];

export const metadata: Metadata = {
  title: "Expeditions — Nepal Trekking & Peaks | Mad Compass",
  description:
    "Plan your Nepal expedition with Mad Compass — Everest Base Camp, Everest Peaking, Annapurna Circuit and more, specialist-led and fully tailored to your pace.",
};

export default function ExpeditionsPage() {
  return (
    <main className="flex-1 bg-[#fffdfc]">
      <PageHero
        eyebrow="Expeditions"
        title="Nepal's greatest trails, planned with precision and care."
        description="From Everest Base Camp to the Annapurna Circuit, we plan Nepal expeditions with specialist-led support, the right pacing, and logistics handled end to end — so you can focus on the journey."
        primaryCta={{ label: "Start planning", href: "/contact" }}
        secondaryCta={{ label: "Talk to a specialist", href: "/contact" }}
        image="/images/expeditions.jpg"
        imageAlt="An expedition-led travel experience in the Himalayas"
      />

      <Reveal className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#c20b0b]">
              What we plan
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#17120f] sm:text-4xl">
              Specialist-led journeys for travellers who want more than a
              checklist.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#655b4f]">
              We blend comfort, safety, and destination expertise so the
              experience feels ambitious without becoming overwhelming.
            </p>
            <div className="mt-8 space-y-3 rounded-4xl border border-[#efe2dc] bg-[#fffdfc] p-6">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 text-sm leading-7 text-[#5d4944]"
                >
                  <span className="mt-1 size-2 rounded-full bg-[#c20b0b]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                className="bg-[#c20b0b] text-white shadow-[0_16px_35px_rgba(194,11,11,0.22)] hover:bg-[#a70a0a] hover:shadow-[0_20px_42px_rgba(194,11,11,0.3)]"
              >
                <Link href="/contact">
                  Start planning <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-[#efe2dc] bg-white/95 text-[#17120f] shadow-[0_10px_24px_rgba(17,17,17,0.06)] hover:border-[#c20b0b] hover:text-[#c20b0b] hover:bg-[#fff7f4] hover:shadow-[0_14px_30px_rgba(17,17,17,0.08)]"
              >
                <Link href="/contact">Talk to a specialist</Link>
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <EnquiryForm />
          </div>
        </div>
      </Reveal>

      <Reveal className="mx-auto max-w-7xl px-6 pb-20 sm:px-8 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-3">
          {journeys.map((journey) => (
            <PhotoShowcaseCard key={journey.title} {...journey} />
          ))}
        </div>
        <p className="mt-6 text-sm leading-7 text-[#786d64]">
          More Expedition routes coming soon.{" "}
          <Link
            href="/contact"
            className="font-medium text-[#c20b0b] transition hover:text-[#a70a0a]"
          >
            Enquire
          </Link>{" "}
          directly and a specialist will share what&apos;s currently available.
        </p>
      </Reveal>

      <Reveal className="mx-auto max-w-7xl px-6 pb-24 sm:px-8 lg:px-12">
        <div className="max-w-3xl rounded-4xl border border-[#efe2dc] bg-white p-8 shadow-[0_24px_80px_rgba(17,17,17,0.05)]">
          <TestimonialCard
            name={testimonials[1].name}
            location={testimonials[1].location}
            quote={testimonials[1].quote}
            trip={testimonials[1].trip}
          />
        </div>
      </Reveal>
    </main>
  );
}
