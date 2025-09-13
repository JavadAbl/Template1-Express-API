import { Blog } from "#models/blog.model.js";

const createFoo = async (body: any) => {
  await Blog.create(body);
};

const getFoos = async () => {
  const blogs = await Blog.find({});
  return blogs;
};

export default { getFoos, createFoo };
