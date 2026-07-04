const timeline = require("../events/timeline");

const withTimeline = (id, title, handler) => {
  return async (state) => {
    const startedAt = Date.now();

    timeline.emit("progress", {
      id,
      title,
      status: "running",
    });

    try {
      const result = await handler(state);

      timeline.emit("progress", {
        id,
        title,
        status: "completed",
        duration: Date.now() - startedAt,
      });

      return result;
    } catch (error) {
      timeline.emit("progress", {
        id,
        title,
        status: "failed",
        duration: Date.now() - startedAt,
        error: error.message,
      });

      throw error;
    }
  };
};

module.exports = withTimeline;