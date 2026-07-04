const PILLARS = [
  {
    step: "Detect",
    title: "See what human connection looks like — and where it's missing.",
    body: "Lightweight check-ins surface whether new hires are building connections or quietly falling behind. Signals appear early, while there is still time to act.",
  },
  {
    step: "Understand",
    title: "Turn belonging signals into something you can act on.",
    body: "Treehouze structures what is usually invisible — who is integrating, who is isolated, where cultural friction is building. Not surveillance. Structured empathy.",
  },
  {
    step: "Intervene",
    title: "Act at the right moment with the right action.",
    body: "People teams receive clear prompts — an introduction to make, a check-in to schedule, a social moment to create. Small actions, at the right time, change outcomes.",
  },
];

export default function SolutionSection() {
  return (
    <section id="solution" className="py-24 px-6 bg-[#FFFFFF]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-medium tracking-widest uppercase text-[#1B3A2B] mb-4 block">
            What we built
          </span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#0D0D0B] leading-[1.05] text-pretty">
            A system that makes belonging less fragile.
          </h2>
        </div>

        {/* 3-col cards with decorative background numbers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E2E2DE]">
          {PILLARS.map(({ step, title, body }, i) => (
            <div key={step} className="relative bg-[#FFFFFF] p-8 flex flex-col gap-4 overflow-hidden">
              {/* Decorative background number */}
              <span
                aria-hidden="true"
                className="absolute bottom-3 right-4 text-[7rem] font-black leading-none select-none pointer-events-none text-[#0D0D0B]/[0.04]"
              >
                {i + 1}
              </span>

              {/* Step label + green accent */}
              <div className="flex flex-col gap-3 relative z-10">
                <span className="text-xs font-semibold text-[#1B3A2B] uppercase tracking-wider">
                  {step}
                </span>
                <div className="w-8 h-0.5 bg-[#1B3A2B]" />
              </div>

              <h3 className="text-base font-semibold text-[#0D0D0B] leading-snug relative z-10">
                {title}
              </h3>
              <p className="text-sm text-[#6B6863] leading-relaxed relative z-10">{body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
