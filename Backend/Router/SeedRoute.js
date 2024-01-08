import {Router} from "express";
import seedController from "../Controller/seedController.js"

const seedRouter = Router() 

seedRouter.get('/seed', seedController.seedDatabase)

export default seedRouter
