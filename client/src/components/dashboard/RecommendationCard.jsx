import Card from "../ui/Card";

function RecommendationCard({ analysis }) {
  if (!analysis) {
    return (
      <Card>
        <p className="font-mono text-sm text-[#5B6B7A]">
          AWAITING VERDICT — AI recommendation will appear here.
        </p>
      </Card>
    );
  }

  const { recommendation, swot } = analysis;

  const confidence =
    recommendation.confidence <= 1
      ? recommendation.confidence * 100
      : recommendation.confidence;

  const palette =
    recommendation.decision === "Invest"
      ? { text: "text-[#2FD180]", ring: "#2FD180" }
      : recommendation.decision === "Hold"
      ? { text: "text-[#F5B942]", ring: "#F5B942" }
      : { text: "text-[#F2596B]", ring: "#F2596B" };

  const r = 54;
  const circumference = 2 * Math.PI * r;
  const offset = circumference * (1 - confidence / 100);

  return (
    <Card>
      <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#5B6B7A]">
            Recommendation
          </p>
          <h2
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            className={`mt-1 text-4xl font-bold ${palette.text}`}
          >
            {recommendation.decision}
          </h2>
        </div>

        {/* signature confidence dial */}
        <div className="relative h-32 w-32 shrink-0">
          <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
            <circle
              cx="60"
              cy="60"
              r={r}
              fill="none"
              stroke="#212B35"
              strokeWidth="8"
            />
            <circle
              cx="60"
              cy="60"
              r={r}
              fill="none"
              stroke={palette.ring}
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              style={{ transition: "stroke-dashoffset 0.6s ease" }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
              className="text-2xl font-semibold text-[#E7ECF1]"
            >
              {confidence.toFixed(0)}%
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#5B6B7A]">
              Confidence
            </span>
          </div>
        </div>
      </div>

      <p className="mt-8 leading-7 text-[#8A99A8]">
        {recommendation.reasoning}
      </p>

      <div className="mt-10 grid gap-3 sm:grid-cols-2">
        <Swot letter="S" title="Strengths" items={swot.strengths} accent="#2FD180" />
        <Swot letter="W" title="Weaknesses" items={swot.weaknesses} accent="#F2596B" />
        <Swot letter="O" title="Opportunities" items={swot.opportunities} accent="#7C93F5" />
        <Swot letter="T" title="Threats" items={swot.threats} accent="#F5B942" />
      </div>
    </Card>
  );
}

function Swot({ letter, title, items, accent }) {
  return (
    <div className="rounded-md border border-[#212B35] bg-[#0A0E13] p-4">
      <div className="flex items-center gap-2">
        <span
          style={{ borderColor: accent, color: accent }}
          className="flex h-5 w-5 items-center justify-center rounded border font-mono text-[10px] font-semibold"
        >
          {letter}
        </span>
        <h3
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          className="font-semibold text-[#E7ECF1]"
        >
          {title}
        </h3>
      </div>

      <ul className="mt-3 space-y-2 pl-1">
        {items.map((item, index) => (
          <li key={index} className="flex gap-2 text-sm text-[#8A99A8]">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#5B6B7A]" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecommendationCard;