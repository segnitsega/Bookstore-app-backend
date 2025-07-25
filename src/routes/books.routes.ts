import express from "express"
import { getBooks, addBook, getBookById, getFeaturedBooks} from "../controllers/books.controllers"

export const bookRouter = express.Router()

bookRouter.get('/', getBooks)
bookRouter.get('/featured', getFeaturedBooks)

bookRouter.get('/:id', getBookById)
bookRouter.post('/', addBook)