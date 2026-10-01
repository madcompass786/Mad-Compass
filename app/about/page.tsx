import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { InstagramSection } from "@/components/sections/instagram-section";
import { PageHero } from "@/components/sections/page-hero";
import { Reveal } from "@/components/sections/reveal";
import { TestimonialSection } from "@/components/sections/testimonial-section";
import { siteContent } from "@/data/content";

import { TrackedWhatsAppLink } from "@/components/sections/tracked-whatsapp-link";
// testimonials data is used inside the TestimonialSection component

const values = [
  "We begin by listening closely and shaping the trip around your travel style, budget, and rhythm.",
  "We do not push fixed itineraries. We build a personal holiday and refine it with you until it feels effortless.",
  "Every enquiry is guided by a specialist who can turn a first conversation into a considered plan.",
];

const team = [
  {
    name: "Tamraparna Kundu",
    role: "Founder & CEO",
    bio: "Luxury & Off beat Travel Consultant. Brings a calm, practical oriented approach to journeys that ultimately feel relaxed, refined and truly personal.",
  },
  {
    name: "Santa Kundu",
    role: "Co-Founder",
    bio: "Hitting 60 and still climbing! Our core motivator behind perfecting above and beyond 6K Expeditons. Merging traditional/indigenous culture and travel together with her expertise and experience in both.",
  },
  {
    name: "Mridul Rawat",
    role: "COO",
    bio: "Bringing Calm to the chaos behind the scenes. Engineer with a nomad heart. He ties all loose ends with his attention to detail, discipline and dimples!",
  },
];

export const metadata: Metadata = {
  title: "Who We Are | Mad Compass",
  description:
    "Learn how Mad Compass builds tailored holidays with expert guidance, thoughtful planning, and a human-first approach.",
};

export default function AboutPage() {
  return (
    <main className="flex-1 bg-[#fffdfc]">
      <PageHero
        eyebrow="Who We Are"
        title="Travel planning that feels calm, considered, and quietly luxurious."
        description="Mad Compass creates holidays around the people travelling, the pace they want, and the kind of memories they hope to make — with warmth, clarity, and real attention to detail."
        primaryCta={{ label: "Start your enquiry", href: "/contact" }}
        secondaryCta={{ label: "WhatsApp us", href: siteContent.whatsapp }}
        image="/images/about.jpg"
        imageAlt="A bespoke travel experience in Kerala"
      />

      <Reveal className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#c20b0b]">
              Our approach
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#17120f] sm:text-4xl">
              A holiday begins with a conversation, not a catalogue.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#655b4f]">
              We start by understanding how you like to travel, what matters to
              you most, and what kind of experience would feel right. From
              there, we shape a recommendation and refine it with you until it
              feels effortless.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                className="bg-[#c20b0b] text-white shadow-[0_16px_35px_rgba(194,11,11,0.22)] hover:bg-[#a70a0a] hover:shadow-[0_20px_42px_rgba(194,11,11,0.3)]"
              >
                <Link href="/contact">
                  Start your enquiry <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-[#efe2dc] bg-green-400 text-[#17120f] shadow-[0_10px_24px_rgba(17,17,17,0.06)] hover:border-[#c20b0b] hover:text-[#c20b0b] hover:bg-[#fff7f4] hover:shadow-[0_14px_30px_rgba(17,17,17,0.08)]"
              >
                <TrackedWhatsAppLink
                  href={siteContent.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle className="size-4" /> WhatsApp us
                </TrackedWhatsAppLink>
              </Button>
            </div>
          </div>
          <div className="rounded-4xl border border-[#efe2dc] bg-[#fffdfc] p-8 shadow-[0_24px_80px_rgba(20,15,10,0.05)]">
            <h3 className="text-2xl font-semibold text-[#17120f]">
              What defines us
            </h3>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-[#5d4944]">
              {values.map((value) => (
                <li key={value} className="flex items-start gap-3">
                  <span className="mt-1 size-2 rounded-full bg-[#c20b0b]" />
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>

      <Reveal className="mx-auto max-w-7xl px-6 pb-20 sm:px-8 lg:px-12">
        <div className="rounded-4xl border border-[#efe2dc] bg-white p-8 shadow-[0_24px_80px_rgba(17,17,17,0.06)] sm:p-10">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-[#c20b0b]">
              Our people
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#17120f] sm:text-4xl">
              A small team with a big attention to detail.
            </h2>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {team.map((person) => (
              <div
                key={person.name}
                className="rounded-[1.75rem] border border-[#efe2dc] bg-[#fffdfc] p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#c20b0b] text-sm font-semibold text-white">
                  {person.name.charAt(0)}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-[#17120f]">
                  {person.name}
                </h3>
                <p className="mt-1 text-sm font-medium uppercase tracking-[0.25em] text-[#c20b0b]">
                  {person.role}
                </p>
                <p className="mt-3 text-sm leading-7 text-[#655b4f]">
                  {person.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <InstagramSection />

      <TestimonialSection />

      <Reveal className="mx-auto max-w-7xl px-6 pb-24 sm:px-8 lg:px-12">
        <div className="rounded-4xl border border-[#efe2dc] bg-[#fff8f5] p-8 text-center sm:p-10">
          <p className="text-sm uppercase tracking-[0.3em] text-[#c20b0b]">
            Start your journey
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[#17120f] sm:text-4xl">
            Tell us what you are dreaming of and we will shape the first step
            together.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button
              asChild
              className="bg-[#c20b0b] text-white hover:bg-[#a70a0a]"
            >
              <Link href="/contact">Start your enquiry</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-[#efe2dc] bg-green-400 text-[#17120f]"
            >
              <TrackedWhatsAppLink
                href={siteContent.whatsapp}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp us
              </TrackedWhatsAppLink>
            </Button>
          </div>
        </div>
      </Reveal>
    </main>
  );
}
