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

app.use(helmet());
app.use(compression());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests from this IP. Please try again later."
});

app.use(limiter);

/* ---------------- CORE MIDDLEWARE ---------------- */

app.use(cors({
  origin: function (origin, callback) {
    if (
      !origin ||
      origin.includes("localhost") ||
      origin.includes(".vercel.app")
    ) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "OPTIONS"],
  credentials: true
}));

app.options("*", cors());

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