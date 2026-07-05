"use client";

import { useActionState } from "react";
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

        {/* Hero — full screen, dark green, FinalCTA style */}
        <section className="bg-[#1B3A2B] min-h-[calc(100vh-4rem)] flex items-center px-6 py-20">
          <div className="max-w-4xl mx-auto text-center w-full">

            <p className="text-xs font-medium tracking-widest uppercase text-[#A8C4B4] mb-8">
              City Companion · Berlin Beta
            </p>

            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.0] text-balance mb-10">
              Find personalised events in your city.
            </h1>

            <div className="w-16 h-px bg-[#A8C4B4]/30 mx-auto mb-10" />

            <p className="text-base text-[#A8C4B4] leading-relaxed mb-10 max-w-lg mx-auto">
              City Companion connects new arrivals with local events and communities
              tailored to who they are. Launching in Berlin first — spots are limited.
            </p>

            {/* Waitlist form */}
            {state.status === "success" ? (
              <div className="flex flex-col items-center gap-3">
                <p className="text-white font-bold text-lg">You&apos;re on the list.</p>
                <p className="text-sm text-[#A8C4B4]">
                  We&apos;ll reach out as soon as Berlin Beta opens.
                </p>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-3">
                <form action={formAction} className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto">
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="deine@email.de"
                    className="flex-1 h-13 px-5 rounded-full border border-white/30 bg-transparent text-white text-base placeholder:text-white/40 focus:outline-none focus:border-white/70 transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={isPending}
                    className="inline-flex items-center justify-center h-13 px-8 rounded-full bg-white text-[#1B3A2B] text-base font-bold hover:bg-[#EBF0EC] disabled:opacity-60 disabled:cursor-not-allowed transition-colors shrink-0"
                  >
                    {isPending ? (
                      <span className="w-4 h-4 rounded-full border-2 border-[#1B3A2B]/30 border-t-[#1B3A2B] animate-spin" />
                    ) : (
                      "Join waitlist →"
                    )}
                  </button>
                </form>
                {state.status === "error" && (
                  <p className="text-sm text-red-300">{state.message}</p>
                )}
                <p className="text-xs text-[#A8C4B4]/60">
                  Kein Spam. Nur eine Nachricht, wenn wir live gehen.
                </p>
              </div>
            )}

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
