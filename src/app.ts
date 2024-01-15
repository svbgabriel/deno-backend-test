import { Hono, Context } from "hono";
import { serveStatic } from "hono/middleware";
import { swaggerUI } from "@hono/swagger-ui";
import "./database/setup.ts";
import { store, list } from "./controllers/integration-controller.ts";

export const app = new Hono({ strict: false });
app.use("/docs/*", serveStatic({ root: "./" }));
app.get("/swagger-ui", swaggerUI({ url: "/docs/openapi.yaml" }));
app.post("/integration", (c: Context) => store(c));
app.get("/integration", (c: Context) => list(c));
