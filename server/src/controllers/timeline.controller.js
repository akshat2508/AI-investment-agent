const timeline = require("../events/timeline");

const timelineStream = (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  res.flushHeaders();

  const listener = (event) => {
    res.write(`data: ${JSON.stringify(event)}\n\n`);
  };

  timeline.on("progress", listener);

  req.on("close", () => {
    timeline.off("progress", listener);
    res.end();
  });
};

module.exports = {
  timelineStream,
};