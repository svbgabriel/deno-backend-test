import mongoose, { ConnectOptions } from "mongoose";
import config from "../config.ts";

const options: ConnectOptions = {
  dbName: "deno-test",
  family: undefined,
  hints: undefined,
  localAddress: undefined,
  localPort: undefined,
  lookup: undefined,
};

mongoose.connect(config.databaseUrl, options);

export default mongoose;
