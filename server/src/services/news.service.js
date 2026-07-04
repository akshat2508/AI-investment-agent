const axios = require("axios");

const getCompanyNews = async (companyName) => {
  try {
    const response = await axios.post(
      "https://api.tavily.com/search",
      {
        query: `Latest news about ${companyName}`,
        topic: "news",
        search_depth: "advanced",
        max_results: 5,
        include_answer: false,
        include_images: false,
        include_raw_content: false,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.TAVILY_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.results.map((article) => ({
      title: article.title,
      url: article.url,
      content: article.content,
      score: article.score,
    }));
  } catch (error) {
    console.error("News Service Error:", error.response?.data || error.message);
    throw error;
  }
};

module.exports = {
  getCompanyNews,
};