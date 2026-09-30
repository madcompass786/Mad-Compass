"use client";

import { useRef, useState } from "react";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteContent } from "@/data/content";
import { CONVERSION_LABELS, trackConversion } from "@/lib/gtag";

type FormState = {
  travelType: string;
  destination: string;
  style: string;
  budget: string;
  group: string;
  name: string;
  phone: string;
  email: string;
  preferredContact: string;
  notes: string;
};

const initialForm: FormState = {
  travelType: "",
  destination: "",
  style: "",
  budget: "",
  group: "",
  name: "",
  phone: "",
  email: "",
  preferredContact: "WhatsApp",
  notes: "",
};

const travelTypes = ["Domestic", "Overseas", "Expedition", "Not sure yet"];
const styleTags = [
  "Relaxation",
  "Adventure",
  "Culture",
  "Family",
  "Honeymoon",
  "Food & wine",
];
const budgetBands = [
  "Under ₹3 lakh",
  "₹3–6 lakh",
  "₹6–10 lakh",
  "₹10 lakh+",
  "Flexible",
];
const groupOptions = [
  "Couple",
  "Friends",
  "Family",
  "Solo",
  "Small group",
  "Large group",
];

export function EnquiryForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const submissionInProgress = useRef(false);

  const updateField = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const progress = ((step + 1) / 6) * 100;

  const handleNext = () => {
    if (step < 5) {
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (submissionInProgress.current) return;

    submissionInProgress.current = true;
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok || !result?.success) {
        throw new Error(result?.message || "Unable to submit enquiry");
      }

      trackConversion(CONVERSION_LABELS.quote);
      setSubmitted(true);
      setStep(5);
    } catch (error) {
      setSubmitted(false);
      setStep(5);
      setSubmitError(
        error instanceof Error ? error.message : "Unable to submit enquiry",
      );
    } finally {
      submissionInProgress.current = false;
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-4xl border border-[#f0d6d1] bg-white p-5 shadow-[0_24px_80px_rgba(20,15,10,0.08)] sm:p-8">
      {!submitted ? (
        <>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-[0.28em] text-[#d13b2f] sm:text-sm">
                Start your journey
              </p>
              <h3 className="mt-2 text-xl font-semibold text-[#17120f] sm:text-2xl">
                Tell us what kind of holiday you are craving.
              </h3>
            </div>
            <div className="self-start rounded-full border border-[#f1d8d2] px-3 py-1 text-xs font-medium text-[#7a5048] sm:text-sm">
              Step {step + 1} of 6
            </div>
          </div>

          <div className="mt-6 h-2 overflow-hidden rounded-full bg-[#f7e8e5]">
            <div
              className="h-full rounded-full bg-[#d13b2f] transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>

          {submitError ? (
            <div className="mt-6 rounded-2xl border border-[#f0d6d1] bg-[#fff4f1] p-4 text-sm text-[#8a4338]">
              {submitError}
            </div>
          ) : null}

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            {step === 0 ? (
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#4b3b37]">
                  What kind of travel are you considering?
                </label>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {travelTypes.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => updateField("travelType", option)}
                      className={`rounded-2xl border px-4 py-3 text-left text-sm font-medium transition ${
                        form.travelType === option
                          ? "border-[#d13b2f] bg-[#fff2ee] text-[#d13b2f]"
                          : "border-[#f0d6d1] bg-[#fffdfa] text-[#5d4944]"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ) : null}

            {step === 1 ? (
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#4b3b37]">
                  What destination is on your mind?
                </label>
                <input
                  required
                  value={form.destination}
                  onChange={(event) =>
                    updateField("destination", event.target.value)
                  }
                  className="min-h-11 w-full rounded-2xl border border-[#f0d6d1] bg-[#fffdfa] px-4 py-3 text-sm outline-none ring-0"
                  placeholder="e.g. Japan, Bhutan, Kerala, or I am still exploring"
                />
              </div>
            ) : null}

            {step === 2 ? (
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#4b3b37]">
                  What kind of experience appeals to you most?
                </label>
                <div className="flex flex-wrap gap-2">
                  {styleTags.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => updateField("style", tag)}
                      className={`min-h-11 rounded-full border px-3 py-2 text-sm transition ${
                        form.style === tag
                          ? "border-[#d13b2f] bg-[#fff2ee] text-[#d13b2f]"
                          : "border-[#f0d6d1] text-[#5d4944]"
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            ) : null}

            {step === 3 ? (
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#4b3b37]">
                  What comfort or budget band feels right?
                </label>
                <div className="grid gap-3 sm:grid-cols-2">
                  {budgetBands.map((band) => (
                    <button
                      key={band}
                      type="button"
                      onClick={() => updateField("budget", band)}
                      className={`rounded-2xl border px-4 py-3 text-left text-sm transition ${
                        form.budget === band
                          ? "border-[#d13b2f] bg-[#fff2ee] text-[#d13b2f]"
                          : "border-[#f0d6d1] bg-[#fffdfa] text-[#5d4944]"
                      }`}
                    >
                      {band}
                    </button>
                  ))}
                </div>
              </div>
            ) : null}

            {step === 4 ? (
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#4b3b37]">
                  Who is travelling and when?
                </label>
                <div className="grid gap-3 sm:grid-cols-2">
                  {groupOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => updateField("group", option)}
                      className={`rounded-2xl border px-4 py-3 text-left text-sm transition ${
                        form.group === option
                          ? "border-[#d13b2f] bg-[#fff2ee] text-[#d13b2f]"
                          : "border-[#f0d6d1] bg-[#fffdfa] text-[#5d4944]"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                <textarea
                  value={form.notes}
                  onChange={(event) => updateField("notes", event.target.value)}
                  className="mt-4 min-h-11 w-full rounded-2xl border border-[#f0d6d1] bg-[#fffdfa] px-4 py-3 text-sm outline-none"
                  placeholder="Share rough dates, trip length, or anything you are dreaming of."
                />
              </div>
            ) : null}

            {step === 5 ? (
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#4b3b37]">
                    Your name
                  </label>
                  <input
                    required
                    value={form.name}
                    onChange={(event) =>
                      updateField("name", event.target.value)
                    }
                    className="min-h-11 w-full rounded-2xl border border-[#f0d6d1] bg-[#fffdfa] px-4 py-3 text-sm"
                    placeholder="e.g. John Doe"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#4b3b37]">
                    Your Phone
                  </label>
                  <input
                    required
                    value={form.phone}
                    onChange={(event) =>
                      updateField("phone", event.target.value)
                    }
                    className="min-h-11 w-full rounded-2xl border border-[#f0d6d1] bg-[#fffdfa] px-4 py-3 text-sm"
                    placeholder="+91 9999999999"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#4b3b37]">
                    Your Email
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(event) =>
                      updateField("email", event.target.value)
                    }
                    className="min-h-11 w-full rounded-2xl border border-[#f0d6d1] bg-[#fffdfa] px-4 py-3 text-sm"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#4b3b37]">
                    Preferred contact
                  </label>
                  <select
                    value={form.preferredContact}
                    onChange={(event) =>
                      updateField("preferredContact", event.target.value)
                    }
                    className="min-h-11 w-full rounded-2xl border border-[#f0d6d1] bg-[#fffdfa] px-4 py-3 text-sm"
                  >
                    <option value="WhatsApp">WhatsApp</option>
                    <option value="Phone">Phone</option>
                    <option value="Email">Email</option>
                  </select>
                </div>
              </div>
            ) : null}

            <div className="flex flex-col gap-3 border-t border-[#f3e2dd] pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-sm text-[#75635d]">
                {step === 5
                  ? "We will turn this into a thoughtful first recommendation."
                  : "Your answers help us shortlist the right travel style."}
              </div>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                {step > 0 ? (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleBack}
                    className="min-h-11 w-full border-[#f0d6d1] bg-white/95 text-[#17120f] shadow-[0_10px_24px_rgba(17,17,17,0.06)] hover:border-[#c20b0b] hover:text-[#c20b0b] hover:bg-[#fff7f4] hover:shadow-[0_14px_30px_rgba(17,17,17,0.08)] sm:w-auto"
                  >
                    Back
                  </Button>
                ) : null}
                {step < 5 ? (
                  <Button
                    type="button"
                    onClick={handleNext}
                    className="min-h-11 w-full bg-[#d13b2f] text-white shadow-[0_16px_35px_rgba(194,11,11,0.22)] hover:bg-[#b92f24] hover:shadow-[0_20px_42px_rgba(194,11,11,0.3)] sm:w-auto"
                  >
                    Continue <ArrowRight className="size-4" />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className="min-h-11 w-full bg-[#d13b2f] text-white shadow-[0_16px_35px_rgba(194,11,11,0.22)] hover:bg-[#b92f24] hover:shadow-[0_20px_42px_rgba(194,11,11,0.3)] sm:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send enquiry"}
                  </Button>
                )}
              </div>
            </div>
          </form>
        </>
      ) : (
        <div className="flex min-h-105 items-center justify-center rounded-3xl border border-[#e8d8d4] bg-[#fffaf8] p-5 text-center transition-opacity duration-300 sm:p-8">
          <div className="w-full max-w-2xl">
            <CheckCircle2 className="mx-auto size-12 text-[#d13b2f]" />
            <h4 className="mt-4 text-2xl font-semibold text-[#17120f] sm:text-3xl">
              Thank you — your enquiry is in.
            </h4>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[#6b534d] sm:text-base">
              We will be in touch soon with a tailored first recommendation and
              next steps. If you prefer, you can also reach us directly on
              WhatsApp at {siteContent.phone}.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button
                asChild
                className="min-h-11 w-full bg-[#d13b2f] shadow-[0_16px_35px_rgba(194,11,11,0.22)] hover:bg-[#b92f24] hover:shadow-[0_20px_42px_rgba(194,11,11,0.3)] sm:w-auto"
              >
                <a
                  href={siteContent.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(event) => {
                    if (event.detail <= 1) {
                      trackConversion(CONVERSION_LABELS.whatsapp);
                    }
                  }}
                >
                  <MessageCircle className="size-4" /> WhatsApp us
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="min-h-11 w-full border-[#f0d6d1] bg-white/95 text-[#17120f] shadow-[0_10px_24px_rgba(17,17,17,0.06)] hover:border-[#c20b0b] hover:text-[#c20b0b] hover:bg-[#fff7f4] hover:shadow-[0_14px_30px_rgba(17,17,17,0.08)] sm:w-auto"
              >
                <a href={`mailto:${siteContent.email}`}>Email us</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
