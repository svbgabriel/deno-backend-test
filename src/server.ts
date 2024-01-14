import { app } from "./app.ts";
import config from "./config.ts";

Deno.serve({ port: config.port }, app.fetch);
