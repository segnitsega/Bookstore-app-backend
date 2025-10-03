import express, {Request, Response} from "express"
import { userRouter } from "./routes/users.routes"
import { bookRouter } from "./routes/books.routes"
import { errorHandler } from "./middlewares/errorHandler"
import cartRouter from "./routes/cart.routes"
import cors from "cors"
import { protectRoute } from "./routes/protected.route"
import prisma from "./lib/prisma"
import { ApiError } from "./utils/apiError"

require('dotenv').config()

const port = process.env.PORT
const server = express()

server.use(cors({
    origin:'*'
}))

server.use(express.json())
server.use('/protected', protectRoute)
server.use('/user', userRouter)
server.use('/books', bookRouter)
server.use('/cart', cartRouter)

server.get('/search', async (req: Request, res: Response) => {
  try {
    const query = req.query.q as string;

    if (!query) {
      res.status(400).json({ error: "Query parameter 'q' is required" });
      return;
    }

    const books = await prisma.book.findMany({
      where: {
        OR: [
          { title: { contains: query, mode: "insensitive" } },
          { author: { contains: query, mode: "insensitive" } },
          { description: { contains: query, mode: "insensitive" } },
          { genre: { contains: query, mode: "insensitive" } },
        ],
      },
    });
    if(books.length > 0) res.json({ books });
    else throw new ApiError(400, "No such book")
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});


server.use(errorHandler)

server.listen(port, () => {
    console.log(`Bookstore server running on port ${port}`)
})