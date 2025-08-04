import express from "express";
import { verifyToken } from "../utils/verify-token";

export const protectRoute = express.Router();
protectRoute.get("/", verifyToken, (req, res) => {
  const user = (req as any).user;
  res.status(200).json({ message: "Access granted", user });
});
