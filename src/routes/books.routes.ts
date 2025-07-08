import express from "express"
import { getBooks, addBook } from "../controllers/books.controllers"

export const bookRouter = express.Router()

bookRouter.get('/', getBooks)
bookRouter.post('/', addBook)