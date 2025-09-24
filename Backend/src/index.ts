import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

async function ConnectDB() {
  const db_url = process.env.DB_URL;
  if (!db_url) {
    console.log("Invalud DB_URL");
    return;
  }
  console.log("Connecting...");
  await mongoose.connect(db_url);
  console.log("Connected to database");
}

ConnectDB();

const app = express();

app.listen(3000);
