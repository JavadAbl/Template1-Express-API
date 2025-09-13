import express from "express";
import { validate } from "#middlewares/validate.js";
import { createBlogSchema } from "#validations/blog.validation.js";
import fooController from "#controllers/foo.controller.js";

export const fooRoutes = express.Router();

fooRoutes.get("/foos", fooController.getFoos);
fooRoutes.post("/foo", validate(createBlogSchema), fooController.createFoo);
