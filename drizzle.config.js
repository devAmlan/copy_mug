/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://ai-content-app_owner:MQsTbjd9FCP4@ep-late-hat-a554udx1.us-east-2.aws.neon.tech/ai-content-app?sslmode=require",
  },
};
