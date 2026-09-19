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
  "Slow, meaningful escapes with the right balance of comfort, discovery, and ease",
  "Thoughtful routing for hill stations, heritage stays, coastlines, and wellness-led retreats",
  "A specialist helps shape the trip around your budget, travel style, and the pace you actually want",
];

const journeys = [
  // {
  //   title: "Goa beaches & coastal charm",
  //   subtitle: "Golden shores, Portuguese heritage, and vibrant beach life",
  //   description:
  //     "Relax with scenic beach stays, sunset cruises, local seafood, and seamless private transfers.",
  //   badge: "Coastal escape",
  //   image: "/images/goa.jpg",
  //   href: "/contact",
  //   price: "",
  // },
  // {
  //   title: "Darjeeling & Sikkim pause",
  //   subtitle: "Cloud forests, monastery views, and warm local hospitality",
  //   description:
  //     "Ideal for couples or families who want altitude, scenery, and stillness.",
  //   badge: "Mountain escape",
  //   image: "/images/darjeeling.jpg",
  //   href: "/contact",
  //   price: "",
  // },
  {
    title: "Rajasthan heritage circuit",
    subtitle: "Palaces, forts, and private experiences between cities",
    description:
      "Travel between grand palaces, historic forts, and vibrant old cities with private experiences, elegant stays, and an unhurried rhythm throughout.",
    badge: "Culture-led",
    image: "/images/rajasthan.jpg",
    href: "/contact",
    price: "50,000",
    brochureHref: "/packages/Mad_Compass_Rajasthan_Heritage_Circuit.pdf",
  },
  {
    title: "Meghalaya, where the hills breathe",
    subtitle: "Waterfalls, living root bridges, and misty green valleys",
    description:
      "Explore Shillong, Cherrapunji, and quiet village landscapes through a refreshing journey shaped around nature, culture, and unhurried discovery.",
    badge: "Hill escape",
    image: "/images/meghalaya.jpg",
    href: "/contact",
    price: "30,000",
    brochureHref:
      "/packages/Mad%20Compass%20Meghalaya%20Signature%20Itinerary.pdf",
  },
  {
    title: "Kashmir, the great valley escape",
    subtitle: "Alpine lakes, mountain meadows, and timeless hospitality",
    description:
      "Sail across Dal Lake, wander through Srinagar, and discover Gulmarg and Pahalgam with scenic stays and a carefully paced itinerary.",
    badge: "Valley retreat",
    image: "/images/kashmir.jpg",
    href: "/contact",
    price: "33,000",
    brochureHref:
      "/packages/Mad%20Compass%20Kashmir%20Signature%20Itinerary.pdf",
  },
  {
    title: "Andaman Islands, at an easy island pace",
    subtitle: "Turquoise waters, quiet beaches, and reef-side adventures",
    description:
      "Combine beachside stillness with island exploration, snorkelling, and clear-water escapes across one of India's most beautiful coastlines.",
    badge: "Island escape",
    image: "/images/andaman.jpg",
    href: "/contact",
    price: "30,000",
    brochureHref:
      "/packages/Mad%20Compass%20Andaman%20Signature%20Itinerary.pdf",
  },
];

export const metadata: Metadata = {
  title: "Domestic Travel | Mad Compass",
  description:
    "Explore bespoke domestic travel ideas across India, from slow hill retreats to heritage-rich journeys.",
};

export default function DomesticPage() {
  return (
    <main className="flex-1 bg-[#fffdfc]">
      <PageHero
        eyebrow="Domestic Travel"
        title="India, shaped around the pace you actually want."
        description="Whether you are dreaming of a quiet mountain reset, a heritage-led circuit, or a celebratory holiday with friends and family, we shape it around your preferences rather than a preset package."
        primaryCta={{ label: "Start planning", href: "/contact" }}
        secondaryCta={{ label: "Talk to a specialist", href: "/contact" }}
        image="/images/domestic.jpg"
        imageAlt="An elegant domestic holiday in Kerala"
      />

      <Reveal className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#c20b0b]">
              What we plan
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#17120f] sm:text-4xl">
              Bespoke domestic journeys, built around your people and your pace.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#655b4f]">
              We are especially good at shaping holiday experiences that feel
              unhurried and thoughtful, with strong local knowledge and a clear
              sense of comfort from the first conversation onward.
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
      </Reveal>

      <Reveal className="mx-auto max-w-7xl px-6 pb-24 sm:px-8 lg:px-12">
        <div className="max-w-3xl rounded-4xl border border-[#efe2dc] bg-white p-8 shadow-[0_24px_80px_rgba(17,17,17,0.05)]">
          <TestimonialCard
            name={testimonials[0].name}
            location={testimonials[0].location}
            quote={testimonials[0].quote}
            trip={testimonials[0].trip}
          />
        </div>
      </Reveal>
    </main>
  );
}
