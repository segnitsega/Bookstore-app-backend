import express from "express"
import { getBooks } from "../controllers/books.controllers"

export const bookRouter = express.Router()

bookRouter.get('/', getBooks)
