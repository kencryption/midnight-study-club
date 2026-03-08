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

// allow frontend requests (both local + deployed frontend)
const allowedOrigins = [
  "http://localhost:5173",
  "https://midnight-study-club.vercel.app"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "OPTIONS"],
  credentials: true
}));

// handle preflight requests
app.options("*", cors());

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