import express from "express";
import env from "dotenv";
import cors from "cors";
import { dbConndection } from "./config/dbConnection.js";
import userRoutes from "./routes/user.routes.js";

env.config();

const port = 5000;
let server = express();

// connection to database
dbConndection;

server.use(express.json());
server.use(cors());

// Routes
server.use("/api/v1", userRoutes);

// Server
server.listen(port, () => {
  console.log("server connected successfully");
});
