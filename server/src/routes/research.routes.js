const express = require("express");
const router = express.Router();

const {
  analyzeCompany,
} = require("../controllers/research.controller");

router.post("/", analyzeCompany);

module.exports = router;