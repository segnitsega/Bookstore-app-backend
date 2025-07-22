import express, { Router } from "express"
import { handleLogin, handleSignup } from "../controllers/users.controllers"
import { validateSignup } from "../middlewares/validationMiddleware"

export const userRouter = express.Router()

userRouter.post('/signup', validateSignup, handleSignup)
userRouter.post('/login', handleLogin)

