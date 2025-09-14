import express from "express";
import { validate } from "#middlewares/validate.js";
import { createFooSchema } from "#validations/foo.validation.js";
import fooController from "#controllers/foo.controller.js";

export const fooRoutes = express.Router();

fooRoutes.get("/foos", fooController.getFoos);
fooRoutes.post("/foo", validate(createFooSchema), fooController.createFoo);
