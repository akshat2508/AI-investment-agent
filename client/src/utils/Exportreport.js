export function exportReport(analysis) {
  if (!analysis) return;

  const { company, market, news, analysis: report } = analysis;
  const lines = [];

  lines.push(`# Investment Research Report — ${company?.name ?? "Unknown Company"}`);
  lines.push(`Generated: ${new Date().toLocaleString()}`);
  lines.push("");

  if (company) {
    lines.push("## Company Overview");
    if (company.description) lines.push(company.description);
    lines.push("");
    lines.push(`- Industry: ${company.industry ?? "—"}`);
    lines.push(`- Sector: ${company.sector ?? "—"}`);
    lines.push(`- Country: ${company.country ?? "—"}`);
    if (company.employees) lines.push(`- Employees: ${company.employees}`);
    if (company.website) lines.push(`- Website: ${company.website}`);
    lines.push("");
  }

  if (market) {
    lines.push("## Financial Metrics");
    lines.push(`- Current Price: $${market.currentPrice ?? "—"}`);
    lines.push(`- Market Cap: ${market.marketCap ? `$${(market.marketCap / 1e9).toFixed(2)}B` : "—"}`);
    lines.push(`- P/E Ratio: ${market.peRatio ?? "—"}`);
    lines.push(`- EPS: ${market.eps ?? "—"}`);
    lines.push(`- 52-Week Range: $${market.fiftyTwoWeekLow ?? "—"} – $${market.fiftyTwoWeekHigh ?? "—"}`);
    lines.push(`- Exchange: ${market.exchange ?? "—"}`);
    lines.push("");
  }

  if (news?.length) {
    lines.push("## Latest News");
    news.forEach((article, i) => {
      lines.push(`${i + 1}. **${article.title}**`);
      if (article.url) lines.push(`   ${article.url}`);
    });
    lines.push("");
  }

  if (report?.recommendation) {
    const { recommendation, swot } = report;
    const confidence =
      recommendation.confidence <= 1 ? recommendation.confidence * 100 : recommendation.confidence;

    lines.push("## Investment Recommendation");
    lines.push(`Decision: **${recommendation.decision}**`);
    lines.push(`Confidence: ${confidence.toFixed(0)}%`);
    lines.push("");
    if (recommendation.reasoning) lines.push(recommendation.reasoning);
    lines.push("");

    if (swot) {
      lines.push("### SWOT Analysis");
      lines.push("**Strengths**");
      (swot.strengths ?? []).forEach((s) => lines.push(`- ${s}`));
      lines.push("**Weaknesses**");
      (swot.weaknesses ?? []).forEach((s) => lines.push(`- ${s}`));
      lines.push("**Opportunities**");
      (swot.opportunities ?? []).forEach((s) => lines.push(`- ${s}`));
      lines.push("**Threats**");
      (swot.threats ?? []).forEach((s) => lines.push(`- ${s}`));
    }
  }

  const blob = new Blob([lines.join("\n")], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  const safeName = (company?.name ?? "research-report").toLowerCase().replace(/\s+/g, "-");

  a.href = url;
  a.download = `${safeName}-report.md`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}