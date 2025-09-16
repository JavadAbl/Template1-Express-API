import fooService from "#services/foo.service.js";
import httpStatus from "http-status";

const createFoo = async (req, res) => {
  await fooService.createFoo(req.body);
  res.status(httpStatus.CREATED).send({ success: true, message: "Foo created successfuly" });
};

const getFoos = async (req, res) => {
  const blogs = await fooService.getFoos();
  res.status(httpStatus.OK).json(blogs);
};

export default { getFoos, createFoo };
