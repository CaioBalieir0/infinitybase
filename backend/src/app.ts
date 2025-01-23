import express from "express";
import dotenv from "dotenv";
import taskRoutes from "./routes/taskRoutes";
import { connectToDatabase } from "./config/db";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api", taskRoutes);

connectToDatabase();

export default app;
