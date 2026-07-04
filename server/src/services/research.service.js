const investmentGraph = require("../agents/investment.graph");

const analyzeCompanyResearch = async (companyName) => {

    const result = await investmentGraph.invoke({

        companyName

    });

    return result;

};

module.exports = {

    analyzeCompanyResearch

};