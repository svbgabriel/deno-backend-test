import { Hono, Context } from "hono";
import "./database/setup.ts";
import { store, list } from "./controllers/integration-controller.ts";

export const app = new Hono({ strict: false });
app.post("/integration", (c: Context) => store(c));
app.get("/integration", (c: Context) => list(c));
