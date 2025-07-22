import { Request, Response } from "express";
import { catchAsync } from "../utils/catchAsync";
import prisma from "../lib/prisma";
import { ApiError } from "../utils/apiError";

export const getCartItems = catchAsync(async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;
  const skip = (page - 1) * limit;

  const [cartItems, totalItems] = await Promise.all([
    prisma.cartItem.findMany({
      skip,
      take: limit,
    }),
    prisma.cartItem.count(),
  ]);

  if (cartItems.length === 0) throw new ApiError(400, "No items found in cart");

  res
    .status(200)
    .json({
      currentPage: page,
      totalItems,
      totalPages: Math.ceil(totalItems / limit),
      cartItems
    });
});
