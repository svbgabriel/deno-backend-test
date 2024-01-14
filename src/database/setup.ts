import mongoose from "mongoose";
import config from "../config.ts";

const options = {
  dbName: "deno-test",
};

mongoose.connect(config.databaseUrl, options);

export default mongoose;
