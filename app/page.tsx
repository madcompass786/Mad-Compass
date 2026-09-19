"use client";

import Link from "next/link";
import { ArrowRight, Compass, MessageCircle, Phone } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { EnquiryForm } from "@/components/sections/enquiry-form";
import { FaqSection } from "@/components/sections/faq-section";
import { PhotoShowcaseCard } from "@/components/sections/photo-showcase-card";
import { TestimonialSection } from "@/components/sections/testimonial-section";
import { TrustStats } from "@/components/sections/trust-stats";
import { siteContent } from "@/data/content";

const sections = [
  { id: "discover", label: "Discover" },
  { id: "travel-paths", label: "Travel paths" },
  { id: "vision", label: "Why us" },
];

const travelCards = [
  {
    href: "/domestic",
    label: "Domestic",
    title: "India, made personal",
    description:
      "Quiet hill retreats, heritage journeys, and thoughtful family escapes planned around your people.",
    accent: "The best of India, without the one-size-fits-all approach.",
  },
  {
    href: "/overseas",
    label: "Overseas",
    title: "International escapes with depth",
    description:
      "Leisure travel that feels elegant, balanced, and carefully paced for your interests.",
    accent: "From cultural routes to soft-adventure getaways.",
  },
  {
    href: "/expeditions",
    label: "Expeditions",
    title: "Adventure with purpose",
    description:
      "Specialized journeys for trekking, wildlife, and niche travel that demand expert planning.",
    accent: "Designed for travellers who want a meaningful challenge.",
  },
];

const featuredJourneys = [
  {
    title: "Rajasthan heritage circuit",
    subtitle: "Palaces, forts, and private experiences between cities",
    description:
      "Travel between grand palaces, historic forts, and vibrant old cities with private experiences, elegant stays, and an unhurried rhythm throughout.",
    badge: "Culture-led",
    image: "/images/rajasthan.jpg",
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
    price: "30,000",
    brochureHref:
      "/packages/Mad%20Compass%20Meghalaya%20Signature%20Itinerary.pdf",
  },
  {
    title: "Italy, layered with la dolce vita",
    subtitle:
      "Art-filled cities, sunlit coastlines, and unforgettable flavours",
    description:
      "Move from Rome and Florence to the Amalfi Coast or Tuscany with thoughtfully paced stays, authentic food, and memorable local experiences.",
    badge: "Italy",
    image: "/images/italy.jpg",
    price: "1,50,000",
    brochureHref: "/packages/Mad%20Compass%20Italy%20Signature%20Itinerary.pdf",
  },
];

const sectionMotion = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="flex-1 bg-[#fffdfc]">
      <section className="relative overflow-hidden border-b border-[#efe2dc] bg-white">
        <div className="relative mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[1.25fr_0.9fr] lg:items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.65 }}
              variants={sectionMotion}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-[#efe2dc] bg-white/90 px-4 py-2 text-sm uppercase tracking-[0.3em] text-[#c20b0b] backdrop-blur-sm">
                <Compass className="size-4" /> {siteContent.tagline}
              </div>
              <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-tight text-[#17120f] sm:text-6xl lg:text-7xl">
                {siteContent.heroHeadline}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-9 text-[#5f554c] sm:text-xl">
                {siteContent.heroSubtext}
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  className="bg-[#d13b2f] text-white hover:bg-[#b92f24]"
                >
                  <Link href="/contact">
                    Start your enquiry <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#efe2dc] bg-green-400 text-[#17120f] shadow-[0_10px_24px_rgba(17,17,17,0.06)] hover:-translate-y-0.5 hover:border-[#c20b0b] hover:text-[#c20b0b] hover:bg-[#fff7f4] hover:shadow-[0_14px_30px_rgba(17,17,17,0.08)]"
                >
                  <Link
                    href={siteContent.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle className="size-4" /> WhatsApp us
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.65, delay: 0.12 }}
              variants={sectionMotion}
              className="relative overflow-hidden rounded-[2.5rem] border border-[#efe2dc] bg-white p-8 shadow-[0_40px_120px_rgba(19,14,10,0.08)] sm:p-10"
            >
              <div className="relative rounded-4xl border border-[#efe2dc] bg-[#fffdfc] p-4 sm:p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-[#c20b0b]">
                  Featured focus
                </p>
                <h2 className="mt-4 text-3xl font-semibold text-[#17120f] sm:text-4xl">
                  A polished travel experience that still feels personal.
                </h2>
                <p className="mt-4 text-sm leading-7 text-[#655b4f] sm:text-base">
                  The experience is shaped with quiet sophistication, thoughtful
                  pacing, and the kind of guidance that makes the planning feel
                  as calm as the journey itself.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="rounded-[1.75rem] border border-[#efe2dc] bg-white p-5">
                    <p className="text-sm font-semibold text-[#17120f]">
                      Curated attention
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[#655b4f]">
                      Every enquiry goes to a specialist who can guide the first
                      recommendation with care.
                    </p>
                  </div>
                  <div className="rounded-[1.75rem] border border-[#efe2dc] bg-white p-5">
                    <p className="text-sm font-semibold text-[#17120f]">
                      Tailored approach
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[#655b4f]">
                      No fixed packages. No generic planning. Just holidays
                      built around your preferences.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-12 hidden gap-4 md:flex">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="rounded-full border border-[#efe2dc] bg-white px-4 py-3 text-sm font-semibold text-[#17120f] transition hover:border-[#c20b0b] hover:text-[#c20b0b]"
              >
                {section.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <TrustStats />

      <section
        id="discover"
        className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          variants={sectionMotion}
          className="mb-10 max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-[#c20b0b]">
            Discover
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[#17120f] sm:text-4xl">
            A welcome that makes the next step feel clear and natural.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#655b4f]">
            The journey unfolds gently from inspiration to clarity, with each
            section introducing a different side of the experience — from
            destination moods to specialist-led planning.
          </p>
        </motion.div>

        <div className="mb-16 grid gap-6 lg:grid-cols-3">
          {travelCards.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group overflow-hidden rounded-4xl border border-[#efe2dc] bg-white shadow-[0_24px_80px_rgba(20,15,10,0.06)] transition-transform hover:-translate-y-1 hover:border-[#c20b0b]"
            >
              <div className="relative overflow-hidden bg-[#fff2ef]">
                <div className="relative h-48 p-6">
                  <div className="flex h-full flex-col justify-between rounded-4xl bg-[#fffdf8] p-4 shadow-[inset_0_0_0_1px_rgba(209,59,47,0.06)]">
                    <div className="flex items-center justify-between gap-3">
                      <span className="rounded-full bg-[#fff4f0] px-3 py-1 text-xs uppercase tracking-[0.24em] text-[#c20b0b]">
                        {card.label}
                      </span>
                      <span className="text-xs text-[#7d675f]">Quick view</span>
                    </div>
                    <div className="rounded-[1.75rem] bg-white p-4 text-sm leading-7 text-[#655b4f] shadow-[inset_0_0_0_1px_rgba(194,11,11,0.08)]">
                      {card.accent}
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4 p-6">
                <h3 className="text-2xl font-semibold text-[#17120f]">
                  {card.title}
                </h3>
                <p className="text-sm leading-7 text-[#655b4f]">
                  {card.description}
                </p>
                <div className="flex items-center justify-between pt-4">
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#c20b0b] opacity-90 transition group-hover:opacity-100"
                  >
                    Explore <ArrowRight className="size-4" />
                  </Link>
                  <span className="rounded-full bg-[#fdf0ef] px-3 py-1 text-xs uppercase tracking-[0.23em] text-[#a70a0a]">
                    Tailored journeys
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          variants={sectionMotion}
          className="grid gap-6 lg:grid-cols-3"
        >
          {featuredJourneys.map((journey) => (
            <PhotoShowcaseCard
              key={journey.title}
              title={journey.title}
              subtitle={journey.subtitle}
              description={journey.description}
              badge={journey.badge}
              image={journey.image}
              href="/contact"
              price={journey.price}
              brochureHref={journey.brochureHref}
            />
          ))}
        </motion.div>
      </section>

      <section
        id="enquire"
        className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          variants={sectionMotion}
          className="grid gap-10 lg:grid-cols-[1fr_0.95fr]"
        >
          <div className="max-w-xl">
            <p className="text-sm uppercase tracking-[0.3em] text-[#d13b2f]">
              Ready to begin
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#17120f] sm:text-4xl">
              Start with a quick enquiry and a specialist will follow up.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#655b4f]">
              This is the place where your conversation becomes a personalised
              travel plan. The form is designed to keep the first step easy
              while giving us the right information to recommend the right
              journey.
            </p>
          </div>
          <div>
            <EnquiryForm />
          </div>
        </motion.div>
      </section>

      <section
        id="travel-paths"
        className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          variants={sectionMotion}
          className="grid gap-10 lg:grid-cols-[1fr_0.9fr]"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#d13b2f]">
              Travel paths
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#17120f] sm:text-4xl">
              A gentle guide through what makes every plan feel bespoke.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#655b4f]">
              Every journey begins with a conversation. We listen, we plan, and
              we refine — until your holiday feels exactly right.
            </p>
          </div>
          <div className="rounded-4xl border border-[#f0d6d1] bg-[#fff8f5] p-8">
            <div className="space-y-6">
              <div className="rounded-3xl border border-[#f7e2de] bg-white p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d13b2f]">
                  Step 1
                </p>
                <h3 className="mt-3 text-xl font-semibold text-[#17120f]">
                  Tell us what you’re dreaming of
                </h3>
                <p className="mt-2 text-sm leading-7 text-[#655b4f]">
                  A simple enquiry form captures the travel type, destination
                  interest, style, budget, and dates.
                </p>
              </div>
              <div className="rounded-3xl border border-[#f7e2de] bg-white p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d13b2f]">
                  Step 2
                </p>
                <h3 className="mt-3 text-xl font-semibold text-[#17120f]">
                  We craft the first recommendation
                </h3>
                <p className="mt-2 text-sm leading-7 text-[#655b4f]">
                  A specialist prepares a custom itinerary based on your
                  preferences and affordability, not a fixed package.
                </p>
              </div>
              <div className="rounded-3xl border border-[#f7e2de] bg-white p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d13b2f]">
                  Step 3
                </p>
                <h3 className="mt-3 text-xl font-semibold text-[#17120f]">
                  Refine it together
                </h3>
                <p className="mt-2 text-sm leading-7 text-[#655b4f]">
                  You review the plan and we adjust it — so the holiday is
                  personalized, practical, and feels like your own.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="vision">
        <TestimonialSection />
      </section>

      <FaqSection />

      <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-8 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          variants={sectionMotion}
          className="rounded-4xl border border-[#f0d6d1] bg-white p-6 shadow-[0_24px_80px_rgba(20,15,10,0.06)] sm:p-8 lg:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#d13b2f]">
                Start with a conversation
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-[#17120f] sm:text-4xl">
                We would love to understand how you like to travel.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-[#655b4f]">
                Share a few thoughts and we will turn that into a thoughtful
                first recommendation — whether you are planning a long weekend
                or a far-flung adventure.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  asChild
                  className="bg-[#d13b2f] text-white hover:bg-[#b92f24]"
                >
                  <Link href="/contact">Send your enquiry</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#f0d6d1] bg-white text-[#17120f]"
                >
                  <a href={`tel:${siteContent.phone}`}>
                    <Phone className="size-4" /> Call us
                  </a>
                </Button>
              </div>
            </div>
            <div className="rounded-3xl border border-[#f0d6d1] bg-[#fff8f5] p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-[#d13b2f]">
                Contact
              </p>
              <div className="mt-4 space-y-3 text-sm text-[#5d4944]">
                <a
                  href={`tel:${siteContent.phone}`}
                  className="flex items-center gap-2 hover:text-[#d13b2f]"
                >
                  <Phone className="size-4" /> {siteContent.phone}
                </a>
                <a
                  href="mailto:hello@madcompass.com"
                  className="flex items-center gap-2 hover:text-[#d13b2f]"
                >
                  <MessageCircle className="size-4" /> hello@madcompass.com
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
