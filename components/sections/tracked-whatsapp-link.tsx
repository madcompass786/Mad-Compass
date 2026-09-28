"use client";

import type { AnchorHTMLAttributes, MouseEvent } from "react";

import { CONVERSION_LABELS, trackConversion } from "@/lib/gtag";

type TrackedWhatsAppLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export function TrackedWhatsAppLink({
  onClick,
  ...props
}: TrackedWhatsAppLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (!event.defaultPrevented && event.detail <= 1) {
      trackConversion(CONVERSION_LABELS.whatsapp);
    }
  };

  return <a {...props} onClick={handleClick} />;
}
