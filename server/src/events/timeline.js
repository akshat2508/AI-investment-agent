const EventEmitter = require("events");

class TimelineEmitter extends EventEmitter {}

module.exports = new TimelineEmitter();