import { Context } from "hono";
import {
  storeOpportunity,
  listOpportunities,
} from "../services/opportunity-service.ts";

export const store = async (c: Context) => {
  const totalOpportunities = await storeOpportunity();
  return c.json(totalOpportunities);
};

export const list = async (c: Context) => {
  const aggregationOpportunities = await listOpportunities();
  return c.json(aggregationOpportunities);
};
