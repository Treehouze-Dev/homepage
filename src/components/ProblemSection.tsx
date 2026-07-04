const PROBLEMS = [
  {
    number: "01",
    title: "New hires are the most socially exposed people in any organisation.",
    body: "On day one, they know no one. They are performing competence while quietly wondering whether this place is really for them. That question gets answered in the first few weeks — whether companies are paying attention or not.",
  },
  {
    number: "02",
    title: "Work is one of the last places where belonging can scale.",
    body: "Most adults build much of their social life around work. Yet companies invest almost nothing in helping people actually connect. Operational onboarding is thorough. Social onboarding barely exists.",
  },
  {
    number: "03",
    title: "Disconnection doesn't announce itself until it's too late.",
    body: "By the time HR sees a signal — a resignation, a survey response, a manager's concern — the decision to leave has usually already been made. The window for meaningful intervention has closed.",
  },
];

export default function ProblemSection() {
  return (
    <section id="problem" className="bg-[#0D0D0B] py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Full-width header */}
        <div className="mb-16 pb-12 border-b border-white/10">
          <span className="text-xs font-medium tracking-widest uppercase text-[#A8C4B4] mb-6 block">
            The human problem
          </span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05] text-pretty max-w-3xl">
            People arrive to work. Not necessarily to somewhere they belong.
          </h2>
        </div>

        {/* Editorial rows */}
        <div className="flex flex-col">
          {PROBLEMS.map(({ number, title, body }) => (
            <div
              key={number}
              className="flex gap-8 md:gap-12 py-10 border-b border-white/10 last:border-0 items-start"
            >
              <span className="shrink-0 w-24 text-5xl sm:text-6xl font-black text-white leading-none">
                {number}
              </span>
              <div className="flex flex-col md:flex-row md:gap-10 flex-1 gap-4">
                <h3 className="md:flex-1 text-xl sm:text-2xl font-semibold text-white leading-snug">
                  {title}
                </h3>
                <p className="md:flex-1 text-sm text-white/60 leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
