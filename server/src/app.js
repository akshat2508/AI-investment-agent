const express = require("express");
const cors = require("cors");

const researchRoutes = require("./routes/research.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Investment Research Agent API Running",
  });
});

app.use("/api/research", researchRoutes);

module.exports = app;