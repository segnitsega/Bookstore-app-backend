import express from "express"
import { handleLogin, handleSignup } from "../controllers/users.controllers"

export const userRouter = express.Router()

userRouter.post('/signup', handleSignup)
userRouter.post('/login', handleLogin)

