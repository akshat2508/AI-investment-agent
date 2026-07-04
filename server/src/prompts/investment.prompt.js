const buildInvestmentPrompt = (state) => {
  return `
You are an experienced investment analyst.

Analyze the following company using the provided research.

Return:
- SWOT
- Investment Recommendation
- Confidence Score
- Detailed Reasoning
`;
};

module.exports = {
  buildInvestmentPrompt,
};