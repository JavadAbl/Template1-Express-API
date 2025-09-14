import { Foo } from "#models/foo.model.js";

const createFoo = async (body: any) => {
  await Foo.create(body);
};

const getFoos = async () => {
  const blogs = await Foo.find({});
  return blogs;
};

export default { getFoos, createFoo };
