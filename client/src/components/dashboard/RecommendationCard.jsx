import Card from "../ui/Card";

function RecommendationCard({ analysis }) {
  if (!analysis) {
    return (
      <Card>
        <p className="text-slate-500">
          AI recommendation will appear here.
        </p>
      </Card>
    );
  }
  
  const { recommendation, swot } = analysis;
  
  const confidence =
  recommendation.confidence <= 1
      ? recommendation.confidence * 100
      : recommendation.confidence;
  const color =
    recommendation.decision === "Invest"
      ? "text-green-600"
      : recommendation.decision === "Hold"
      ? "text-yellow-600"
      : "text-red-600";

  return (
    <Card>

      <div className="flex justify-between items-center">

        <div>

          <p className="text-slate-500">
            Recommendation
          </p>

          <h2 className={`text-4xl font-bold ${color}`}>
            {recommendation.decision}
          </h2>

        </div>

        <div className="text-right">

          <p className="text-slate-500">
            Confidence
          </p>

          <p className="text-3xl font-bold">
            {confidence.toFixed(0)}%
          </p>

        </div>

      </div>

      <p className="mt-8 leading-7 text-slate-700">
        {recommendation.reasoning}
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-10">

        <Swot
          title="Strengths"
          items={swot.strengths}
        />

        <Swot
          title="Weaknesses"
          items={swot.weaknesses}
        />

        <Swot
          title="Opportunities"
          items={swot.opportunities}
        />

        <Swot
          title="Threats"
          items={swot.threats}
        />

      </div>

    </Card>
  );
}

function Swot({ title, items }) {
  return (
    <div>

      <h3 className="font-bold text-lg mb-3">
        {title}
      </h3>

      <ul className="space-y-2 list-disc pl-5">

        {items.map((item, index) => (
          <li key={index}>
            {item}
          </li>
        ))}

      </ul>

    </div>
  );
}

export default RecommendationCard;