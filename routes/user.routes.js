import express from "express";
import { signUp } from "../controllers/user.controller.js";

let userRoutes = express.Router();

userRoutes.post("/sign-up", signUp);
userRoutes.post("/sign-in", signUp);

export default userRoutes;
