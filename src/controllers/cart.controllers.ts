import { Request, Response } from "express";
import { catchAsync } from "../utils/catchAsync";
import prisma from "../lib/prisma";
import { ApiError } from "../utils/apiError";

export const getCartItems = catchAsync(async (req: Request, res: Response) => {
  const userId = req.query.id as string;
  const cartItems = await prisma.cartItem.findMany({
    where: {
      userId: userId,
    },
    include: {
      book: true,
    },
  });
  if (cartItems.length === 0) throw new ApiError(400, "No items found in cart");
  res.status(200).json({
    message: "success",
    cartItems: cartItems,
  });
});

export const addToCart = catchAsync(async (req: Request, res: Response) => {
  const userId = (req as any).user.id;
  const { bookId } = req.body;
  const addedToCart = await prisma.cartItem.create({
    data: {
      userId,
      bookId,
    },
  });
  await prisma.book.update({
    where: {
      id: bookId,
    },
    data: {
      inCart: true,
    },
  });

  if (!addedToCart) throw new ApiError(500, "Failed to add to cart.");

  res.status(201).json({
    message: "Success",
    addedToCart,
  });
});

export const removeFromCart = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;

    const removeItem = await prisma.cartItem.delete({
      where: {
        id,
      },
    });
    if (!removeItem) throw new ApiError(500, "Failed to remove item");

    res.status(200).json({
      message: "success",
    });
  }
);
