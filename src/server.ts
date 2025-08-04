import express from "express"
import { userRouter } from "./routes/users.routes"
import { bookRouter } from "./routes/books.routes"
import { errorHandler } from "./middlewares/errorHandler"
import cartRouter from "./routes/cart.routes"
import cors from "cors"
import { protectRoute } from "./routes/protected.route"

require('dotenv').config()

const port = process.env.PORT
const server = express()

server.use(cors({
    origin:'*'
}))

server.use(express.json())
server.use('/protected', protectRoute)
server.use('/api/user', userRouter)
server.use('/api/books', bookRouter)
server.use('/api/cart', cartRouter)


server.use(errorHandler)

server.listen(port, () => {
    console.log(`Bookstore server running on port ${port}`)
})