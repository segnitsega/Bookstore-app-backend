import express from "express"
import { userRouter } from "./routes/users.routes"
import { bookRouter } from "./routes/books.routes"
import { errorHandler } from "./middlewares/errorHandler"

require('dotenv').config()

const port = process.env.PORT
const server = express()

server.use(express.json())
server.use('/api/user', userRouter)
server.use('/api/books', bookRouter)

server.use(errorHandler)

server.listen(port, () => {
    console.log(`Bookstore server running on port ${port}`)
})