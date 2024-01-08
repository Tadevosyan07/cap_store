import { Router } from "express";
import cartController from "../Controller/cartController.js"
const { addToCart } = cartController

const cartRouter = Router()

cartRouter.post("/add", addToCart)
cartRouter.post("/add", addToCart)

export default cartRouter