import mongoose, { Schema } from "mongoose";

const linkSchema = new Schema({
  code: String,
  language: String,
  theme: String,
});

export const linkModel = mongoose.model("link", linkSchema);
