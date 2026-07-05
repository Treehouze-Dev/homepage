"use client";

import { useActionState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { submitWaitlist, type WaitlistState } from "@/lib/actions";

const initial: WaitlistState = { status: "idle" };

export default function CityCompanionPage() {
  const [state, formAction, isPending] = useActionState(submitWaitlist, initial);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FFFFFF]">

        {/* Hero — dark */}
        <section className="bg-[#0D0D0B] py-32 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-10">
              <span className="h-px w-6 bg-[#A8C4B4]" />
              <span className="text-xs font-medium tracking-widest uppercase text-[#A8C4B4]">
                City Companion
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black tracking-tight text-white leading-[1.0] text-pretty mb-8">
              Find personalised events in your city.
            </h1>
            <p className="text-base text-white/60 leading-relaxed max-w-xl">
              City Companion connects new arrivals with local events, communities,
              and experiences tailored to who they are — not just where they live.
            </p>
          </div>
        </section>

        {/* Berlin Beta + Waitlist */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">

            {/* Berlin Beta callout */}
            <div className="mb-16 pb-16 border-b border-[#E2E2DE]">
              <div className="inline-flex items-center gap-3 bg-[#EBF0EC] rounded-full px-5 py-2.5 mb-8">
                <span className="w-2 h-2 rounded-full bg-[#1B3A2B] animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-widest text-[#1B3A2B]">
                  Berlin Beta — Starting 2026
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0D0D0B] leading-[1.05] text-pretty mb-6">
                We&apos;re launching in Berlin first.
              </h2>
              <p className="text-base text-[#6B6863] leading-relaxed max-w-2xl">
                Berlin is home to thousands of international newcomers every month.
                It&apos;s the perfect city to prove that technology can turn a new
                address into a genuine home. Beta access is limited — join the
                waitlist to be among the first.
              </p>
            </div>

            {/* Waitlist form */}
            {state.status === "success" ? (
              <div className="flex flex-col gap-6 py-8">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#EBF0EC]">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth={2.5} stroke="#1B3A2B" className="w-6 h-6">
                    <path d="M4.5 12.75l6 6 9-13.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-black tracking-tight text-[#0D0D0B] mb-2">
                    You&apos;re on the list.
                  </h3>
                  <p className="text-base text-[#6B6863] leading-relaxed max-w-md">
                    We&apos;ll reach out as soon as Berlin Beta opens. Thanks for
                    your interest.
                  </p>
                </div>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#1B3A2B] hover:underline"
                >
                  ← Back to homepage
                </Link>
              </div>
            ) : (
              <div className="max-w-xl">
                <h3 className="text-xl font-black tracking-tight text-[#0D0D0B] mb-2">
                  Join the waitlist
                </h3>
                <p className="text-sm text-[#6B6863] mb-8">
                  Be the first to access City Companion when we launch in Berlin.
                </p>
                <form action={formAction} className="flex flex-col gap-4">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="deine@email.de"
                      className="flex-1 h-13 px-5 rounded-full border border-[#E2E2DE] bg-white text-sm text-[#0D0D0B] placeholder:text-[#B0ADA8] focus:outline-none focus:ring-2 focus:ring-[#1B3A2B]/20 focus:border-[#1B3A2B] transition-colors"
                    />
                    <button
                      type="submit"
                      disabled={isPending}
                      className="inline-flex items-center justify-center h-13 px-8 rounded-full bg-[#0D0D0B] text-white text-sm font-bold hover:bg-[#1B3A2B] disabled:opacity-60 disabled:cursor-not-allowed transition-colors shrink-0"
                    >
                      {isPending ? (
                        <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      ) : (
                        "Join waitlist →"
                      )}
                    </button>
                  </div>

                  {state.status === "error" && (
                    <p className="text-sm text-red-600 pl-1">{state.message}</p>
                  )}

                  <p className="text-xs text-[#B0ADA8] pl-1">
                    Kein Spam. Nur eine Nachricht, wenn wir live gehen.
                  </p>
                </form>
              </div>
            )}

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
