const yahooFinance = require("../config/yahoo");

const getCompanyProfile = async (companyName) => {
  try {
    const search = await yahooFinance.search(companyName);

    if (!search.quotes.length) {
      throw new Error("Company not found");
    }

    const symbol = search.quotes[0].symbol;

    const quote = await yahooFinance.quoteSummary(symbol, {
      modules: [
        "assetProfile",
        "price",
        "summaryDetail"
      ],
    });

    return {
      symbol,

      name:
        quote.price.longName ||
        quote.price.shortName,

      industry:
        quote.assetProfile?.industry,

      sector:
        quote.assetProfile?.sector,

      website:
        quote.assetProfile?.website,

      country:
        quote.assetProfile?.country,

      employees:
        quote.assetProfile?.fullTimeEmployees,

      description:
        quote.assetProfile?.longBusinessSummary,
    };
  } catch (err) {
    console.error(err);
    throw err;
  }
};

module.exports = {
  getCompanyProfile,
};