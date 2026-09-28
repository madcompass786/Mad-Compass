export const CONVERSION_LABELS = {
  quote: "5LA_CLOP7ogdEOy-_t9E",
  whatsapp: "86iUCNzN9ogdEOy-_t9E",
};

declare global {
  interface Window {
    gtag?: (
      command: string,
      action: string,
      parameters: { send_to: string },
    ) => void;
  }
}

export function trackConversion(label: string): void {
  if (typeof window === "undefined") return;

  window.gtag?.("event", "conversion", {
    send_to: `AW-18454912876/${label}`,
  });
}
