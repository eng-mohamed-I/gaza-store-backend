import mongoose from "mongoose";
import env from "dotenv";
env.config();

export const dbConndection = mongoose.connect(process.env.LOCAL_URI);

dbConndection
  .then(() => {
    console.log("data base connected successfully");
  })
  .catch(() => {
    console.log("DB connected faild");
  });