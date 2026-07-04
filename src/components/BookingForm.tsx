"use client";

import { useActionState } from "react";
import { submitBooking, type BookingState } from "@/lib/actions";
import Image from "next/image";

const INTERESTS = [
  "We want to improve new hire integration at our company",
  "We'd like to be a pilot product testing partner",
  "We're considering investing in Treehouze",
  "Something else",
];

const initial: BookingState = { status: "idle" };

function SuccessView() {
  return (
    <div className="flex flex-col items-start gap-6 py-8">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#EBF0EC]">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth={2}
          stroke="#1B3A2B"
          className="w-5 h-5"
        >
          <path
            d="M4.5 12.75l6 6 9-13.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-[#0D0D0B] tracking-tight mb-2">
          Message received.
        </h2>
        <p className="text-base text-[#6B6863] leading-relaxed max-w-sm">
          We&apos;ll review your message and get back to you within a few days.
          We read every submission personally.
        </p>
      </div>
      <a
        href="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-[#1B3A2B] hover:underline"
      >
        ← Back to homepage
      </a>
    </div>
  );
}

export default function BookingForm() {
  const [state, formAction, isPending] = useActionState(submitBooking, initial);

  if (state.status === "success") return <SuccessView />;

  return (
    <form action={formAction} className="flex flex-col gap-6">
      {/* Name + Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Full name" name="name" required placeholder="Alex Müller" />
        <Field label="Company" name="company" required placeholder="Acme GmbH" />
      </div>

      {/* Role + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field
          label="Your role"
          name="role"
          placeholder="Head of People"
        />
        <Field
          label="Work email"
          name="email"
          type="email"
          required
          placeholder="alex@acme.com"
        />
      </div>

      {/* Primary interest */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-[#0D0D0B]">
          What brings you here?{" "}
          <span className="text-[#1B3A2B]">*</span>
        </label>
        <div className="flex flex-col gap-2.5">
          {INTERESTS.map((interest) => (
            <label
              key={interest}
              className="flex items-start gap-3 cursor-pointer group"
            >
              <input
                type="radio"
                name="interest"
                value={interest}
                required
                className="mt-0.5 accent-[#1B3A2B] w-4 h-4 shrink-0 cursor-pointer"
              />
              <span className="text-sm text-[#6B6863] group-hover:text-[#0D0D0B] transition-colors leading-snug">
                {interest}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Why interested */}
      <TextareaField
        label="Why are you interested in Treehouze?"
        name="why"
        required
        placeholder="Tell us about your situation — what's happening with new hire integration at your company, what problem you're trying to solve, or what caught your attention."
        rows={4}
      />

      {/* How to help */}
      <TextareaField
        label="How could you help us move faster?"
        name="howToHelp"
        placeholder="We're actively looking for product testing partners who want to shape what we build. What would a collaboration look like from your side? What can you bring — team access, feedback cycles, budget, something else?"
        rows={4}
        hint="Optional — but we'd love to know."
      />

      {/* Error */}
      {state.status === "error" && (
        <p className="text-sm text-red-600">{state.message}</p>
      )}

      {/* Submit */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isPending}
          className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-[#1B3A2B] text-white text-sm font-medium hover:bg-[#163323] disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
        >
          {isPending ? (
            <>
              <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
              Sending…
            </>
          ) : (
            "Send message →"
          )}
        </button>
      </div>
    </form>
  );
}

// ── Field components ──────────────────────────────────────────────────────────

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-[#0D0D0B]">
        {label}
        {required && <span className="text-[#1B3A2B] ml-0.5">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-10 px-3 rounded-lg border border-[#E2E2DE] bg-white text-sm text-[#0D0D0B] placeholder:text-[#B0ADA8] focus:outline-none focus:ring-2 focus:ring-[#1B3A2B]/20 focus:border-[#1B3A2B] transition-colors"
      />
    </div>
  );
}

function TextareaField({
  label,
  name,
  required,
  placeholder,
  rows = 4,
  hint,
}: {
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  rows?: number;
  hint?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-baseline justify-between gap-2">
        <label htmlFor={name} className="text-sm font-medium text-[#0D0D0B]">
          {label}
          {required && <span className="text-[#1B3A2B] ml-0.5">*</span>}
        </label>
        {hint && <span className="text-xs text-[#6B6863]">{hint}</span>}
      </div>
      <textarea
        id={name}
        name={name}
        required={required}
        placeholder={placeholder}
        rows={rows}
        className="px-3 py-2.5 rounded-lg border border-[#E2E2DE] bg-white text-sm text-[#0D0D0B] placeholder:text-[#B0ADA8] focus:outline-none focus:ring-2 focus:ring-[#1B3A2B]/20 focus:border-[#1B3A2B] resize-none transition-colors leading-relaxed"
      />
    </div>
  );
}
