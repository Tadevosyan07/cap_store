import CapController from "../Controller/CapController.js";
const {getAll, getById} = CapController
import { Router } from "express";
 
const capRouter = Router()

capRouter.get("/", getAll)
capRouter.get("/:_id", getById)

export default capRouter