const Test = require("../models/test");
const logger = require("../utils/logger");

async function create(amqpChannel, message) {
  const [valueA, valueB, valueC] = message.content.toString().split("#");

  try {
    await Test.create({
      value_a: valueA,
      value_b: valueB,
      value_c: valueC
    });

    amqpChannel.ack(message);
  } catch (error) {
    logger.error(error);
  }
}

module.exports = {
  create
};
