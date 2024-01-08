import { Router } from "express";
import blogController from "../Controller/BlogController.js";
const {getAll, getById} = blogController

const blogRouter = Router()

blogRouter.get("/", getAll)
blogRouter.get("/:_id", getById)

export default blogRouter