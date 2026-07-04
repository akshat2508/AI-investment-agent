const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const analyzeInvestment = async (researchData) => {
  const prompt = `
You are a senior equity research analyst.

Analyze the following research.

Return ONLY valid JSON.

Schema:

{
  "swot":{
    "strengths":[],
    "weaknesses":[],
    "opportunities":[],
    "threats":[]
  },
  "recommendation":{
    "decision":"",
    "confidence":0,
    "reasoning":""
  }
}

Research:

${JSON.stringify(researchData, null, 2)}
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  return response.text;
};

module.exports = {
  analyzeInvestment,
};