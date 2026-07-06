const axios = require("axios");

const FMP_BASE_URL = "https://financialmodelingprep.com";

const getCompanyProfile = async (companyName) => {
  try {
    // Step 1: Search company
    const { data: searchResults } = await axios.get(
      `${FMP_BASE_URL}/stable/search-name`,
      {
        params: {
          query: companyName,
          apikey: process.env.FMP_API_KEY,
        },
      }
    );

    if (!searchResults || searchResults.length === 0) {
      const error = new Error(
        `No publicly listed company found for "${companyName}".`
      );
      error.statusCode = 404;
      throw error;
    }

const company =
  searchResults.find(
    c =>
      c.exchange === "NASDAQ" ||
      c.exchangeFullName?.includes("NASDAQ")
  ) || searchResults[0];

    const symbol = company.symbol;

    // Step 2: Get company profile
    const { data: profiles } = await axios.get(
      `${FMP_BASE_URL}/stable/profile`,
      {
        params: {
          symbol,
          apikey: process.env.FMP_API_KEY,
        },
      }
    );

    if (!profiles || profiles.length === 0) {
      throw new Error(`Profile not found for ${symbol}`);
    }

    const profile = profiles[0];

    return {
      symbol,

      name: profile.companyName,

      industry: profile.industry,

      sector: profile.sector,

      website: profile.website,

      country: profile.country,

      employees: profile.fullTimeEmployees,

      description: profile.description,
    };
  } catch (err) {
    console.error(
      "FMP Error:",
      err.response?.data || err.message
    );
    throw err;
  }
};

module.exports = {
  getCompanyProfile,
};