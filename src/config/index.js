require("dotenv").config();

const amqpUrl = process.env.RMQ_URL;
const mongoUrl = process.env.MONGO_URL;

const mongoOptions = {
  keepAlive: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  autoIndex: false
};

module.exports = {
  mongoUrl,
  mongoOptions,
  amqpUrl
};
