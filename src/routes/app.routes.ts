import express from "express";
import { fooRoutes } from "./foo.routes.js";

export const appRoutes = express.Router();

appRoutes.use("/Foo", fooRoutes);
