import prisma from "./users.controllers"
import { Request, Response } from "express"

export const getBooks = async(req: Request, res: Response) => {
    const books = await prisma.book.findMany()
    if(books){
        res.status(200).json({books: books})
    }
}

export const addBook = async(req: Request, res:Response) => {
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
    if(newBook){
        res.status(200).json({message: "New book successfully added.", newBook})
    }
}