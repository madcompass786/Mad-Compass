import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CruiseAdBanner } from "@/components/sections/cruise-ad-banner";
import { EnquiryForm } from "@/components/sections/enquiry-form";
import { PageHero } from "@/components/sections/page-hero";
import { PhotoShowcaseCard } from "@/components/sections/photo-showcase-card";
import { Reveal } from "@/components/sections/reveal";
import { TestimonialCard } from "@/components/sections/testimonial-card";
import { testimonials } from "@/data/testimonials";

const highlights = [
  "International holidays tailored around culture, comfort, food, and the rhythm you prefer",
  "Thoughtful guidance for destinations such as Japan, Southeast Asia, and beyond",
  "A specialist shapes the first recommendation around your style, priorities, and budget",
];

const journeys = [
  {
    title: "Italy, layered with la dolce vita",
    subtitle:
      "Art-filled cities, sunlit coastlines, and unforgettable flavours",
    description:
      "Move from Rome and Florence to the Amalfi Coast or Tuscany with thoughtfully paced stays, authentic food, and memorable local experiences.",
    badge: "Italy",
    image: "/images/italy.jpg",
    href: "/contact",
    price: "1,50,000",
    brochureHref: "/packages/Mad%20Compass%20Italy%20Signature%20Itinerary.pdf",
  },
  {
    title: "Vietnam, from heritage to horizons",
    subtitle: "Ancient streets, spectacular landscapes, and vibrant local life",
    description:
      "Discover Vietnam through Hanoi, Ha Long Bay, Hoi An, and beyond, balancing rich culture, regional cuisine, scenic escapes, and easy comfort.",
    badge: "Vietnam",
    image: "/images/vietnam.jpg",
    href: "/contact",
    price: "50,000",
    brochureHref:
      "/packages/Mad%20Compass%20Vietnam%20Signature%20Itinerary.pdf",
  },
  {
    title: "Sri Lanka coastal escape",
    subtitle: "Golden beaches, surf towns, and rich island culture",
    description:
      "Travel through tea country, wildlife reserves, and warm coastal villages with an easy, unhurried rhythm.",
    badge: "Sri Lanka",
    image: "/images/srilanka.jpg",
    href: "/contact",
    price: "30,000",
    brochureHref:
      "/packages/Mad%20Compass%20Sri%20Lanka%20Surf%20and%20Safari%20Itinerary.pdf",
  },
];

const japanJourney = {
  title: "Japan soft luxury discovery",
  subtitle: "Culture, food, and quiet temples",
  description:
    "Curated routes through Kyoto, Kanazawa, and Tokyo with comfort-led stays and authentic local experiences.",
  badge: "Japan",
  image: "/images/Japan-soft-luxury-discovery.jpg",
  href: "/contact",
  price: "1,60,000",
  brochureHref: "/packages/Mad%20Compass%20Japan%20Signature%20Itinerary.pdf",
};

export const metadata: Metadata = {
  title: "Overseas Travel | Mad Compass",
  description:
    "Discover curated overseas holidays designed with comfort, depth, and attention to your travel preferences.",
};

export default function OverseasPage() {
  return (
    <main className="flex-1 bg-[#fffdfc]">
      <PageHero
        eyebrow="Overseas Travel"
        title="International escapes, designed with depth rather than haste."
        description="The most memorable overseas journeys are rarely the most crowded. We build around your rhythm, your interests, and the kind of experience you want to carry home with you."
        primaryCta={{ label: "Start planning", href: "/contact" }}
        secondaryCta={{ label: "Talk to a specialist", href: "/contact" }}
        image="/images/overseas.jpg"
        imageAlt="An elegant overseas travel experience"
      />

      <Reveal className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="max-w-3xl">
            {/* <p className="text-sm uppercase tracking-[0.3em] text-[#c20b0b]">
              Why clients choose us
            </p> */}
            <h2 className="mt-3 text-3xl font-semibold text-red-700 sm:text-4xl">
              A wider world, shaped with calm expertise and personal attention.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#655b4f]">
              We help travellers choose between culture-led city stays,
              nature-first escapes, or slower, more restorative journeys without
              making the planning feel rigid.
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
        <div className="mb-10 max-w-3xl">
          <p className="flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-[red]">
            Cruise your way into an unforgettable escape
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[#17120f] sm:text-4xl">
            Iconic cruise experiences and a world of overseas discovery.
          </h2>
          <p className="mt-5 text-lg leading-8 text-black/70">
            From family magic and all-suite indulgence at sea to culture-led
            city stays, island retreats, and slower journeys on land, choose an
            experience that makes every part of your holiday worth remembering.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          <CruiseAdBanner />
          <PhotoShowcaseCard {...japanJourney} />
        </div>
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {journeys.map((journey) => (
            <PhotoShowcaseCard key={journey.title} {...journey} />
          ))}
        </div>
      </Reveal>

      <Reveal className="mx-auto max-w-7xl px-6 pb-24 sm:px-8 lg:px-12">
        <div className="max-w-3xl rounded-4xl border border-[#efe2dc] bg-white p-8 shadow-[0_24px_80px_rgba(17,17,17,0.05)]">
          <TestimonialCard
            name={testimonials[2].name}
            location={testimonials[2].location}
            quote={testimonials[2].quote}
            trip={testimonials[2].trip}
          />
        </div>
      </Reveal>
    </main>
  );
}
