import Link from "next/link";

const BOOKING_HREF = "/book";

export default function FinalCTA() {
  return (
    <section id="contact" className="bg-[#1B3A2B] py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">

        <p className="text-xs font-medium tracking-widest uppercase text-[#A8C4B4] mb-8">
          Join the pilot
        </p>

        <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.0] text-balance mb-10">
          The loneliness epidemic has a tractable entry point. We found it.
        </h2>

        <div className="w-16 h-px bg-[#A8C4B4]/30 mx-auto mb-10" />

        <p className="text-base text-[#A8C4B4] leading-relaxed mb-10 max-w-lg mx-auto">
          We&apos;re building with a small group of European companies who believe
          belonging should be a system, not a hope. If that&apos;s you — let&apos;s
          build this together.
        </p>

        <Link
          href={BOOKING_HREF}
          className="inline-flex items-center h-13 px-8 rounded-full bg-white text-[#1B3A2B] text-base font-bold hover:bg-[#EBF0EC] transition-colors"
        >
          Join the pilot →
        </Link>

      </div>
    </section>
  );
}
