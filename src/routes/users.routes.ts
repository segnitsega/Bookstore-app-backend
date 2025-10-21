import express, { Router } from "express"
import { getUser, getUserCartItems, handleLogin, handleSignup, handleUpdateProfile } from "../controllers/users.controllers"
import { validateSignup } from "../middlewares/validationMiddleware"

export const userRouter = express.Router()

userRouter.post('/signup', validateSignup, handleSignup)
userRouter.post('/login', handleLogin)
userRouter.get('/cart/:id', getUserCartItems)
userRouter.post('/update-profile/:id', handleUpdateProfile)
userRouter.get('/:id', getUser)
