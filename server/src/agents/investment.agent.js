const withTimeline = require("../utils/withTimeline");

const {

    getCompanyProfile

} = require("../services/company.service");

async function companyNode(state) {

    const company = await getCompanyProfile(state.companyName);

    return {

        company

    };

}

const {

    getMarketData

} = require("../services/market.service");

async function marketNode(state) {

    const market = await getMarketData(state.company.symbol);

    return {

        market

    };

}

const {

    getCompanyNews

} = require("../services/news.service");

async function newsNode(state) {

    const news = await getCompanyNews(state.companyName);

    return {

        news

    };

}

const {

    analyzeInvestment

} = require("../services/gemini.service");

async function analysisNode(state) {

    const analysis = await analyzeInvestment({

        company: state.company,

        market: state.market,

        news: state.news

    });

    return {

        analysis

    };

}
module.exports = {
  companyNode: withTimeline(
    "company",
    "Fetching Company Profile",
    companyNode
  ),

  marketNode: withTimeline(
    "market",
    "Analyzing Financial Data",
    marketNode
  ),

  newsNode: withTimeline(
    "news",
    "Collecting Latest News",
    newsNode
  ),

  analysisNode: withTimeline(
    "analysis",
    "Generating AI Investment Report",
    analysisNode
  ),
};