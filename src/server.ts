import express from "express"

require('dotenv').config()

const port = process.env.PORT
const server = express()

server.listen(port, () => {
    console.log(`Bookstore server running on port ${port}`)
})

