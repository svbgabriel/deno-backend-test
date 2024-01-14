import "dotenv";

export default {
  port: Deno.env.get("PORT") ? Number(Deno.env.get("PORT")) : 8080,
  databaseUrl: Deno.env.get("DB_URL") || "",
  blingToken: Deno.env.get("BLING_TOKEN") || "",
  blingBaseUrl: Deno.env.get("BLING_BASE_URL") || "",
  pipedriveBaseUrl: Deno.env.get("PIPEDRIVE_BASE_URL") || "",
  pipedriveToken: Deno.env.get("PIPEDRIVE_TOKEN") || "",
};
