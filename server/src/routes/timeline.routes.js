const express = require("express");

const {
  timelineStream,
} = require("../controllers/timeline.controller");

const router = express.Router();

router.get("/", timelineStream);

module.exports = router;