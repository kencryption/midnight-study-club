import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import compression from "compression";
import rateLimit from "express-rate-limit";

import uploadRoute from "./uploadRoute.js";

dotenv.config();

const app = express();

/* ---------------- SECURITY MIDDLEWARE ---------------- */

// security headers
app.use(helmet());

// gzip compression
app.use(compression());

// rate limiting (prevents spam uploads)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests from this IP. Please try again later."
});

app.use(limiter);

/* ---------------- CORE MIDDLEWARE ---------------- */

// allow frontend requests
app.use(cors({
  origin: ["http://localhost:5173"],
  methods: ["GET", "POST"]
}));

// parse JSON
app.use(express.json());

/* ---------------- TEST ROUTE ---------------- */

app.get("/", (req, res) => {
  res.send("Midnight Study Club backend is running");
});

/* ---------------- ROUTES ---------------- */

app.use("/upload", uploadRoute);

/* ---------------- SERVER ---------------- */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});