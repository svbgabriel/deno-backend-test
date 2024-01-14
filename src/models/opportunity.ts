import { Schema, model } from "mongoose";

interface Opportunity {
  date: Date;
  value: number;
  createdAt?: Date;
  updatedAt?: Date;
}

const OpportunitySchema = new Schema<Opportunity>(
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

export default model<Opportunity>("Opportunities", OpportunitySchema);
