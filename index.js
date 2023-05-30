import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
// to use a dotenv file
const app = express();
app.use(cors());
app.use(express.json());

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("Connected to database"));
db.on("open", () => {
  console.log("connected......");
});

mongoose.connect("Put database link here", { useNewUrlParser: true });

app.use();

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
