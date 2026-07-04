const FEATURES = [
  {
    label: "Gentle check-ins, not surveillance",
    description:
      "A few short prompts per week, delivered via Slack. Low friction for employees. Consistent signal for People teams. Based on EMA methodology used in psychological research.",
  },
  {
    label: "Belonging signals, not raw data",
    description:
      "We surface patterns — who is integrating, where friction is building — without exposing individual responses. Privacy-first by design.",
  },
  {
    label: "Clear actions, not dashboards to interpret",
    description:
      "When something needs attention, Treehouze tells you what to do about it. An introduction to make, a message to send, a moment to create.",
  },
];

export default function MVPSection() {
  return (
    <section id="product" className="py-24 px-6 bg-[#FFFFFF]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="text-xs font-medium tracking-widest uppercase text-[#1B3A2B] mb-4 block">
              Where we start
            </span>
            <h2 className="text-5xl sm:text-6xl font-black tracking-tight text-[#0D0D0B] leading-[1.05] mb-6">
              We begin where people already talk.
            </h2>
            <p className="text-base text-[#6B6863] leading-relaxed mb-6">
              Right now, Treehouze lives in Slack. Not because we&apos;re a bot —
              but because that&apos;s where teams already are. We meet people where
              they work, collect signals quietly, and give People teams the
              visibility they&apos;ve never had before.
            </p>
            <p className="text-base text-[#6B6863] leading-relaxed">
              This is the first layer. The platform grows with the relationship.
            </p>

            {/* Slack badge */}
            <div className="mt-8 inline-flex items-center gap-2.5 border border-[#E2E2DE] rounded-full px-4 py-2 bg-[#FFFFFF]">
              <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none">
                <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" fill="currentColor" className="text-[#4A154B]"/>
              </svg>
              <span className="text-sm font-medium text-[#0D0D0B]">
                Available as a Slack integration
              </span>
            </div>
          </div>

          {/* Right — features */}
          <div className="flex flex-col gap-0 border border-[#E2E2DE] rounded-2xl overflow-hidden bg-[#FFFFFF]">
            {FEATURES.map(({ label, description }, i) => (
              <div
                key={label}
                className={`p-6 flex flex-col gap-2 ${i < FEATURES.length - 1 ? "border-b border-[#E2E2DE]" : ""}`}
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1B3A2B] shrink-0" />
                  <span className="text-sm font-semibold text-[#0D0D0B]">{label}</span>
                </div>
                <p className="text-sm text-[#6B6863] leading-relaxed pl-3.5">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
