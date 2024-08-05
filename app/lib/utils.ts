import mongoose, { ConnectionStates } from "mongoose";

const connection = {
  isConnected: false,
};

export const connectToDB = async () => {
  if (connection.isConnected) return;
  try {
    const mongoUrl = process.env.MONGO;
    if (typeof mongoUrl !== "string") {
      throw new Error(
        "MONGO environment variable is not set or is not a string"
      );
    }
    await mongoose.connect(mongoUrl);
    connection.isConnected =
      mongoose.connection.readyState === ConnectionStates.connected;
    if (connection.isConnected) return;
    const db = await mongoose.connect(mongoUrl);
    connection.isConnected =
      db.connections[0].readyState === ConnectionStates.connected;
    console.log("Connected to MongoDB");
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      throw new Error(error.message);
    } else {
      console.log("An unknown error occurred");
      throw new Error("An unknown error occurred");
    }
  }
};
