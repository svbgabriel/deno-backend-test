// @deno-types="npm:@types/express@4.17.21"
import express from "express";
import "./database/setup.ts";
import { routes } from "./routes.ts";

export const app = express();
app.use(express.json());
app.use(routes);
