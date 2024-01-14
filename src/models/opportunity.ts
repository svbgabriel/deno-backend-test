import { Schema, model } from "mongoose";
import { IOpportunity } from "../interfaces.ts";

const OpportunitySchema = new Schema<IOpportunity>(
  {
    date: {
      type: Date,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default model<IOpportunity>("Opportunities", OpportunitySchema);
