import { ArrowUpRight, Rocket, PauseCircle, AlertTriangle } from "lucide-react";

const DECISION_MAP = {
  Invest: { label: "STRONG BUY", color: "#3ECF8E", icon: Rocket },
  Hold: { label: "HOLD", color: "#F0B429", icon: PauseCircle },
  Avoid: { label: "AVOID", color: "#FF5C5C", icon: AlertTriangle },
};

function ResultsPanel({ analysis, loading }) {
  const company = analysis?.company;
  const market = analysis?.market;
  const news = analysis?.news;
  const rec = analysis?.analysis?.recommendation;

  return (
    <div className="space-y-6">
      <Panel title="Research Results" badge={loading ? "In Progress" : company ? "Complete" : null} spinning={loading}>
        {!company ? (
          <Empty text="Run a search to see company results here." />
        ) : (
          <div>
            <div className="flex items-center gap-2">
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="text-lg font-semibold text-[#E7ECF1]">
                {company.name}
              </h3>
              {company.symbol && (
                <span className="rounded border border-[#1C2530] px-1.5 py-0.5 text-[10px] font-mono text-[#7C8894]">
                  {company.symbol}
                </span>
              )}
            </div>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {[company.sector, company.industry].filter(Boolean).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#1C2530] bg-[#0B0F14] px-2 py-0.5 text-[10px] text-[#7C8894]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {market && (
          <div className="mt-5 grid grid-cols-3 gap-3 border-t border-[#1C2530] pt-4">
            <Stat label="Market Cap" value={market.marketCap ? `$${(market.marketCap / 1e12).toFixed(2)}T` : "—"} />
            <Stat label="Price" value={market.currentPrice ? `$${market.currentPrice}` : "—"} />
            <Stat
              label="52W Range"
              value={
                market.fiftyTwoWeekLow && market.fiftyTwoWeekHigh
                  ? `$${market.fiftyTwoWeekLow} - $${market.fiftyTwoWeekHigh}`
                  : "—"
              }
            />
          </div>
        )}
      </Panel>

      <Panel title="Key Financial Metrics" badge={market ? "TTM Data" : null}>
        {!market ? (
          <Empty text="Financial metrics will appear here." />
        ) : (
          <div className="grid grid-cols-2 gap-3">
            <Stat box label="EPS" value={market.eps ?? "—"} />
            <Stat box label="P/E Ratio" value={market.peRatio ?? "—"} />
            <Stat box label="Exchange" value={market.exchange ?? "—"} />
            <Stat box label="Currency" value={market.currency ?? "—"} />
          </div>
        )}
      </Panel>

      <Panel title="Latest News" badge={news?.length ? `${news.length} Articles` : null}>
        {!news?.length ? (
          <Empty text="Latest news will appear here." />
        ) : (
          <div className="space-y-4">
            {news.slice(0, 5).map((article, i) => (
              <a
                key={i}
                href={article.url}
                target="_blank"
                rel="noreferrer"
                className="group flex items-start justify-between gap-2 border-b border-[#1C2530] pb-3 last:border-0 last:pb-0"
              >
                <p className="text-sm leading-snug text-[#C7D0D9] group-hover:text-[#E7ECF1]">
                  {article.title}
                </p>
                <ArrowUpRight size={14} className="mt-0.5 shrink-0 text-[#4B5A68] group-hover:text-[#7C93F5]" />
              </a>
            ))}
          </div>
        )}
      </Panel>

      <Panel title="Investment Recommendation" badge="AI Generated">
        {!rec ? <Empty text="The AI recommendation will appear here." /> : <RecommendationSummary analysis={analysis.analysis} />}
      </Panel>
    </div>
  );
}

function RecommendationSummary({ analysis }) {
  const { recommendation } = analysis;
  const meta = DECISION_MAP[recommendation.decision] || DECISION_MAP.Hold;
  const Icon = meta.icon;
  const confidence = recommendation.confidence <= 1 ? recommendation.confidence * 100 : recommendation.confidence;

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2" style={{ color: meta.color }}>
          <Icon size={18} />
          <span style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="text-lg font-bold">
            {meta.label}
          </span>
        </div>
        <span className="text-xs text-[#7C8894]">
          Confidence: <span className="font-medium text-[#E7ECF1]">{confidence.toFixed(0)}%</span>
        </span>
      </div>

      <div className="mt-2 h-1.5 rounded-full bg-[#1C2530]">
        <div className="h-full rounded-full" style={{ width: `${confidence}%`, backgroundColor: meta.color }} />
      </div>

      <p className="mt-4 text-sm leading-6 text-[#8A98A6]">{recommendation.reasoning}</p>
    </div>
  );
}

function Panel({ title, badge, spinning, children }) {
  return (
    <div className="rounded-2xl border border-[#1C2530] bg-[#0B0F14] p-5">
      <div className="mb-4 flex items-center justify-between">
        <p
          style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          className="text-[11px] uppercase tracking-[0.16em] text-[#7C8894]"
        >
          {title}
        </p>
        {badge && (
          <span className="flex items-center gap-1.5 rounded-full border border-[#1C2530] px-2.5 py-1 text-[10px] font-medium text-[#7C8894]">
            {spinning && <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#7C93F5]" />}
            {badge}
          </span>
        )}
      </div>
      {children}
    </div>
  );
}

function Stat({ label, value, box }) {
  return (
    <div className={box ? "rounded-xl border border-[#1C2530] bg-[#070A0F] p-3" : ""}>
      <p
        style={{ fontFamily: "'IBM Plex Mono', monospace" }}
        className="text-[10px] uppercase tracking-[0.1em] text-[#4B5A68]"
      >
        {label}
      </p>
      <p style={{ fontFamily: "'IBM Plex Mono', monospace" }} className="mt-1 text-sm font-medium text-[#E7ECF1]">
        {value}
      </p>
    </div>
  );
}

function Empty({ text }) {
  return <p className="text-sm text-[#4B5A68]">{text}</p>;
}

export default ResultsPanel;