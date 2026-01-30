import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "https://to-do-web-app-ugek.onrender.com",
    credentials: true,
  }),
);

import authRoutes from "./routes/authRoutes.js";
import boardRoutes from "./routes/boardRoutes.js";
import todoRoutes from "./routes/todoRoutes.js";

dotenv.config();
connectDB();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/boards", boardRoutes);
app.use("/api/todos", todoRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
