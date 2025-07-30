import express from "express"
import { getBooks, addBook, getBookById, getFeaturedBooks, getBestSellers, getBooksByGenre} from "../controllers/books.controllers"

export const bookRouter = express.Router()

bookRouter.get('/', getBooks)
bookRouter.get('/featured', getFeaturedBooks)
bookRouter.get('/bestsellers', getBestSellers)
bookRouter.get('/genre/:genre', getBooksByGenre)
bookRouter.get('/:id', getBookById)

bookRouter.post('/', addBook)