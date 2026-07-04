const TIMELINE = [
  {
    marker: "Day 0",
    title: "Invite",
    body: "Treehouze invite sent. Personality and interest questionnaire unlocked.",
  },
  {
    marker: "Week 1",
    title: "Arrival",
    body: "Welcome pack delivered. Personalised city guide and social recommendations generated.",
  },
  {
    marker: "Week 2",
    title: "Connection",
    body: "Arrival event. Cross-company social connection with other new arrivals.",
  },
  {
    marker: "First 30 days",
    title: "Check-ins",
    body: "EMA check-ins begin. Lightweight prompts help maintain new social contacts.",
  },
  {
    marker: "First 90 days",
    title: "Insights",
    body: "Social health dashboard gives HR visibility into culture and integration progress.",
  },
];

export default function NinetyDaysSection() {
  return (
    <section className="bg-[#FFFFFF] py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="max-w-3xl mb-16 pb-12 border-b border-[#E2E2DE]">
          <span className="text-xs font-medium tracking-widest uppercase text-[#1B3A2B] mb-6 block">
            The first 90 days
          </span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#0D0D0B] leading-[1.05] text-pretty">
            The window that defines loyalty, performance, and whether people stay.
          </h2>
          <p className="mt-6 text-base text-[#6B6863] leading-relaxed max-w-xl">
            Treehouze structures the social journey from the moment an offer is
            accepted — so new hires build real connections before isolation sets in.
          </p>
        </div>

        {/* 5-col phase cards — same visual language as Solution section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-[#E2E2DE]">
          {TIMELINE.map(({ marker, title, body }, i) => (
            <div key={marker} className="relative bg-[#FFFFFF] p-6 flex flex-col gap-4 overflow-hidden">
              {/* Decorative background number */}
              <span
                aria-hidden="true"
                className="absolute bottom-3 right-3 text-[6rem] font-black leading-none select-none pointer-events-none text-[#0D0D0B]/[0.04]"
              >
                {i + 1}
              </span>

              {/* Time marker + green accent */}
              <div className="flex flex-col gap-2 relative z-10">
                <span className="text-xs font-semibold text-[#1B3A2B] uppercase tracking-wider">
                  {marker}
                </span>
                <div className="w-6 h-0.5 bg-[#1B3A2B]" />
              </div>

              <h3 className="text-base font-semibold text-[#0D0D0B] leading-snug relative z-10">
                {title}
              </h3>
              <p className="text-xs text-[#6B6863] leading-relaxed relative z-10">{body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
