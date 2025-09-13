import { app } from "#app.js";
import { logger } from "#utils/log/logger.js";
import { createServer } from "http";
import mongoose from "mongoose";
import config from "#utils/config/config.js";

mongoose
  .connect(config.DB_CONNECTION)
  .then(() => {
    logger.info("connected to mongodb");
  })
  .catch((err: unknown) => {
    logger.error(err);
  });

const httpServer = createServer(app);
const server = httpServer.listen(config.port, () => {
  logger.info(`server listening on port ${config.port}`);
});

const exitHandler = () => {
  if (server) {
    server.close(() => {
      logger.info("Server closed");
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};
const unExpectedErrorHandler = (error: unknown) => {
  logger.error(error);
  exitHandler();
};

process.on("uncaughtException", unExpectedErrorHandler);
process.on("unhandledRejection", unExpectedErrorHandler);
process.on("SIGTERM", () => {
  logger.info("SIGTERM recieved");
  if (server) {
    server.close();
  }
});
