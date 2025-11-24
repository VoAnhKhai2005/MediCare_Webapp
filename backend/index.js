import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

import { connectDB } from "./config/db.js";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/user.js";
import doctorRoute from "./routes/doctor.js";
import reviewRoute from "./routes/review.js";
import bookingRoute from "./routes/booking.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;
const __dirname = path.resolve();

// Middleware
app.use(express.json());
app.use(cookieParser());

// CORS cho dev
if (process.env.NODE_ENV !== "production") {
  app.use(cors({ origin: true }));
}

// API routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/doctors", doctorRoute);
app.use("/api/v1/reviews", reviewRoute);
app.use("/api/v1/bookings", bookingRoute);

// Webhook riêng (Stripe, etc.)
app.post(
  "/api/v1/bookings/webhook",
  express.raw({ type: "application/json" }),
  bookingRoute
);

// Production: serve frontend build + SPA fallback
if (process.env.NODE_ENV === "production") {
  const frontendPath = path.join(__dirname, "../frontend/dist"); // hoặc ../frontend/build nếu CRA
  app.use(express.static(frontendPath));

  // SPA fallback: bất kỳ route nào không match API sẽ trả index.html
  app.use((req, res) => {
    res.sendFile(path.join(frontendPath, "index.html"));
  });
} else {
  // Dev route test
  app.get("/", (req, res) => {
    res.send("API đang hoạt động");
  });
}

// Connect DB & start server
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server đang chạy trên cổng ${port}`);
  });
});
