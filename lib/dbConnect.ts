import mongoose from "mongoose";

type ConnectionObject = { isConnected?: number };

const connection: ConnectionObject = {};
async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("alert");
  }
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || "");
    console.log("DB connected successfully");
  } catch (error) {
    console.log("DB connection fail", error);

    process.exit(1);
  }
}

export default dbConnect;
