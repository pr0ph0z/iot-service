const amqp = require("./src/message_brokers/amqp");
const consumer = require("./src/consumer");
const mongo = require("./src/databases/mongo");
const logger = require("./src/utils/logger");

mongo
  .createConnection()
  .then(() => logger.info("MongoDB connected!"))
  .catch(logger.error);
amqp
  .connectToAmqp()
  .then(() => {
    logger.info("AMQP connected!");
  })
  .catch(logger.error);

async function main() {
  try {
    const connection = await amqp.connectToAmqp();
    await consumer.consume(connection);
    mongo.createConnection();

    logger.info("Consuming...");
  } catch (error) {
    logger.error(error);
  }
}

main();
