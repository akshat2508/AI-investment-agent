const {
  analyzeCompanyResearch,
} = require("../services/research.service");

const analyzeCompany = async (req, res) => {
  try {
    const { company } = req.body;

    if (!company) {
      return res.status(400).json({
        success: false,
        message: "Company name is required.",
      });
    }

    const analysis = await analyzeCompanyResearch(company);

    return res.status(200).json({
      success: true,
      data: analysis,
    });
  } catch (error) {
console.error(error.response?.data || error.message || error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  analyzeCompany,
};