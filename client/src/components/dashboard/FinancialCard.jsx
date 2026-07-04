import Card from "../ui/Card";

function FinancialCard({ market }) {
  if (!market) {
    return (
      <Card>
        <p className="text-sm text-[#9C9EA3]">
          No data yet — financial metrics will appear here.
        </p>
      </Card>
    );
  }

  const metrics = [
    ["Current price", `$${market.currentPrice}`],
    ["Market cap", `$${(market.marketCap / 1e9).toFixed(2)}B`],
    ["P/E ratio", market.peRatio],
    ["EPS", market.eps],
    ["52W high", `$${market.fiftyTwoWeekHigh}`],
    ["52W low", `$${market.fiftyTwoWeekLow}`],
    ["Exchange", market.exchange],
    ["Currency", market.currency],
  ];

  return (
    <Card>
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-md border border-[#E4E4E1] bg-[#E4E4E1] md:grid-cols-4">
        {metrics.map(([label, value]) => (
          <div key={label} className="bg-white p-4">
            <p
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
              className="text-[10px] uppercase tracking-[0.12em] text-[#9C9EA3]"
            >
              {label}
            </p>
            <p
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
              className="mt-2 text-lg font-medium text-[#16181C]"
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
