import express from "express";
import dotenv from "dotenv";
import taskRoutes from "./routes/taskRoutes";
import { connectToDatabase } from "./config/db";
import cors from "cors";

dotenv.config();

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

app.use("/api", taskRoutes);

connectToDatabase();

export default app;
