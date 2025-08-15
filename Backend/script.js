require("dotenv").config();
const express = require("express");
const app = express();

const mobileRoutes = require("./src/routes/mobileRoutes");
const userRoutes = require("./src/routes/userRoutes");
const connectDB = require("./config/db");
const errorHandler = require("./src/error/errorHandling");
const cookieParser = require("cookie-parser");
const cors = require ("cors");


app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: ["http://localhost:5173",
  "https://crm-project-frontend-0jib.onrender.com"],
  credentials: true,
   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))

app.use("/users", userRoutes);
app.use("/mobiles", mobileRoutes);

app.use(errorHandler);
app.all("*", (req, res) => {
  res.status(404).json({ message: "Route not found" });
});

connectDB();

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});