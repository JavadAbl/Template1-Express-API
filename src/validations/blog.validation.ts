import joi from "joi";

export const createBlogSchema = {
  body: joi.object().keys({
    title: joi.string().required(),
    description: joi.string().required(),
  }),
};
