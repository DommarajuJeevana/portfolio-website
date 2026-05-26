import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import morgan from "morgan";

import connectDB from "./config/db.js";

import projectRoutes from "./routes/projectRoutes.js";
import skillRoutes from "./routes/skillRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";

import rateLimit from "./middleware/rateLimit.js";

dotenv.config();
connectDB();

const app = express();

// security
app.use(helmet());

// speed
app.use(compression());

// logs (optional but looks professional)
app.use(morgan("dev"));

// json parser
app.use(express.json());

// frontend connection
app.use(cors({
  origin: "*"
}));

// anti spam
app.use(rateLimit);

// routes
app.use("/api/projects", projectRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/contact", contactRoutes);

// resume download (simple static file)
app.get("/api/resume", (req, res) => {
  res.download("./resume.pdf");
});

// home route
app.get("/", (req, res) => {
  res.send("Portfolio Backend is running 🚀");
});

// error handler
app.use((err, req, res, next) => {
  res.status(500).json({
    success: false,
    message: "Server Error"
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});