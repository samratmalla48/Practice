import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import path from "path";
import morgan from "morgan";
import connectDB from "./config/db.js";

// configure dotenv file
dotenv.config();
// database config
connectDB();
// rest object

const app = express();
// middleware
app.use(express.json())
app.use(morgan('dev'))


const PORT=process.env.PORT|| 8080;
// rest api
app.get("/", (req, res) => {
  res.send({
    message: "welcome to ecommerce app",
  });
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
