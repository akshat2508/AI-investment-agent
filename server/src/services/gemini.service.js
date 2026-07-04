const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const analyzeInvestment = async (researchData) => {
 const prompt = `
You are a Senior Equity Research Analyst working at a global investment firm.

Your task is to analyze the following company using ONLY the supplied research data.

Write a professional investment report.

Return ONLY valid JSON.

Schema:

{
  "executiveSummary": "",

  "investmentThesis": [],

  "keyRisks": [],

  "swot": {
    "strengths": [],
    "weaknesses": [],
    "opportunities": [],
    "threats": []
  },

  "recommendation": {
    "decision": "INVEST | HOLD | PASS",
    "confidence": 0,
    "reasoning": ""
  }
}

Rules:

- Executive Summary:
  - 3-5 concise sentences.
  - Professional tone.
  - Mention valuation, growth and overall outlook.

- Investment Thesis:
  - Exactly 3 bullet points.
  - Short.
  - Actionable.

- Key Risks:
  - Exactly 3 bullet points.

- Recommendation:
  - Must be one of:
    INVEST
    HOLD
    PASS

- Confidence:
  - Number between 0 and 100.

Return ONLY JSON.

Research Data:

${JSON.stringify(researchData,null,2)}
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

const cleanResponse = response.text
  .replace(/```json/g, "")
  .replace(/```/g, "")
  .trim();

try {
  return JSON.parse(cleanResponse);
} catch (err) {
  console.error("Invalid JSON from Gemini:");
  console.error(cleanResponse);
  throw err;
}
};

module.exports = {
  analyzeInvestment,
};