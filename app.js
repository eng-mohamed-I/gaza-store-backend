import express from "express";
import env from "dotenv";
import cors from "cors";
import { dbConndection } from "./config/dbConnection.js";

env.config();

const port = 5000;
let server = express();

server.use(express.json());
server.use(cors());

// Routes Here

// connection to database
dbConndection;

server.listen(port, () => {
  console.log("server connected successfully");
});
