import z from "zod";

export const createFooSchema = z
  .object({
    title: z.string(),
    description: z.string(),
  })
  .loose();
