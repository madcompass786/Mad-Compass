"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

import { siteContent } from "@/data/content";
import { CONVERSION_LABELS, trackConversion } from "@/lib/gtag";

export function FloatingWhatsApp() {
  return (
    <Link
      href={siteContent.whatsapp}
      target="_blank"
      rel="noreferrer"
      onClick={(event) => {
        if (event.detail <= 1) {
          trackConversion(CONVERSION_LABELS.whatsapp);
        }
      }}
      aria-label="Contact us on WhatsApp"
      className="fixed bottom-5 right-5 z-60 flex items-center gap-3 rounded-full border border-[#f0d6d1] bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-[0_20px_45px_rgba(37,211,102,0.3)] transition-transform duration-300 hover:-translate-y-1 sm:bottom-6 sm:right-6"
    >
      <MessageCircle className="size-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </Link>
  );
}
