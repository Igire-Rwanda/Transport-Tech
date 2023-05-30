import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./routes/routes.js";

dotenv.config();
const connectMongo = () => {
  mongoose
    .connect('mongodb+srv://AngeloChristian:angelochristian@cluster0.rha4rdi.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
      console.log("Database Connected successfully");
    })
    .catch((error) => {
      console.log("Failed to connect to database ", error);
    });
};

const app = express();
app.use(cors());

app.use("/server",routes );

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connectMongo();
});
