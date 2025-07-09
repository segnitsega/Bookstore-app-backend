import prisma from "./users.controllers"
import { Request, Response } from "express"
import { catchAsync } from "../utils/catchAsync"
import { ApiError } from "../utils/apiError"

export const getBooks = catchAsync(async(req: Request, res: Response) => {
    const books = await prisma.book.findMany()
    if(!books) throw new ApiError(400, 'No books found') 
    res.status(200).json({books: books})  
})

export const addBook = catchAsync(async(req: Request, res:Response) => {
    const { title, author, price, stock, description, imageUrl } = req.body;
    const newBook = await prisma.book.create({
        data: {
            title,
            author,
            price: parseFloat(price),
            stock: parseInt(stock),
            description,
            imageUrl
        }
    })
    if(!newBook) throw new ApiError(400, 'Error adding new book')
    res.status(200).json({message: "New book successfully added.", newBook})
    
})

export const getBookById = catchAsync(async(req: Request, res: Response) => {
    const id = req.params.id;

    const book = await prisma.book.findUnique({
       where: {
        id: parseInt(id)
       }
    })
    if(!book) throw new ApiError(400, 'Error finding book')
    res.status(200).json({book: book})
})