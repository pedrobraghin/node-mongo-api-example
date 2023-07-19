import mongoose from "mongoose";

export async function connect() {
  const DB_URL = String(process.env.DB_URL);
  mongoose.set("strictQuery", true);
  await mongoose.connect(DB_URL);
}
