import morganLib from "morgan";
import fs from "fs";
import path from "path";
import config from "../config/config.js";

morganLib.token("message", (req, res) => res.locals.errorMessage || "");
const getIPFormat = () => (config.env === "production" ? ":remote-addr - " : "");

const accessLogStream = fs.createWriteStream(path.join(__dirname, "..", "logs/access.log"), { flags: "a" });

const successResponseFormat = `${getIPFormat()} :method :url :status :response-time ms :user-agent :date`;
const successHandler = morganLib(successResponseFormat, {
  stream: accessLogStream,
  skip: (req, res) => res.statusCode >= 400,
});

const errorResponseFormat = `${getIPFormat()} :method :url :status :response-time ms :user-agent :date - error-message: :message`;
const errorHandler = morganLib(errorResponseFormat, {
  stream: accessLogStream,
  skip: (req, res) => res.statusCode < 400,
});

export default { successHandler, errorHandler };
