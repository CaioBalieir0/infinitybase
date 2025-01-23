import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || "");
    console.log("Conectado ao MongoDB");
  } catch (error) {
    console.error("Erro ao conectar à base de dados", error);
    process.exit(1);
  }
};
