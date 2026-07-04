import Card from "../ui/Card";

function FinancialCard({ market }) {

  if (!market) {
    return (
      <Card>
        <p className="text-slate-500">
          Financial metrics will appear here.
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

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

        {metrics.map(([label, value]) => (
          <div
            key={label}
            className="rounded-xl border p-4"
          >
            <p className="text-sm text-slate-500">
              {label}
            </p>

            <p className="mt-2 text-xl font-bold">
              {value}
            </p>
          </div>
        ))}

      </div>

    </Card>
  );
}

export default FinancialCard;