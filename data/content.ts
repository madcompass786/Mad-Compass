export type SocialLink = {
  label: string;
  href: string;
};

export type SiteContent = {
  brandName: string;
  companyName: string;
  tagline: string;
  heroEyebrow: string;
  heroHeadline: string;
  heroSubtext: string;
  address: string;
  gst: string;
  phone: string;
  whatsapp: string;
  email: string;
  hours: string;
  socials: SocialLink[];
};

export const siteContent: SiteContent = {
  brandName: "Mad Compass",
  companyName: "Mad Compass Travel & Tours",
  tagline: "Thoughtful travel, carefully planned",
  heroEyebrow: "Bespoke holidays, guided personally",
  heroHeadline:
    "Thoughtful holidays shaped around your pace, your people, and the stories you want to bring home.",
  heroSubtext:
    "We plan with intention rather than templates — pairing local insight, calm logistics, and personal guidance so every journey feels considered from the first conversation.",
  address: "Kolkata, India\nDelhi, India\nDehradun, India",
  gst: "GST: 19AAXXX0000X1ZX",
  phone: "+91 97111 93458",
  whatsapp: "https://wa.me/919654016813",
  email: "tamraparna.k@gmail.com",
  hours: "Mon–Sat · 10:00 AM – 7:00 PM",
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/mad.compass/" },
    { label: "WhatsApp", href: "https://wa.me/919654016813" },
    { label: "Facebook", href: "https://www.facebook.com/madcompass.ccu/" },
  ],
};
