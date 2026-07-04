const { Annotation } = require("@langchain/langgraph");

const InvestmentState = Annotation.Root({

    companyName: Annotation(),

    company: Annotation(),

    market: Annotation(),

    news: Annotation(),

    analysis: Annotation()

});

module.exports = InvestmentState;