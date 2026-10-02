import type { Metadata } from "next";
import { Clock3, MessageCircle, MapPin, Phone } from "lucide-react";

import { Reveal } from "@/components/sections/reveal";

import { EnquiryForm } from "@/components/sections/enquiry-form";
import { PageHero } from "@/components/sections/page-hero";
import { siteContent } from "@/data/content";

export const metadata: Metadata = {
  title: "Contact Us | Mad Compass",
  description:
    "Get in touch with Mad Compass for a tailored holiday enquiry, WhatsApp chat, or a consultation in Kolkata.",
};

export default function ContactPage() {
  return (
    <main className="flex-1 bg-[#fffdfc]">
      <PageHero
        eyebrow="Contact Us"
        title="Let us shape a journey that feels right for you."
        description="Share a few details and we will respond with a thoughtful first recommendation, along with the next steps for planning your holiday."
        primaryCta={{ label: "Call us", href: `tel:${siteContent.phone}` }}
        secondaryCta={{ label: "WhatsApp us", href: siteContent.whatsapp }}
        image="/images/contact.jpg"
        imageAlt="A polished overseas travel experience"
      />

      <Reveal className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-6">
            <div className="rounded-4xl border border-[#efe2dc] bg-white p-8 shadow-[0_24px_80px_rgba(17,17,17,0.05)]">
              <p className="text-sm uppercase tracking-[0.3em] text-[#c20b0b]">
                Let&apos;s Connect
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-[#17120f] sm:text-4xl">
                Tell us what you are dreaming of, and we will help shape the
                journey.
              </h2>
              <div className="mt-6 grid gap-4 text-sm leading-7 text-[#5d4944] sm:grid-cols-2">
                <div className="rounded-3xl border border-[#efe2dc] bg-[#fffdfc] p-4">
                  <div className="space-y-1">
                    {siteContent.address.split("\n").map((location) => (
                      <div key={location} className="flex items-start gap-3">
                        <MapPin className="mt-1 size-4 shrink-0 text-[#c20b0b]" />
                        <span>{location}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-3xl border border-[#efe2dc] bg-[#fffdfc] p-4">
                  <div className="flex items-start gap-3">
                    <Clock3 className="mt-1 size-4 shrink-0 text-[#c20b0b]" />
                    <span>{siteContent.hours}</span>
                  </div>
                </div>
                <div className="rounded-3xl border border-[#efe2dc] bg-[#fffdfc] p-4">
                  <div className="flex flex-col gap-1">
                    {[siteContent.phone, "+91 96540 16813"].map((phone) => (
                      <div key={phone} className="flex items-start gap-3">
                        <Phone className="mt-1 size-4 shrink-0 text-[#c20b0b]" />
                        <a
                          href={`tel:${phone}`}
                          className="hover:text-[#c20b0b]"
                        >
                          {phone}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-3xl border border-[#efe2dc] bg-[#fffdfc] p-4">
                  <div className="flex items-start gap-3">
                    <MessageCircle className="mt-1 size-4 shrink-0 text-[#c20b0b]" />
                    <a
                      href="mailto:hello@madcompass.com"
                      className="hover:text-[#c20b0b]"
                    >
                      hello@madcompass.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-4xl border border-[#efe2dc] bg-white shadow-[0_24px_80px_rgba(17,17,17,0.05)]">
              <iframe
                title="Mad Compass location"
                src="https://www.google.com/maps?q=Kolkata%20India&z=12&output=embed"
                className="h-80 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-4xl border border-[#efe2dc] bg-[#fff8f5] p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-[#c20b0b]">
                Enquiry flow
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-[#17120f]">
                Your first conversation begins here, and we will guide the next
                step with care.
              </h3>
            </div>
            <EnquiryForm />
          </div>
        </div>
      </Reveal>
    </main>
  );
}
