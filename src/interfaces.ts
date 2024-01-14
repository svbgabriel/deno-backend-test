export interface IOpportunity {
  date: Date;
  value: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IDeal {
  org_name: string;
  won_time: string;
  title: string;
  value: number;
}
