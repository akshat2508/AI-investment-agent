import Card from "../ui/Card";

function RecommendationCard({ analysis }) {
  if (!analysis) {
    return (
      <Card>
        <p className="text-sm text-[#9C9EA3]">
          No verdict yet — the AI recommendation will appear here.
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
      ? { text: "text-[#1F7A5C]", ring: "#1F7A5C" }
      : recommendation.decision === "Hold"
      ? { text: "text-[#B7791F]", ring: "#B7791F" }
      : { text: "text-[#B23A3A]", ring: "#B23A3A" };

  const r = 50;
  const circumference = 2 * Math.PI * r;
  const offset = circumference * (1 - confidence / 100);

  return (
    <Card>
      <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
        <div>
          <p
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            className="text-[11px] uppercase tracking-[0.15em] text-[#9C9EA3]"
          >
            Recommendation
          </p>
          <h2 className={`mt-1 text-4xl font-bold tracking-tight ${palette.text}`}>
            {recommendation.decision}
          </h2>
        </div>

        <div className="relative h-28 w-28 shrink-0">
          <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
            <circle cx="60" cy="60" r={r} fill="none" stroke="#E4E4E1" strokeWidth="7" />
            <circle
              cx="60"
              cy="60"
              r={r}
              fill="none"
              stroke={palette.ring}
              strokeWidth="7"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              style={{ transition: "stroke-dashoffset 0.6s ease" }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
              className="text-xl font-semibold text-[#16181C]"
            >
              {confidence.toFixed(0)}%
            </span>
            <span className="text-[9px] uppercase tracking-[0.12em] text-[#9C9EA3]">
              Confidence
            </span>
          </div>
        </div>
      </div>

      <p className="mt-8 leading-7 text-[#5B5D63]">{recommendation.reasoning}</p>

      <div className="mt-10 grid gap-3 sm:grid-cols-2">
        <Swot letter="S" title="Strengths" items={swot.strengths} accent="#1F7A5C" />
        <Swot letter="W" title="Weaknesses" items={swot.weaknesses} accent="#B23A3A" />
        <Swot letter="O" title="Opportunities" items={swot.opportunities} accent="#1F3A5F" />
        <Swot letter="T" title="Threats" items={swot.threats} accent="#B7791F" />
      </div>
    </Card>
  );
}

function Swot({ letter, title, items, accent }) {
  return (
    <div className="rounded-md border border-[#E4E4E1] p-4">
      <div className="flex items-center gap-2">
        <span
          style={{ borderColor: accent, color: accent }}
          className="flex h-5 w-5 items-center justify-center rounded border text-[10px] font-semibold"
        >
          {letter}
        </span>
        <h3 className="font-semibold text-[#16181C]">{title}</h3>
      </div>

      <ul className="mt-3 space-y-2 pl-1">
        {items.map((item, index) => (
          <li key={index} className="flex gap-2 text-sm leading-6 text-[#5B5D63]">
            <span style={{ backgroundColor: accent }} className="mt-2 h-1 w-1 shrink-0 rounded-full" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecommendationCard;
