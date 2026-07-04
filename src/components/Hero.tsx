import Image from "next/image";
import Link from "next/link";

const BOOKING_HREF = "/book";

const STATS = [
  {
    value: "1 in 5",
    label: "European employees considers quitting in their first week",
  },
  {
    value: "3×",
    label: "more likely to stay when employees have a genuine work friendship",
  },
  {
    value: "€240B",
    label: "lost to poor engagement across Europe annually",
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center">
      {/* Background image */}
      <Image
        src="/hero.png"
        alt="Person wearing a cap reading 'connection makes us human' in a metro station"
        fill
        priority
        className="object-cover grayscale object-[65%_30%]"
        sizes="100vw"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0B]/85 via-[#0D0D0B]/60 to-[#0D0D0B]/25 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0D0D0B]/60 to-transparent pointer-events-none lg:hidden" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-20 lg:py-28">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="h-px w-6 bg-[#A8C4B4]" />
            <span className="text-xs font-medium tracking-widest uppercase text-[#A8C4B4]">
              A platform built for humans
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-white mb-6 text-pretty">
            Social infrastructure for the modern workplace.
          </h1>

          {/* Mission statement */}
          <p className="text-lg text-white/70 leading-relaxed max-w-xl mb-10">
            Treehouze is a social infrastructure layer built to address the loneliness
            epidemic at its most tractable entry point: the workplace. We start
            with new hires — because that&apos;s where belonging is most fragile.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <Link
              href={BOOKING_HREF}
              className="inline-flex items-center h-13 px-8 rounded-full bg-white text-[#0D0D0B] text-base font-bold hover:bg-[#EBF0EC] transition-colors"
            >
              Join the pilot
            </Link>
            <a
              href="#solution"
              className="inline-flex items-center h-13 px-8 rounded-full border border-white/30 text-white text-base font-semibold hover:border-white/70 hover:bg-white/10 transition-colors gap-2 group"
            >
              How it works
              <span className="group-hover:translate-x-0.5 transition-transform inline-block">→</span>
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 pt-8 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {STATS.map(({ value, label }) => (
              <div key={value}>
                <p className="text-4xl sm:text-5xl font-black text-white leading-none mb-2">{value}</p>
                <p className="text-xs text-white/55 leading-snug">{label}</p>
              </div>
            ))}
          </div>

          <p className="mt-4 text-[10px] text-white/35">Source: Gallup 2025 Global Report</p>
        </div>
      </div>
    </section>
  );
}
