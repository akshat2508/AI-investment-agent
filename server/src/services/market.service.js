const axios = require("axios");

const getMarketData = async (symbol) => {
  const { data } = await axios.get(
    "https://financialmodelingprep.com/stable/profile",
    {
      params: {
        symbol,
        apikey: process.env.FMP_API_KEY,
      },
    }
  );

  if (!Array.isArray(data) || data.length === 0) {
    throw new Error(`No market data found for ${symbol}`);
  }

  const quote = data[0];

  return {
    currentPrice: quote.price,
    marketCap: quote.marketCap,
    currency: quote.currency,
    peRatio: quote.pe,
    eps: quote.eps,
    fiftyTwoWeekHigh: quote.yearHigh,
    fiftyTwoWeekLow: quote.yearLow,
    exchange: quote.exchange,
  };
};

module.exports = {
  getMarketData,
};