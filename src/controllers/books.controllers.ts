import prisma from "../lib/prisma";
import { Request, Response } from "express";
import { catchAsync } from "../utils/catchAsync";
import { ApiError } from "../utils/apiError";

export const getBooks = catchAsync(async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;
  const skip = (page - 1) * limit;
  console.log("Here is the query strings", req.query)
  const where: any = {};

  if (req.query.featured) {
    where.featured = req.query.featured === "true";
  }

  if (req.query.bestSellers) {
    where.bestSellers = req.query.bestSellers === "true";
  }

  if (req.query.genre) {
    where.genre = req.query.genre as string;
  }

  if (req.query.minPrice || req.query.maxPrice) {
    where.price = {};
    if (req.query.minPrice)
      where.price.gte = parseFloat(req.query.minPrice as string);
    if (req.query.maxPrice)
      where.price.lte = parseFloat(req.query.maxPrice as string);
  }

  if (req.query.minRating) {
    where.bookRating = { gte: parseFloat(req.query.minRating as string) };
  }

  const [books, totalBooks] = await Promise.all([
    prisma.book.findMany({
      where,
      skip,
      take: limit,
    }),
    prisma.book.count({ where }),
  ]);

  if (books.length === 0) throw new ApiError(400, "No books found");

  res.status(200).json({
    totalBooks,
    currentPage: page,
    totalPages: Math.ceil(totalBooks / limit),
    books,
  });
});

export const getBookById = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const book = await prisma.book.findUnique({
    where: {
      id: id,
    },
  });
  if (!book) throw new ApiError(400, "Error finding book");
  res.status(200).json({ book: book });
});

export const getFeaturedBooks = catchAsync(
  async (req: Request, res: Response) => {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 4;
    const skip = (page - 1) * limit;

    const [featuredBooks, totalFeaturedBooks] = await Promise.all([
      prisma.book.findMany({
        where: {
          featured: true,
        },
        skip,
        take: limit,
      }),
      prisma.book.count({
        where: { featured: true },
      }),
    ]);

    if (featuredBooks.length === 0)
      throw new ApiError(400, "No featured books found");

    res.status(200).json({
      totalfeaturedBooks: totalFeaturedBooks,
      currentPage: page,
      totalPage: Math.ceil(totalFeaturedBooks / limit),
      featuredBooks: featuredBooks,
    });
  }
);

export const getBestSellers = catchAsync(
  async (req: Request, res: Response) => {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;

    const [bestsellersBooks, totalBestsellersBooks] = await Promise.all([
      await prisma.book.findMany({
        where: {
          bestSellers: true,
        },
        skip,
        take: limit,
      }),
      prisma.book.count({ where: { bestSellers: true } }),
    ]);

    if (bestsellersBooks.length === 0)
      throw new ApiError(400, "No bestsellers book found");

    res.status(200).json({
      totalBestsellersBooks: totalBestsellersBooks,
      currentPage: page,
      totalPage: Math.ceil(totalBestsellersBooks / limit),
      bestsellersBooks: bestsellersBooks,
    });
  }
);

export const getBooksByGenre = catchAsync(
  async (req: Request, res: Response) => {
    const genre = req.params.genre;
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 4;
    const skip = (page - 1) * limit;

    const [books, totalBooks] = await Promise.all([
      prisma.book.findMany({
        where: {
          genre,
        },
        skip,
        take: limit,
      }),
      prisma.book.count(),
    ]);
    if (books.length === 0)
      throw new ApiError(400, "No books found in this genre");
    res.status(200).json({
      totalBooks: totalBooks,
      currentPage: page,
      totalPages: Math.ceil(totalBooks / limit),
      books: books,
    });
  }
);

export const addBook = catchAsync(async (req: Request, res: Response) => {
  const { title, author, price, stock, description, imageUrl } = req.body;
  const newBook = await prisma.book.create({
    data: {
      title,
      author,
      price: parseFloat(price),
      stock: parseInt(stock),
      description,
      imageUrl,
    },
  });
  if (!newBook) throw new ApiError(400, "Error adding new book");
  res.status(200).json({ message: "New book successfully added.", newBook });
});
