import express from "express"
import { getBooks, addBook, getBookById} from "../controllers/books.controllers"

export const bookRouter = express.Router()

bookRouter.get('/', getBooks)
bookRouter.get('/:id', getBookById)
bookRouter.post('/', addBook)