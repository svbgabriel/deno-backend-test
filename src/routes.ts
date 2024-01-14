// @deno-types="npm:@types/express@4.17.21"
import express from "express";
import { store, list } from "./controllers/integration-controller.ts";

export const routes = express.Router();

routes.post("/integration", store);
routes.get("/integration", list);
