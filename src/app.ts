import { errorConverter, errorHandler } from "#middlewares/error-handler.middleware.js";
import { appRoutes } from "#routes/app.routes.js";
import { AppError } from "#utils/app-error.js";
import express from "express";
import httpStatus from "http-status";

export const app = express();

app.use(express.json());

app.use(appRoutes);

app.use((req, res, next) => {
  next(new AppError(httpStatus.NOT_FOUND, "Not found"));
});

app.use(errorConverter);
app.use(errorHandler);
