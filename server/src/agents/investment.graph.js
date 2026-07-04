
const { StateGraph, START, END } = require("@langchain/langgraph");

const InvestmentState = require("./investment.state");

const {

    companyNode,

    marketNode,

    newsNode,

    analysisNode

} = require("./investment.agent");

const graph = new StateGraph(InvestmentState)

.addNode("fetchCompany", companyNode)
.addNode("fetchMarket", marketNode)
.addNode("fetchNews", newsNode)
.addNode("generateAnalysis", analysisNode)

.addEdge(START, "fetchCompany")
.addEdge("fetchCompany", "fetchMarket")
.addEdge("fetchMarket", "fetchNews")
.addEdge("fetchNews", "generateAnalysis")
.addEdge("generateAnalysis", END)

module.exports = graph.compile();