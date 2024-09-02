import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

const sql = neon(
  "postgresql://chat-app_owner:TZ5o8hImSJpQ@ep-hidden-flower-a516edcm.us-east-2.aws.neon.tech/ai-content-project?sslmode=require"
);
export const db = drizzle(sql, { schema });
