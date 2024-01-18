import Opportunity from "../models/opportunity.ts";

export const saveOpportunity = async (opportunity: {
  date: string;
  value: number;
}) => {
  return await Opportunity.create({
    date: opportunity.date,
    value: opportunity.value,
  });
};

export const aggregateOpportunity = async () => {
  return await Opportunity.aggregate([
    {
      $group: {
        _id: { date: "$date" },
        total: {
          $sum: "$value",
        },
      },
    },
  ]);
};
