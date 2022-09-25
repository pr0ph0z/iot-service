require("dotenv").config();
const mainController = require("./controllers/main");
const logger = require("./utils/logger");

exports.consume = async channel => {
  channel.consume(process.env.CONSUME_QUEUE, async msg => {
    logger.info("Got a message");
    await mainController.create(channel, msg);
  });
};
