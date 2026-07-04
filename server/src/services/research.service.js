const analyzeCompanyResearch = async (company) => {
  return {
    company: {
      name: company,
      industry: "Technology",
      headquarters: "California, USA",
      ceo: "Sample CEO",
    },

    financials: {
      revenueGrowth: "18%",
      peRatio: "28",
      debtToEquity: "0.42",
    },

    news: [
      {
        headline: "Company launches new AI product",
        sentiment: "Positive",
      },
    ],

    swot: {
      strengths: ["Strong brand"],
      weaknesses: ["High valuation"],
      opportunities: ["AI Expansion"],
      threats: ["Competition"],
    },

    recommendation: {
      decision: "INVEST",
      confidence: 87,
      reasoning:
        "Strong fundamentals with positive market momentum.",
    },
  };
};

module.exports = {
  analyzeCompanyResearch,
};