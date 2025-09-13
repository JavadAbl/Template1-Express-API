import { createLogger, format, transports } from "winston";
import config from "#utils/config/config.js";

const { printf, combine, timestamp, colorize, uncolorize } = format;

const winstonFormat = printf(({ level, message, timestamp, stack }) => {
  return `${timestamp}: ${level}: ${stack || message}`;
});
export const logger = createLogger({
  level: config.NODE_ENV === "development" ? "debug" : "info",
  format: combine(timestamp(), winstonFormat, config.NODE_ENV === "development" ? colorize() : uncolorize()),
  transports: [new transports.Console()],
});
