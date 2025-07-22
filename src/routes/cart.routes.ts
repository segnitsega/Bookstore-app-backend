import express from 'express'
import { getCartItems } from '../controllers/cart.controllers';

const cartRouter = express.Router();

cartRouter.get('/', getCartItems)

export default cartRouter ; 