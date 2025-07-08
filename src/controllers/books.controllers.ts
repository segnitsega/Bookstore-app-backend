import prisma from "./users.controllers"
import { Request, Response } from "express"

export const getBooks = async(req: Request, res: Response) => {
    const books = await prisma.book.findMany()
    if(books){
        res.status(200).json({books: books})
    }
}