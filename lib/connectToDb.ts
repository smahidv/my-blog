import mongoose from "mongoose";

interface Connection {
  isConnected?: number;
}

const connection: Connection = {};

export const connectToDb = async (): Promise<void> => {
  try {
    // Check if there's already an existing connection
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    // Connect to MongoDB
    const db = await mongoose.connect(process.env.MONGO_URI as string);
    connection.isConnected = db.connections[0].readyState;
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed", error);
    throw new Error((error as Error).message);
  }
};
