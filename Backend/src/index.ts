import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { linkModel } from "./models/linkmodel.js";

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

app.use(express.json());

app.post("/share", async (req, res) => {
  const code = req.body.code;
  const language = req.body.language;
  const theme = req.body.theme;

  if (!code || !language || !theme) {
    return res.status(400).json({ msg: "Insufficiant data !" });
  }

  try {
    const savedata = await linkModel.create({ code, language, theme });
    res.status(200).json(savedata._id);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Something went wrong !" });
  }
});

app.listen(3000);
