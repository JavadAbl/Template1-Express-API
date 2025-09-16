import express from "express";
import { validate } from "#middlewares/validate.js";
import { createFooSchema } from "#validations/foo.validation.js";
import fooController from "#controllers/foo.controller.js";

export const fooRoutes = express.Router();

fooRoutes.get("/GetAll", fooController.getFoos);
fooRoutes.post("/Create", validate(createFooSchema), fooController.createFoo);
