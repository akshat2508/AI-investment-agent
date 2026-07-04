const { getCompanyProfile } = require("./company.service");
const { getMarketData } = require("./market.service");
const { getCompanyNews } = require("./news.service");
const { analyzeInvestment } = require("./gemini.service");

const analyzeCompanyResearch = async (companyName) => {
    try {

       console.log("Step 1");
const company = await getCompanyProfile(companyName);

console.log("Step 2");
const market = await getMarketData(company.symbol);

console.log("Step 3");
const news = await getCompanyNews(companyName);

console.log("Step 4");
const aiResult = await analyzeInvestment({
    company,
    market,
    news
});
        console.log("✅ Gemini");

        return {
            company,
            market,
            news,
            analysis:aiResult
        };

    } catch (err) {
        console.error(err);
        throw err;
    }
};

module.exports = {
    analyzeCompanyResearch
};