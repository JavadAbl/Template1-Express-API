import { z } from "zod";
import dotenv from "dotenv";
import { AppError } from "#utils/app-error.js";
import status from "http-status";

// 1️⃣ load .env
dotenv.config();

// 2️⃣ define expected env vars
const schema = z
  .object({
    NODE_ENV: z.string(),
    DB_CONNECTION: z.string(),
    SERVER_HOST: z.string(),
    SERVER_PORT: z.string(),
  })
  .loose(); // ✅ allow extra variables

// 3️⃣ validate
const result = schema.safeParse(process.env);

if (!result.success) {
  const missing = result.error.issues // ✅ use issues instead of errors
    .map((i) => `${i.path.join(".")}: ${i.message}`)
    .join("; ");

  throw new AppError(status.INTERNAL_SERVER_ERROR, `Configuration error: ${missing}`, false);
}

// 4️⃣ export typed config
export default result.data;
