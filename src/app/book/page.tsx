import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Book a Discovery Call — Treehouze",
  description:
    "Tell us who you are and what brought you here. We're looking for pilot partners and People teams ready to rethink new hire integration.",
};

const WHY_LIST = [
  "We read every message ourselves. No automated replies, no sales funnel.",
  "We're building with a small group of pilot partners — not selling to a list.",
  "You'll hear back within 2–3 days. Usually sooner.",
];

export default function BookPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FFFFFF]">
        <div className="max-w-6xl mx-auto px-6 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24 items-start">
            {/* Left — context */}
            <div className="lg:col-span-2 lg:sticky lg:top-28">
              <span className="text-xs font-medium tracking-widest uppercase text-[#1B3A2B] mb-4 block">
                Discovery call
              </span>
              <h1 className="text-5xl sm:text-6xl font-black tracking-tight text-[#0D0D0B] leading-[1.05] mb-4 text-pretty">
                Let&apos;s build this together.
              </h1>
              <p className="text-base text-[#6B6863] leading-relaxed mb-10">
                We&apos;re a small team working on a hard problem. We&apos;re not
                looking for customers yet — we&apos;re looking for the right
                partners to build with. Tell us who you are and why this matters
                to you.
              </p>

              <ul className="flex flex-col gap-4">
                {WHY_LIST.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1B3A2B] shrink-0" />
                    <span className="text-sm text-[#6B6863] leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-12 pt-8 border-t border-[#E2E2DE]">
                <p className="text-xs text-[#6B6863]">
                  Or reach us directly at{" "}
                  <a
                    href="mailto:hello@treehouze.de"
                    className="text-[#1B3A2B] hover:underline"
                  >
                    hello@treehouze.de
                  </a>
                </p>
              </div>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-3 bg-white border border-[#E2E2DE] rounded-2xl p-8 sm:p-10">
              <BookingForm />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
