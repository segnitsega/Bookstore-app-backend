import { Request, Response } from "express";
import { catchAsync } from "../utils/catchAsync";
import prisma from "../lib/prisma";
import { ApiError } from "../utils/apiError";

export const getCartItems = catchAsync(async (req: Request, res: Response) => {
  const userId = parseInt(req.query.id as string);
  const cartItems = await prisma.cartItem.findMany({
    where: {
      userId: userId
    },
    include: {
      book: true
    }
  });
  if (cartItems.length === 0) throw new ApiError(400, "No items found in cart");
  res
    .status(200)
    .json({
      message: "success",
      cartItems: cartItems
    });
});
