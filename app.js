import express from "express";
import env from "dotenv";

const port = 5000;
let server = express();

server.listen(port, () => {
  console.log("server connected successfully");
});
