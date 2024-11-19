import mongoose from "mongoose";

let uri = "";
mongoose.connect(uri);

mongoose
  .then(() => {
    console.log("data base connected successfully");
  })
  .catch(() => {
    console.log("DB connected faild");
  });
