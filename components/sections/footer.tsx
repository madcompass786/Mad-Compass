import Link from "next/link";

import { siteContent } from "@/data/content";
import { navigationLinks } from "@/lib/constants";
import { TrackedWhatsAppLink } from "@/components/sections/tracked-whatsapp-link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-[#f0d6d1] bg-[#9D0202] px-6 py-14 text-[#f8ece8] sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:justify-between">
        <div className="max-w-xl">
          <Link href="/" className="flex min-w-0">
            <div className="relative h-20 w-auto shrink-0">
              <Image
                src="/images/logoBlack-transparent.png"
                alt="Mad Compass"
                width={200}
                height={100}
                className="h-20 w-auto object-contain"
              />
            </div>
            {/* Logo image only: text removed */}
          </Link>
          <h2 className="mt-3 text-2xl font-semibold text-white">
            Here to take you places!
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#d7c6b3]">
            {siteContent.address}
          </p>
          <p className="mt-1 text-sm text-[#d7c6b3]">{siteContent.phone}</p>
          <p className="mt-1 text-sm text-[#d7c6b3]">hello@madcompass.com</p>
        </div>
        <div className="flex flex-col gap-8 sm:flex-row">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-white">
              Quick links
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-[#e4d8c9]">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/terms" className="hover:text-white">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-white">
              Social
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-[#e4d8c9]">
              {siteContent.socials.map((social) => (
                <li key={social.label}>
                  {social.label === "WhatsApp" ? (
                    <TrackedWhatsAppLink
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-white"
                    >
                      {social.label}
                    </TrackedWhatsAppLink>
                  ) : (
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-white"
                    >
                      {social.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
