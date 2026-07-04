import Card from "../ui/Card";

function FinancialCard({ market }) {
  if (!market) {
    return (
      <Card>
        <p className="font-mono text-sm text-[#5B6B7A]">
          NO FEED — financial metrics will appear here.
        </p>
      </Card>
    );
  }

  const metrics = [
    ["Current Price", `$${market.currentPrice}`],
    ["Market Cap", `$${(market.marketCap / 1e9).toFixed(2)} B`],
    ["P/E Ratio", market.peRatio],
    ["EPS", market.eps],
    ["52W High", `$${market.fiftyTwoWeekHigh}`],
    ["52W Low", `$${market.fiftyTwoWeekLow}`],
    ["Exchange", market.exchange],
    ["Currency", market.currency],
  ];

  return (
    <Card>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {metrics.map(([label, value]) => (
          <div
            key={label}
            className="relative overflow-hidden rounded-md border border-[#212B35] bg-[#0A0E13] p-4"
          >
            <span className="absolute left-0 top-0 h-full w-[3px] bg-[#7C93F5]/40" />
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#5B6B7A]">
              {label}
            </p>
            <p
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
              className="mt-2 text-xl font-medium text-[#E7ECF1]"
            >
              {value}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default FinancialCard;