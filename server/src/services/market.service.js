const yahooFinance = require("../config/yahoo");

const getMarketData = async (symbol) => {
  const quote = await yahooFinance.quote(symbol);

  return {
    currentPrice: quote.regularMarketPrice,

    marketCap: quote.marketCap,

    currency: quote.currency,

    peRatio: quote.trailingPE,

    eps: quote.epsTrailingTwelveMonths,

    fiftyTwoWeekHigh: quote.fiftyTwoWeekHigh,

    fiftyTwoWeekLow: quote.fiftyTwoWeekLow,

    exchange: quote.fullExchangeName,
  };
};

module.exports = {
  getMarketData,
};