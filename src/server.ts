import express from "express"
import { userRouter } from "./routes/users.routes"

require('dotenv').config()

const port = process.env.PORT
const server = express()

server.use(express.json())
server.use('/api/user', userRouter)

server.listen(port, () => {
    console.log(`Bookstore server running on port ${port}`)
})

