import express from "express";
import { addToCart, getCartItems, removeFromCart } from "../controllers/cart.controllers";
import { verifyToken } from "../utils/verify-token";

const cartRouter = express.Router();

cartRouter.use(verifyToken)
cartRouter.get("/", getCartItems);
cartRouter.post("/add", addToCart);
cartRouter.delete("/remove/:id", removeFromCart)

export default cartRouter;
