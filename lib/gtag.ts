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

  console.log("trackConversion called with:", label);
  console.log("window.gtag type:", typeof window.gtag);

  window.gtag?.("event", "conversion", {
    send_to: `AW-18454912876/${label}`,
  });

  console.log("gtag event fired");
}
