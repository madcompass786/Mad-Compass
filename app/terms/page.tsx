import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

import { Reveal } from "@/components/sections/reveal";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/data/content";
import { TrackedWhatsAppLink } from "@/components/sections/tracked-whatsapp-link";

export const metadata: Metadata = {
  title: "Terms & Conditions | Mad Compass",
  description:
    "Read Mad Compass's full terms and conditions covering pricing, bookings, cancellations, liability, privacy, and travel documentation before making a booking.",
};

const policySections = [
  {
    title: "1. Prices",
    body: (
      <p className="text-base leading-8 text-[#655b4f]">
        Prices are subject to change due to fluctuations in exchange rates or
        unavoidable circumstances such as climatic changes, flight
        cancellations, internal political situations, supplier price revisions,
        taxes, fuel surcharges, permit fees, or other operational factors beyond
        our control. However, there are no hidden costs, and any known
        applicable charges will be disclosed at the time of booking or as soon
        as reasonably possible.
      </p>
    ),
  },
  {
    title: "2. Booking and Payment",
    body: (
      <p className="text-base leading-8 text-[#655b4f]">
        A booking is confirmed only upon receipt of the required deposit or full
        payment, as applicable, and written confirmation from us. All payments
        must be made within the timelines communicated at the time of booking.
        If payment is not received on time, we reserve the right to cancel or
        withhold the booking without liability.
      </p>
    ),
  },
  {
    title: "3. Cancellation & Refund Policy",
    body: (
      <div>
        <ul className="space-y-3">
          {[
            { label: "50+ days before departure", value: "80% refund" },
            { label: "25–48 days before departure", value: "40% refund" },
            { label: "15–24 days before departure", value: "20% refund" },
            {
              label: "Less than 10–15 days before departure",
              value: "Non-refundable",
            },
          ].map((item) => (
            <li
              key={item.label}
              className="flex flex-col gap-1 rounded-[1.25rem] border border-[#efe2dc] bg-[#fffdfc] p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <span className="text-sm font-medium text-[#17120f]">
                {item.label}
              </span>
              <span className="text-sm font-semibold text-[#c20b0b]">
                {item.value}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm leading-7 text-[#7a6e67]">
          Refunds, if applicable, will be processed after deductions of any
          non-recoverable booking, service, bank, card, convenience, or supplier
          charges. Refunds may also be subject to cancellation fees, penalties,
          and terms imposed by airlines, hotels, transport operators, or other
          third-party service providers. Refund processing timelines may vary
          depending on the payment method and supplier approvals.
        </p>
      </div>
    ),
  },
  {
    title: "4. Changes, Delays & Itinerary Modifications",
    body: (
      <p className="text-base leading-8 text-[#655b4f]">
        Unavoidable circumstances such as bad weather, political unrest,
        landslides, health issues, natural disasters, flight cancellations, road
        closures, strikes, government restrictions, or other force majeure
        events may affect your itinerary. We may, at our discretion, alter,
        shorten, postpone, substitute, or cancel any part of the itinerary where
        required for safety, operational, or legal reasons. We will do our best
        to offer alternative trips, similar services, or reasonable
        arrangements, but we shall not be liable for losses caused by such
        events.
      </p>
    ),
  },
  {
    title: "5. Postponement & Transfer of Booking",
    body: (
      <p className="text-base leading-8 text-[#655b4f]">
        You may request a change to your trip date or itinerary, provided the
        request is made within 24–48 hours of booking the holiday package. Any
        additional costs incurred due to the changes will be your
        responsibility. Changes are subject to availability, supplier approval,
        and applicable revision charges. We will do our best to accommodate your
        preferences with similar or alternative arrangements, but no change is
        guaranteed.
      </p>
    ),
  },
  {
    title: "6. Customer Responsibilities",
    body: (
      <p className="text-base leading-8 text-[#655b4f]">
        You are responsible for providing accurate booking information,
        including passenger names, contact details, travel dates, and document
        details. Any errors caused by incorrect information supplied by you may
        result in additional charges, delays, or loss of booking, for which we
        shall not be liable.
      </p>
    ),
  },
  {
    title: "7. Health & Fitness",
    body: (
      <p className="text-base leading-8 text-[#655b4f]">
        We recommend consulting your physician before booking a trip. Please
        inform us of any pre-existing health conditions, mobility concerns,
        allergies, disabilities, pregnancy, or other medical requirements that
        may affect your travel. You are responsible for ensuring that you are
        medically fit to undertake the booked trip and for carrying any
        medicines, equipment, or documents required for your condition.
      </p>
    ),
  },
  {
    title: "8. Travel Insurance",
    body: (
      <p className="text-base leading-8 text-[#655b4f]">
        It is mandatory to have travel insurance that covers accidents,
        emergency rescues, medical treatment, trip interruptions, cancellations,
        and other unforeseen circumstances. You may be required to provide proof
        of insurance before travel. We shall not be responsible for any claim
        denied by your insurer.
      </p>
    ),
  },
  {
    title: "9. Complaints",
    body: (
      <p className="text-base leading-8 text-[#655b4f]">
        Any complaints during the trip should be immediately reported to your
        local coordinator, tour leader, or guide. They will address the issue
        promptly. Failure to notify us during the trip may affect our ability to
        investigate or resolve the issue. Complaints raised after the trip
        should be submitted within a reasonable time with supporting details.
        Post-trip complaints can be sent to{" "}
        <a
          href={`mailto:${siteContent.email}`}
          className="text-[#c20b0b] hover:underline"
        >
          {siteContent.email}
        </a>
        .
      </p>
    ),
  },
  {
    title: "10. Third-Party Services",
    body: (
      <p className="text-base leading-8 text-[#655b4f]">
        Accommodation, transport, flights, meals, activities, and other services
        may be provided by independent third-party suppliers. We act only as an
        intermediary, agent, or arranger, as applicable, and are not responsible
        for the acts, omissions, delays, cancellations, overbooking, service
        failures, or negligence of such third parties.
      </p>
    ),
  },
  {
    title: "11. Liability",
    body: (
      <p className="text-base leading-8 text-[#655b4f]">
        To the maximum extent permitted by law, we shall not be liable for any
        indirect, incidental, consequential, special, or punitive losses,
        including loss of profit, loss of enjoyment, loss of opportunity, or
        expenses arising from delays, cancellations, force majeure events, or
        third-party acts. Our liability, if any, shall be limited to the amount
        paid to us for the affected booking, subject to applicable law.
      </p>
    ),
  },
  {
    title: "12. Privacy",
    body: (
      <p className="text-base leading-8 text-[#655b4f]">
        We collect personal information solely for official purposes, including
        booking, operations, communication, payment processing, customer
        support, and related travel services. Your information will not be
        shared or published without your consent, except where required to
        complete your booking, provide services, or comply with legal
        obligations. We respect your privacy and will handle your information in
        accordance with applicable law.
      </p>
    ),
  },
  {
    title: "13. Passports, Visas & Travel Documents",
    body: (
      <p className="mt-4 text-base leading-8 text-[#655b4f]">
        For overseas travel, you must have a passport valid for at least six
        months from the date of travel. You are solely responsible for ensuring
        that your passport, visa, permits, vaccinations, insurance, and any
        other required travel documents are valid, complete, and accurate. We
        shall not be liable for any loss, delay, or denial of travel arising
        from incomplete or invalid documentation.
      </p>
    ),
  },
  {
    title: "14. Force Majeure",
    body: (
      <p className="text-base leading-8 text-[#655b4f]">
        We shall not be liable for any delay, cancellation, loss, or damage
        caused by events beyond our reasonable control, including but not
        limited to natural disasters, war, civil unrest, terrorism, strikes,
        epidemics, pandemics, government action, airline disruption, or adverse
        weather conditions.
      </p>
    ),
  },
  {
    title: "15. Governing Law & Jurisdiction",
    body: (
      <p className="text-base leading-8 text-[#655b4f]">
        These Terms and Conditions shall be governed by and construed in
        accordance with the laws of India. Any dispute arising out of or in
        connection with these Terms shall be subject to the exclusive
        jurisdiction of the courts at Kolkata, West Bengal.
      </p>
    ),
  },
  {
    title: "16. Acceptance of Terms",
    body: (
      <p className="text-base leading-8 text-[#655b4f]">
        By making a booking, paying any amount, or using our services, you
        acknowledge that you have read, understood, and agreed to these Terms
        and Conditions.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <main className="flex-1 bg-[#fffdfc]">
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="rounded-4xl border border-[#efe2dc] bg-white p-8 shadow-[0_24px_80px_rgba(17,17,17,0.05)] sm:p-10 lg:p-12">
          <p className="text-sm uppercase tracking-[0.3em] text-[#c20b0b]">
            TERMS & CONDITIONS
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-[#17120f] sm:text-5xl">
            A few things to know before we begin planning.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#655b4f]">
            These terms apply to all bookings made with us for tours, travel
            packages, transport, accommodation, transfers, activities, and
            related services. Please read them carefully before making a
            booking.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 pb-20 sm:px-8 lg:px-12">
        <div className="space-y-6">
          {policySections.map((section) => (
            <Reveal
              key={section.title}
              className="rounded-[1.75rem] border border-[#efe2dc] bg-white p-7 shadow-[0_20px_60px_rgba(17,17,17,0.05)] sm:p-8"
            >
              <section>
                <div className="inline-flex items-center gap-3">
                  {/* <span className="h-1.5 w-3 rounded-full bg-[#c20b0b]" /> */}
                  <h2 className="text-2xl font-semibold text-[#b40000] sm:text-3xl">
                    {section.title}
                  </h2>
                </div>
                <div className="mt-4">{section.body}</div>
              </section>
            </Reveal>
          ))}

          <Reveal className="rounded-[1.75rem] border border-[#f0d6d1] bg-[#fff7f4] p-7 shadow-[0_20px_60px_rgba(17,17,17,0.05)] sm:p-8">
            <section>
              <h2 className="text-2xl font-semibold italic text-[#bc2c00] sm:text-3xl">
                Important Note
              </h2>
              <p className="mt-4 text-base leading-8 text-[#655b4f]">
                For all overseas travel, your passport must be valid for at
                least six months from the date of travel. Please verify this
                before confirming your booking.
              </p>
            </section>
          </Reveal>
        </div>
      </div>

      <Reveal className="mx-auto max-w-7xl px-6 pb-24 sm:px-8 lg:px-12">
        <div className="rounded-4xl border border-[#efe2dc] bg-[#fff8f5] p-8 text-center shadow-[0_24px_80px_rgba(17,17,17,0.05)] sm:p-10">
          <p className="text-sm uppercase tracking-[0.3em] text-[#c20b0b]">
            Still have questions?
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[#17120f] sm:text-4xl">
            Not sure where to begin? Let&apos;s figure it out together.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[#655b4f]">
            Our specialists are happy to walk you through anything before you
            commit.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button
              asChild
              className="bg-[#c20b0b] text-white hover:bg-[#a70a0a]"
            >
              <Link href="/contact">
                Start your enquiry <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-[#efe2dc] bg-green-400 text-[#17120f]"
            >
              <TrackedWhatsAppLink
                href={siteContent.whatsapp}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="size-4" /> WhatsApp us
              </TrackedWhatsAppLink>
            </Button>
          </div>
        </div>
      </Reveal>
    </main>
  );
}
