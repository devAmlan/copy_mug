/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./src/utils/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://chat-app_owner:TZ5o8hImSJpQ@ep-hidden-flower-a516edcm.us-east-2.aws.neon.tech/ai-content-project?sslmode=require",
  },
};
