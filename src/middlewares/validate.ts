import { z, ZodType } from "zod";
import { AppError } from "#utils/app-error.js";

export const validate = (schema: ZodType<any, any>) => (req: any, res: any, next: any) => {
  // Pick only keys defined in the schema from the request
  const keys = Object.keys(schema);

  const object = keys.reduce<Record<string, unknown>>((obj, key) => {
    if (Object.prototype.hasOwnProperty.call(req, key)) {
      obj[key] = (req as any)[key];
    }
    return obj;
  }, {});

  // Create a Zod object schema from the provided pieces
  const zodSchema = z.object(schema).strict();

  // Validate
  const result = zodSchema.safeParse(object);

  if (!result.success) {
    const errors = result.error.issues.map((issue) => `${issue.path.join(".")}: ${issue.message}`).join(", ");
    return next(new AppError(400, errors));
  }

  // Optionally attach validated/parsed data
  // req.validated = result.data;

  return next();
};
