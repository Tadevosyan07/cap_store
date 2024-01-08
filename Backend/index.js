import express from "express";
import dotenv from "dotenv";
import connection from "./Utils/conntection.js";
import seedRouter from "./Router/SeedRoute.js";
import capRouter from "./Router/capRouter.js"
import blogRouter from "./Router/blogRouter.js"
import cartRouter from "./Router/CartRouter.js";
import Cart from "./Model/CartModel.js";

const app = express();
dotenv.config();
connection();

app.use(express.json());

app.use("/api/database",seedRouter);
app.use("/api/caps", capRouter)
app.use("/api/blog", blogRouter)
app.use("/api/cart", cartRouter)

app.listen(process.env.PORT, () => {
  console.log(`SERVER RUNNING ON PORT ${process.env.PORT}`);
});
